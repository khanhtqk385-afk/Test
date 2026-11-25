const units = {
  A1: [
    ["Unité 1 – Bonjour !", "Chào hỏi và giới thiệu bản thân", "Động từ être và s’appeler", "Bonjour ! Je m’appelle Lan. Je suis vietnamienne.", "bonjour = xin chào; je m’appelle = tôi tên là"],
    ["Unité 2 – Au quotidien", "Sinh hoạt hằng ngày", "Động từ nhóm -er", "Je travaille et j’étudie le français.", "travailler = làm việc; étudier = học"],
    ["Unité 3 – En ville", "Hỏi đường và địa điểm", "Giới từ chỉ địa điểm", "Où est la gare ? Elle est près du café.", "la gare = nhà ga; près de = gần"],
    ["Unité 4 – À table", "Đồ ăn và gọi món", "Mạo từ bộ phận", "Je voudrais un café et une salade.", "un café = cà phê; une salade = salad"]
  ],
  A2: [
    ["Unité 1 – Souvenirs", "Kể về quá khứ", "Passé composé", "Hier, j’ai visité Paris.", "hier = hôm qua; visiter = tham quan"],
    ["Unité 2 – Projets", "Dự định và kế hoạch", "Futur proche", "Nous allons voyager demain.", "voyager = du lịch; demain = ngày mai"],
    ["Unité 3 – Se loger", "Nhà ở và cuộc sống", "So sánh hơn", "Cet appartement est plus grand.", "un appartement = căn hộ; grand = rộng"],
    ["Unité 4 – Santé", "Sức khỏe", "Devoir và pouvoir", "Tu dois te reposer.", "se reposer = nghỉ ngơi; la santé = sức khỏe"]
  ],
  B1: [
    ["Unité 1 – Relations", "Quan hệ xã hội", "Mệnh đề quan hệ qui, que, où", "C’est une personne qui m’aide.", "une relation = mối quan hệ; aider = giúp đỡ"],
    ["Unité 2 – Travail", "Công việc", "Conditionnel de politesse", "Je souhaiterais obtenir des informations.", "un emploi = việc làm; une candidature = hồ sơ"],
    ["Unité 3 – Société", "Xã hội", "Connecteurs logiques", "Les transports sont pratiques, pourtant ils sont chers.", "pourtant = tuy nhiên; cependant = tuy nhiên"],
    ["Unité 4 – Culture", "Văn hóa", "Subjonctif", "Il faut que chacun puisse participer.", "une œuvre = tác phẩm; participer = tham gia"]
  ],
  B2: [
    ["Unité 1 – Débattre", "Tranh luận", "Nhượng bộ và lập luận", "Bien que ce soit difficile, nous devons agir.", "bien que = mặc dù; toutefois = tuy nhiên"],
    ["Unité 2 – Environnement", "Môi trường", "Conditionnel passé", "Nous aurions pu réduire les déchets.", "les déchets = rác thải; durable = bền vững"],
    ["Unité 3 – Médias", "Truyền thông", "Câu bị động", "Cette information a été confirmée.", "une source = nguồn; fiable = đáng tin"],
    ["Unité 4 – Profession", "Thế giới nghề nghiệp", "Văn phong trang trọng", "Je vous remercie de votre attention.", "une démarche = thủ tục; approfondi = chuyên sâu"]
  ]
};

