/** Français Plus AI gateway — deploy as a Cloudflare Worker. * Configure secrets/vars on the Worker, never in browser JavaScript: * OPENAI_API_KEY (secret), OPENAI_MODEL (variable), ALLOWED_ORIGIN (variable) */
const PROMPTS = {
  tutor:
    "Bạn là gia sư tiếng Pháp song ngữ Pháp–Việt. Giải thích rõ ràng, đúng trình độ; khi sửa câu hãy nêu câu đúng, lỗi và lý do ngắn gọn. Dùng ví dụ tự biên soạn. Không khẳng định nội dung là trích nguyên văn Édito.",
  conversation:
    "Bạn là bạn luyện hội thoại tiếng Pháp. Chủ động nhập vai theo tình huống đời thường, mỗi lượt chỉ hỏi một câu ngắn phù hợp trình độ. Ưu tiên tiếng Pháp; hỗ trợ tiếng Việt khi người học cần. Sửa lỗi nhẹ nhàng, không làm cuộc hội thoại quá khó.",
  exam: "Bạn là huấn luyện viên luyện thi DELF. Tạo bài luyện tự biên soạn theo kỹ năng và trình độ CEFR được cung cấp; nêu yêu cầu, thời gian gợi ý, tiêu chí đánh giá và phản hồi mang tính học tập. Không tuyên bố đề là đề thi chính thức hoặc dự đoán điểm DELF chính thức.",
  vocab:
    "Bạn là trợ lý từ vựng Pháp–Việt. Với mỗi từ/cụm từ, nêu từ loại, nghĩa tiếng Việt, giống/số nếu là danh từ, cách kết hợp thường gặp và 2 ví dụ tự nhiên phù hợp trình độ. Có thể tạo nhóm từ và câu hỏi ôn tập.",
};
function cors(origin, allowed) {
  const permitted =
    allowed === "*" ? "*" : origin === allowed ? origin : "null";
  return {
    "Access-Control-Allow-Origin": permitted,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = env.ALLOWED_ORIGIN || "*";
    const headers = cors(origin, allowed);
    if (request.method === "OPTIONS")
      return new Response(null, { status: 204, headers });
    if (origin && allowed !== "*" && origin !== allowed)
      return Response.json(
        { error: "Origin không được phép." },
        { status: 403, headers }
      );
    const url = new URL(request.url);
    if (url.pathname === "/api/health" && request.method === "GET")
      return Response.json(
        { ok: true, service: "Français Plus AI" },
        { headers }
      );
    if (url.pathname !== "/api/chat" || request.method !== "POST")
      return Response.json({ error: "Not found" }, { status: 404, headers });
    if (!env.OPENAI_API_KEY)
      return Response.json(
        { error: "Máy chủ chưa cấu hình OPENAI_API_KEY." },
        { status: 503, headers }
      );
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { error: "JSON không hợp lệ." },
        { status: 400, headers }
      );
    }
    const { bot, level, message, history = [] } = body || {};
    if (!PROMPTS[bot])
      return Response.json(
        { error: "Loại trợ lý không hợp lệ." },
        { status: 400, headers }
      );
    if (!["A1", "A2", "B1", "B2"].includes(level))
      return Response.json(
        { error: "Trình độ không hợp lệ." },
        { status: 400, headers }
      );
    if (typeof message !== "string" || !message.trim() || message.length > 4000)
      return Response.json(
        { error: "Tin nhắn phải có 1–4000 ký tự." },
        { status: 400, headers }
      );
    const safeHistory = Array.isArray(history)
      ? history
          .slice(-10)
          .filter(
            (x) =>
              x &&
              ["user", "assistant"].includes(x.role) &&
              typeof x.content === "string"
          )
          .map((x) => ({ role: x.role, content: x.content.slice(0, 4000) }))
      : [];
    const messages = [
      {
        role: "developer",
        content: `${PROMPTS[bot]}\nTrình độ người học: ${level}. Phản hồi song ngữ Pháp–Việt khi hữu ích. Giữ nội dung an toàn, tôn trọng, phù hợp học sinh. Không yêu cầu thông tin cá nhân. Nếu không chắc, hãy nói rõ.`,
      },
      ...safeHistory,
      { role: "user", content: message.trim() },
    ];
    try {
      const upstream = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: env.OPENAI_MODEL || "gpt-6-astra",
            messages,
            max_completion_tokens: 900,
          }),
        }
      );
      const result = await upstream.json().catch(() => ({}));
      if (!upstream.ok)
        return Response.json(
          { error: result.error?.message || "Nhà cung cấp AI trả về lỗi." },
          { status: upstream.status === 429 ? 429 : 502, headers }
        );
      const reply = result.choices?.[0]?.message?.content;
      if (typeof reply !== "string" || !reply.trim())
        return Response.json(
          { error: "AI không trả về nội dung." },
          { status: 502, headers }
        );
      return Response.json({ reply: reply.trim() }, { headers });
    } catch {
      return Response.json(
        { error: "Không thể kết nối dịch vụ AI. Vui lòng thử lại." },
        { status: 502, headers }
      );
    }
  },
};