const questions = {
  A1: [
    ["Comment tu t’appelles ?", ["Je m’appelle Lan.", "Je suis vingt ans.", "J’habite merci."], 0, "Je m’appelle = Tôi tên là."],
    ["Merci signifie…", ["Xin chào", "Cảm ơn", "Tạm biệt"], 1, "Merci = Cảm ơn."],
    ["Je ___ vietnamien.", ["suis", "es", "sommes"], 0, "Je suis = Tôi là."],
    ["La gare signifie…", ["Trường học", "Nhà ga", "Bệnh viện"], 1, "La gare = Nhà ga."],
    ["Quel jour vient après lundi ?", ["Mardi", "Dimanche", "Samedi"], 0, "Mardi = Thứ Ba."]
  ],
  A2: [
    ["Hier, j’___ au cinéma.", ["vais", "suis allé", "irai"], 1, "Passé composé của aller."],
    ["Demain, nous ___ voyager.", ["allons", "sommes", "avons"], 0, "Futur proche = aller + infinitif."],
    ["Le contraire de facile est…", ["simple", "difficile", "rapide"], 1, "Difficile = khó."],
    ["Je vais ___ Paris.", ["à", "en", "au"], 0, "On dit aller à Paris."],
    ["Depuis deux ans diễn tả…", ["Tương lai", "Thời gian còn tiếp diễn", "Mệnh lệnh"], 1, "Depuis diễn tả khoảng thời gian bắt đầu trong quá khứ và còn tiếp diễn."]
  ],
  B1: [
    ["La personne ___ parle est gentille.", ["qui", "que", "où"], 0, "Qui là chủ ngữ."],
    ["Il est fatigué, ___ il continue.", ["donc", "pourtant", "car"], 1, "Pourtant = tuy nhiên."],
    ["Si j’avais le temps, je ___ plus.", ["lis", "lirais", "ai lu"], 1, "Si + imparfait → conditionnel présent."],
    ["Une candidature signifie…", ["Hồ sơ ứng tuyển", "Kỳ nghỉ", "Cuộc họp"], 0, "Une candidature = hồ sơ ứng tuyển."],
    ["Il faut que tu ___.", ["viens", "viennes", "viendras"], 1, "Il faut que + subjonctif."]
  ],
  B2: [
    ["Bien que le sujet ___ complexe…", ["est", "soit", "sera"], 1, "Bien que + subjonctif."],
    ["Cette décision a été ___.", ["annoncé", "annoncée", "annoncées"], 1, "Décision là danh từ giống cái, số ít."],
    ["Toutefois exprime…", ["Mục đích", "Sự đối lập", "Thời gian"], 1, "Toutefois = tuy nhiên."],
    ["Si nous avions su, nous ___ autrement.", ["agirons", "aurions agi", "agissons"], 1, "Si + plus-que-parfait → conditionnel passé."],
    ["Une source fiable est une source…", ["Crédible", "Fausse", "Inutile"], 0, "Fiable = đáng tin cậy."]
  ]
};

const vocabulary = [
  ["bonjour", "xin chào"], ["au revoir", "tạm biệt"],
  ["merci", "cảm ơn"], ["s’il vous plaît", "làm ơn"],
  ["je m’appelle", "tôi tên là"], ["habiter", "sống, cư trú"],
  ["travailler", "làm việc"], ["aujourd’hui", "hôm nay"],
  ["demain", "ngày mai"], ["hier", "hôm qua"],
  ["la gare", "nhà ga"], ["une rue", "con đường"],
  ["un repas", "bữa ăn"], ["une boisson", "đồ uống"],
  ["apprendre", "học"], ["comprendre", "hiểu"],
  ["réussir", "thành công"], ["pourtant", "tuy nhiên"],
  ["cependant", "tuy nhiên"], ["un environnement", "môi trường"],
  ["une expérience", "kinh nghiệm"], ["une possibilité", "khả năng"],
  ["un avantage", "ưu điểm"], ["une conséquence", "hậu quả"],
  ["durable", "bền vững"]
];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("fp_state"));
    return {
      done: saved?.done || [],
      scores: saved?.scores || [],
      words: saved?.words || [],
      days: saved?.days || []
    };
  } catch {
    return { done: [], scores: [], words: [], days: [] };
  }
}

let state = loadState();
let currentQuestions = [];
let answers = {};
let questionIndex = 0;
let lessonContext = null;

function saveState() {
  localStorage.setItem("fp_state", JSON.stringify(state));
  updateStats();
}

function showView(id) {
  const section = document.getElementById(id);
  if (!section) return;

  document.querySelectorAll(".view").forEach(el => el.classList.remove("active"));
  section.classList.add("active");

  document.querySelectorAll(".navbtn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === id);
  });

  if (id === "progress") renderProgress();
  if (id === "vocabulary") renderWords();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".navbtn").forEach(btn => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

function levelProgress(level) {
  const total = units[level].length;
  const completed = units[level].filter((_, i) =>
    state.done.includes(level + "-" + i)
  ).length;
  return Math.round(completed / total * 100);
}

function selectLevel(level) {
  const selector = document.getElementById("courseLevel");
  if (selector) selector.value = level;
  renderCourses();
  showView("courses");
}

function renderCourses() {
  const selector = document.getElementById("courseLevel");
  const area = document.getElementById("courseDetail");
  if (!selector || !area) return;

  const level = selector.value;
  area.innerHTML = `
    <div class="card" style="grid-column:1/-1">
      <h2>${level} – ${levelName(level)}</h2>
      <p>Tiến độ: ${levelProgress(level)}%</p>
      <div class="progress"><div style="width:${levelProgress(level)}%"></div></div>
    </div>
    ${units[level].map((unit, i) => `
      <div class="card lesson-item">
        <span class="level-tag">${level} · Unité ${i + 1}</span>
        <h3>${unit[0]}</h3>
        <p>${unit[1]}</p>
        <p>${state.done.includes(level + "-" + i) ? "✓ Đã hoàn thành" : "Chưa hoàn thành"}</p>
        <button class="btn" onclick="openLesson('${level}',${i})">Vào bài học →</button>
      </div>
    `).join("")}
  `;
}

function levelName(level) {
  return {
    A1: "Débutant",
    A2: "Élémentaire",
    B1: "Intermédiaire",
    B2: "Avancé"
  }[level] || level;
}

function openLesson(level, index) {
  const unit = units[level]?.[index];
  if (!unit) return;

  lessonContext = { level, index };

  document.getElementById("lessonTitle").textContent = unit[0];
  document.getElementById("lessonContent").innerHTML = `
    <span class="level-tag">${level}</span>
    <h2>${unit[1]}</h2>
    <h3>🎯 Mục tiêu bài học</h3>
    <p>${unit[2]}</p>
    <h3>📖 Exemple – Ví dụ</h3>
    <p style="font-size:20px;color:#2463c7">${unit[3]}</p>
    <button class="btn secondary" onclick="speak(${JSON.stringify(unit[3])})">🔊 Nghe phát âm</button>
    <h3>🗂️ Vocabulaire – Từ vựng</h3>
    <p>${unit[4]}</p>
    <h3>✍️ Thực hành</h3>
    <p>Hãy đọc câu ví dụ và thử tự đặt một câu tương tự.</p>
    <button class="btn" onclick="lessonQuiz('${level}')">Làm bài kiểm tra cuối bài</button>
  `;

  showView("lesson");
}

function lessonQuiz(level) {
  document.getElementById("practiceLevel").value = level;
  showView("practice");
  startQuiz();
}

function startQuiz() {
  const level = document.getElementById("practiceLevel").value;
  currentQuestions = questions[level];
  answers = {};
  questionIndex = 0;
  renderQuestion();
}

function chooseAnswer(index) {
  answers[questionIndex] = index;
  renderQuestion();
}

function nextQuestion() {
  if (answers[questionIndex] === undefined) {
    alert("Hãy chọn một đáp án trước nhé!");
    return;
  }

  questionIndex++;
  renderQuestion();
}

function renderQuestion() {
  const area = document.getElementById("quizArea");
  if (!area) return;

  if (questionIndex >= currentQuestions.length) {
    finishQuiz();
    return;
  }

  const level = document.getElementById("practiceLevel").value;
  const q = currentQuestions[questionIndex];

  area.innerHTML = `
    <div class="question">
      <p>${level} · Câu ${questionIndex + 1}/${currentQuestions.length}</p>
      <h3>${q[0]}</h3>
      ${q[1].map((option, i) => `
        <button class="option ${answers[questionIndex] === i ? "correct" : ""}"
          onclick="chooseAnswer(${i})">
          ${String.fromCharCode(65 + i)}. ${option}
        </button>
      `).join("")}
      <p>${answers[questionIndex] !== undefined ? q[3] : ""}</p>
      <button class="btn" onclick="nextQuestion()">
        ${questionIndex === currentQuestions.length - 1 ? "Nộp bài" : "Tiếp theo →"}
      </button>
    </div>
  `;
}

function finishQuiz() {
  const level = document.getElementById("practiceLevel").value;
  const correct = currentQuestions.filter((q, i) => answers[i] === q[2]).length;
  const percent = Math.round(correct / currentQuestions.length * 100);

  state.scores.push({
    level,
    score: correct,
    total: currentQuestions.length,
    pct: percent,
    date: new Date().toLocaleDateString("vi-VN")
  });

  if (lessonContext && lessonContext.level === level) {
    const id = level + "-" + lessonContext.index;
    if (!state.done.includes(id)) state.done.push(id);
    lessonContext = null;
  }

  const today = new Date().toDateString();
  if (!state.days.includes(today)) state.days.push(today);

  saveState();

  document.getElementById("quizArea").innerHTML = `
    <div class="card">
      <h2>Résultat – Kết quả</h2>
      <h1 style="font-size:42px;color:#2463c7">${correct}/${currentQuestions.length}</h1>
      <p>Bạn đạt ${percent}%.</p>
      <p>${percent >= 80 ? "Excellent ! Rất tốt!" : "Hãy tiếp tục luyện tập nhé!"}</p>
      <button class="btn" onclick="startQuiz()">Làm lại</button>
    </div>
  `;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("Trình duyệt không hỗ trợ đọc văn bản.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  utterance.rate = 0.88;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function renderWords() {
  const area = document.getElementById("wordList");
  const search = document.getElementById("wordSearch");
  if (!area) return;

  const keyword = (search?.value || "").toLowerCase().trim();
  const filtered = vocabulary.filter(item =>
    item.join(" ").toLowerCase().includes(keyword)
  );

  area.innerHTML = filtered.map(item => `
    <div class="word-row">
      <div>
        <strong>${item[0]}</strong><br>
        <span>${item[1]}</span>
      </div>
      <div>
        <button class="btn secondary" onclick="speak(${JSON.stringify(item[0])})">🔊</button>
        <button class="btn" onclick="markWord(${JSON.stringify(item[0])})">
          ${state.words.includes(item[0]) ? "✓ Đã học" : "Ôn từ"}
        </button>
      </div>
    </div>
  `).join("") || "<p>Không tìm thấy từ phù hợp.</p>";
}

function markWord(word) {
  if (!state.words.includes(word)) state.words.push(word);
  saveState();
  renderWords();
}

function updateStats() {
  const average = state.scores.length
    ? Math.round(state.scores.reduce((sum, s) => sum + s.pct, 0) / state.scores.length)
    : 0;

  const values = {
    statDone: state.done.length,
    statWords: state.words.length,
    statScore: average + "%",
    statStreak: state.days.length
  };

  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });

  renderCourses();
}

function renderProgress() {
  const area = document.getElementById("progressContent");
  if (!area) return;

  area.innerHTML = `
    <h2>Kết quả học tập</h2>
    <p>Bài học hoàn thành: ${state.done.length}</p>
    <p>Từ vựng đã ôn: ${state.words.length}</p>
    <p>Số lượt kiểm tra: ${state.scores.length}</p>
    <h3>Tiến độ theo cấp độ</h3>
    ${["A1", "A2", "B1", "B2"].map(level => `
      <p>${level}: ${levelProgress(level)}%</p>
      <div class="progress"><div style="width:${levelProgress(level)}%"></div></div>
    `).join("")}
    <h3>Lịch sử kiểm tra</h3>
    ${state.scores.slice().reverse().map(s => `
      <div class="word-row">${s.level} · ${s.date} <strong>${s.score}/${s.total} (${s.pct}%)</strong></div>
    `).join("") || "<p>Chưa có kết quả.</p>"}
  `;
}

function exportProgress() {
  const data = JSON.stringify(state, null, 2);
  const file = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "francais-plus-progress.json";
  link.click();
  URL.revokeObjectURL(url);
}

/* ===== AI FRANÇAIS ===== */

const FP_AI_API_URL = ""; // Điền URL Worker thật sau khi triển khai backend.

const botNames = {
  teacher: "Gia sư tiếng Pháp",
  conversation: "Bot luyện hội thoại",
  grammar: "Trợ lý ngữ pháp",
  exam: "Bot luyện thi DELF"
};

function updateBotTitle() {
  const selector = document.getElementById("botLevel");
  const title = document.getElementById("botTitle");
  if (selector && title) {
    title.textContent = botNames[selector.value] || "Trợ lý tiếng Pháp";
  }
}

async function sendChat(event) {
  event.preventDefault();

  const input = document.getElementById("chatInput");
  const log = document.getElementById("chatLog");
  const selector = document.getElementById("botLevel");
  const message = input.value.trim();

  if (!message) return;

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = message;
  log.appendChild(userMessage);
  input.value = "";

  if (!FP_AI_API_URL) {
    const notice = document.createElement("div");
    notice.className = "message bot";
    notice.textContent =
      "AI chưa được kết nối máy chủ. Các chức năng bài học, bài tập và từ vựng vẫn sử dụng bình thường. Cần triển khai Worker backend và cấu hình URL để bật AI.";
    log.appendChild(notice);
    log.scrollTop = log.scrollHeight;
    return;
  }

  const loading = document.createElement("div");
  loading.className = "message bot";
  loading.textContent = "Đang suy nghĩ...";
  log.appendChild(loading);

  try {
    const response = await fetch(FP_AI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bot: selector.value,
        level: document.getElementById("practiceLevel")?.value || "A1",
        message,
        history: []
      })
    });

    if (!response.ok) throw new Error("API " + response.status);

    const result = await response.json();
    loading.textContent = result.reply || "Máy chủ chưa trả về câu trả lời.";
  } catch (error) {
    loading.textContent = "Không thể kết nối AI. Hãy kiểm tra địa chỉ máy chủ và cấu hình API.";
  }

  log.scrollTop = log.scrollHeight;
}

document.getElementById("chatForm")?.addEventListener("submit", sendChat);
document.getElementById("botLevel")?.addEventListener("change", updateBotTitle);
document.getElementById("wordSearch")?.addEventListener("input", renderWords);
document.getElementById("courseLevel")?.addEventListener("change", renderCourses);

/* ===== KHỞI ĐỘNG WEBSITE ===== */

function init() {
  updateStats();
  renderWords();
  renderCourses();
  updateBotTitle();

  if (state.done.length) {
    const box = document.getElementById("continueBox");
    if (box) {
      box.innerHTML = `
        <p>Bạn đã hoàn thành ${state.done.length} bài học.</p>
        <button class="btn" onclick="showView('courses')">Tiếp tục học</button>
      `;
    }
  }
}

init();
    
