/* Français Plus – Learning modules v1.1 Exercise bank, vocabulary, dashboard and progress layer. Content is original practice material aligned to CEFR; not copied from Édito. */
(() => {
  "use strict";
  const LEVELS = ["A1", "A2", "B1", "B2"];
  const lexicon = {
    A1: [
      ["bonjour", "xin chào", "Bonjour, comment allez-vous ?"],
      ["au revoir", "tạm biệt", "Au revoir et à demain !"],
      ["merci", "cảm ơn", "Merci pour votre aide."],
      ["s’il vous plaît", "làm ơn", "Un café, s’il vous plaît."],
      ["la famille", "gia đình", "Ma famille habite à Hanoï."],
      ["la mère", "mẹ", "Ma mère aime lire."],
      ["le père", "bố", "Mon père travaille ici."],
      ["un frère", "anh/em trai", "J’ai un frère."],
      ["une sœur", "chị/em gái", "Ma sœur est étudiante."],
      ["un ami", "một người bạn", "Paul est mon ami."],
      ["une maison", "ngôi nhà", "Notre maison est petite."],
      ["un appartement", "căn hộ", "J’habite dans un appartement."],
      ["une chambre", "phòng ngủ", "Ma chambre est claire."],
      ["une cuisine", "nhà bếp", "La cuisine est à gauche."],
      ["une école", "trường học", "L’école est près du parc."],
      ["un livre", "quyển sách", "Je lis un livre français."],
      ["un stylo", "cây bút", "Voici un stylo bleu."],
      ["une table", "cái bàn", "Le livre est sur la table."],
      ["une chaise", "cái ghế", "La chaise est confortable."],
      ["un sac", "cái túi", "Mon sac est noir."],
      ["un chat", "con mèo", "Le chat dort."],
      ["un chien", "con chó", "Le chien joue dans le jardin."],
      ["l’eau", "nước", "Je bois de l’eau."],
      ["le pain", "bánh mì", "J’achète du pain."],
      ["le fromage", "phô mai", "J’aime le fromage."],
      ["une pomme", "quả táo", "Elle mange une pomme."],
      ["le café", "cà phê", "Je prends un café."],
      ["le thé", "trà", "Tu veux du thé ?"],
      ["le matin", "buổi sáng", "Je travaille le matin."],
      ["le soir", "buổi tối", "Nous étudions le soir."],
      ["aujourd’hui", "hôm nay", "Aujourd’hui, il fait beau."],
      ["demain", "ngày mai", "À demain !"],
      ["hier", "hôm qua", "Hier, j’étais à la maison."],
      ["lundi", "thứ Hai", "Le cours commence lundi."],
      ["une heure", "một giờ", "Il est une heure."],
      ["la gare", "nhà ga", "La gare est au centre-ville."],
      ["une rue", "con phố", "Cette rue est calme."],
      ["un magasin", "cửa hàng", "Le magasin ouvre à neuf heures."],
      ["un marché", "chợ", "Nous allons au marché."],
      ["un médecin", "bác sĩ", "Le médecin arrive bientôt."],
      ["parler", "nói", "Je parle un peu français."],
      ["écouter", "nghe", "J’écoute la radio."],
      ["regarder", "xem, nhìn", "Nous regardons un film."],
      ["aimer", "thích, yêu", "J’aime apprendre."],
      ["habiter", "sống, cư trú", "Elle habite à Lyon."],
      ["travailler", "làm việc", "Ils travaillent ensemble."],
      ["étudier", "học tập", "Tu étudies le français."],
      ["acheter", "mua", "Je voudrais acheter ce livre."],
      ["manger", "ăn", "Nous mangeons à midi."],
      ["boire", "uống", "Il boit un verre d’eau."],
    ],
    A2: [
      ["un voyage", "chuyến du lịch", "Nous préparons un voyage en France."],
      ["un billet", "vé", "J’ai réservé un billet de train."],
      ["une réservation", "sự đặt chỗ", "La réservation est confirmée."],
      ["un séjour", "kỳ lưu trú", "Le séjour dure une semaine."],
      ["un itinéraire", "lộ trình", "Voici notre itinéraire."],
      ["un musée", "bảo tàng", "Nous avons visité un musée."],
      ["une exposition", "triển lãm", "Cette exposition est intéressante."],
      ["un souvenir", "kỷ niệm", "J’ai acheté un souvenir."],
      ["un paysage", "phong cảnh", "Le paysage est magnifique."],
      ["une plage", "bãi biển", "La plage est très fréquentée."],
      ["un appartement", "căn hộ", "Ils cherchent un appartement."],
      ["un loyer", "tiền thuê nhà", "Le loyer est assez élevé."],
      ["un voisin", "hàng xóm", "Mon voisin est sympathique."],
      ["déménager", "chuyển nhà", "Nous allons déménager en juin."],
      ["un quartier", "khu phố", "Ce quartier est agréable."],
      ["un emploi", "việc làm", "Elle cherche un nouvel emploi."],
      ["un entretien", "buổi phỏng vấn", "J’ai un entretien demain."],
      ["un collègue", "đồng nghiệp", "Mes collègues sont gentils."],
      ["un horaire", "lịch giờ", "Les horaires ont changé."],
      ["un rendez-vous", "cuộc hẹn", "J’ai pris rendez-vous."],
      ["se dépêcher", "vội vàng", "Dépêche-toi, le bus arrive !"],
      ["se reposer", "nghỉ ngơi", "Tu devrais te reposer."],
      ["tomber malade", "bị ốm", "Il est tombé malade hier."],
      ["une ordonnance", "đơn thuốc", "Le médecin a écrit une ordonnance."],
      ["un conseil", "lời khuyên", "Merci pour ce conseil."],
      ["une habitude", "thói quen", "Lire est une bonne habitude."],
      ["économiser", "tiết kiệm", "Nous voulons économiser de l’argent."],
      ["prévoir", "dự định, dự kiến", "Je prévois de partir samedi."],
      ["réussir", "thành công", "Elle a réussi son examen."],
      ["échouer", "thất bại", "Il ne faut pas avoir peur d’échouer."],
      ["récemment", "gần đây", "J’ai récemment changé de travail."],
      ["autrefois", "trước đây", "Autrefois, je vivais à la campagne."],
      ["pendant", "trong suốt", "Nous avons marché pendant deux heures."],
      ["depuis", "kể từ", "J’apprends le français depuis janvier."],
      ["pourtant", "tuy nhiên", "Il pleut, pourtant elle sort."],
      ["cependant", "tuy nhiên", "Cependant, une autre solution existe."],
      [
        "en revanche",
        "ngược lại",
        "Le train est rapide ; en revanche, il coûte cher.",
      ],
      [
        "un embouteillage",
        "tắc đường",
        "Nous sommes bloqués dans un embouteillage.",
      ],
      [
        "un moyen de transport",
        "phương tiện giao thông",
        "Le vélo est un moyen de transport pratique.",
      ],
      ["une panne", "sự hỏng hóc", "La voiture est en panne."],
      [
        "un déménagement",
        "việc chuyển nhà",
        "Le déménagement est prévu dimanche.",
      ],
      ["une facture", "hóa đơn", "J’ai payé la facture."],
      ["un appareil", "thiết bị", "Cet appareil est facile à utiliser."],
      ["une économie", "khoản tiết kiệm", "Cette mesure permet une économie."],
      ["un loisir", "hoạt động giải trí", "La lecture est mon loisir préféré."],
      ["une activité", "hoạt động", "Nous cherchons une activité gratuite."],
      ["s’inscrire", "đăng ký", "Je voudrais m’inscrire au cours."],
      ["annuler", "hủy bỏ", "Il faut annuler le rendez-vous."],
      ["emprunter", "mượn", "Je peux emprunter ton dictionnaire ?"],
      ["rendre", "trả lại", "Je dois rendre ce livre demain."],
    ],
    B1: [
      ["une candidature", "hồ sơ ứng tuyển", "Sa candidature a été retenue."],
      ["un poste", "vị trí công việc", "Elle postule à un poste intéressant."],
      [
        "une compétence",
        "năng lực",
        "La communication est une compétence utile.",
      ],
      [
        "une expérience",
        "kinh nghiệm",
        "Cette expérience m’a beaucoup appris.",
      ],
      ["un objectif", "mục tiêu", "Nous devons définir un objectif clair."],
      [
        "une démarche",
        "cách tiếp cận, thủ tục",
        "La démarche demande du temps.",
      ],
      ["un enjeu", "vấn đề then chốt", "L’éducation est un enjeu majeur."],
      ["un comportement", "hành vi", "Son comportement a changé."],
      ["un témoignage", "lời chứng, chia sẻ", "Ce témoignage est touchant."],
      ["un désaccord", "sự bất đồng", "Ils ont exprimé leur désaccord."],
      [
        "une confiance",
        "sự tin tưởng",
        "La confiance se construit progressivement.",
      ],
      ["un soutien", "sự hỗ trợ", "Elle a reçu le soutien de ses amis."],
      [
        "une responsabilité",
        "trách nhiệm",
        "Chacun doit prendre ses responsabilités.",
      ],
      ["une amélioration", "sự cải thiện", "Nous constatons une amélioration."],
      ["un changement", "sự thay đổi", "Le changement prend du temps."],
      ["une conséquence", "hệ quả", "Cette décision aura des conséquences."],
      ["une cause", "nguyên nhân", "Il faut identifier la cause du problème."],
      ["un avantage", "ưu điểm", "Cette solution présente un avantage."],
      [
        "un inconvénient",
        "nhược điểm",
        "Le principal inconvénient est le coût.",
      ],
      [
        "une possibilité",
        "khả năng",
        "Une autre possibilité mérite réflexion.",
      ],
      ["une relation", "mối quan hệ", "Une relation repose sur le respect."],
      ["un échange", "sự trao đổi", "Cet échange était enrichissant."],
      ["un débat", "cuộc tranh luận", "Le débat a duré une heure."],
      ["un point de vue", "quan điểm", "Je comprends ton point de vue."],
      ["une opinion", "ý kiến", "Chacun peut donner son opinion."],
      [
        "remettre en question",
        "đặt lại vấn đề",
        "Il faut remettre cette idée en question.",
      ],
      ["faire confiance", "tin tưởng", "Je fais confiance à mon équipe."],
      ["s’engager", "cam kết, tham gia", "Les citoyens souhaitent s’engager."],
      [
        "soutenir",
        "ủng hộ, hỗ trợ",
        "Cette association soutient les familles.",
      ],
      ["améliorer", "cải thiện", "Nous voulons améliorer le service."],
      [
        "développer",
        "phát triển",
        "La ville développe les transports publics.",
      ],
      ["éviter", "tránh", "Il vaut mieux éviter les erreurs."],
      ["permettre", "cho phép", "Cette formation permet de progresser."],
      ["contribuer à", "đóng góp vào", "Chacun peut contribuer à ce projet."],
      [
        "en revanche",
        "ngược lại",
        "Le coût est élevé ; en revanche, la qualité est bonne.",
      ],
      [
        "néanmoins",
        "tuy nhiên",
        "Néanmoins, cette proposition reste intéressante.",
      ],
      ["puisque", "bởi vì", "Puisque tu es prêt, commençons."],
      [
        "tandis que",
        "trong khi",
        "Il préfère lire tandis que je préfère écrire.",
      ],
      ["par conséquent", "do đó", "Par conséquent, nous devons agir."],
      [
        "en raison de",
        "do, bởi vì",
        "Le match est annulé en raison de la pluie.",
      ],
      ["grâce à", "nhờ vào", "Grâce à toi, nous avons réussi."],
      ["malgré", "mặc dù", "Malgré les difficultés, elle continue."],
      ["un environnement", "môi trường", "Il faut protéger l’environnement."],
      ["un citoyen", "công dân", "Chaque citoyen peut participer."],
      ["un média", "phương tiện truyền thông", "Ce média publie une enquête."],
      ["une enquête", "cuộc điều tra", "L’enquête révèle plusieurs problèmes."],
      [
        "une habitude de consommation",
        "thói quen tiêu dùng",
        "Les habitudes de consommation évoluent.",
      ],
      [
        "un réseau social",
        "mạng xã hội",
        "Ce réseau social compte beaucoup d’utilisateurs.",
      ],
      [
        "un service public",
        "dịch vụ công",
        "Le service public doit rester accessible.",
      ],
      [
        "un témoignage fiable",
        "lời chia sẻ đáng tin",
        "Il faut vérifier que le témoignage est fiable.",
      ],
    ],
    B2: [
      [
        "nuancer son propos",
        "làm cho lập luận có sắc thái",
        "Il convient de nuancer son propos.",
      ],
      [
        "une démarche concertée",
        "cách tiếp cận có phối hợp",
        "Une démarche concertée est indispensable.",
      ],
      [
        "pallier un manque",
        "khắc phục sự thiếu hụt",
        "Cette mesure vise à pallier un manque de ressources.",
      ],
      [
        "à l’aune de",
        "dưới góc độ, căn cứ theo",
        "Évaluer cette décision à l’aune de ses résultats.",
      ],
      [
        "remettre en question",
        "đặt lại vấn đề",
        "Cette étude remet en question les idées reçues.",
      ],
      [
        "un enjeu majeur",
        "vấn đề then chốt",
        "La transition écologique est un enjeu majeur.",
      ],
      [
        "approfondir",
        "nghiên cứu sâu",
        "Nous devons approfondir cette analyse.",
      ],
      [
        "une mesure incitative",
        "biện pháp khuyến khích",
        "Une mesure incitative peut modifier les comportements.",
      ],
      [
        "une conséquence inattendue",
        "hệ quả ngoài dự kiến",
        "La réforme a produit une conséquence inattendue.",
      ],
      [
        "un compromis",
        "sự thỏa hiệp",
        "Les partenaires ont trouvé un compromis.",
      ],
      [
        "une contrainte",
        "sự ràng buộc",
        "Le budget constitue une contrainte importante.",
      ],
      [
        "une perspective",
        "viễn cảnh, góc nhìn",
        "Cette perspective mérite d’être étudiée.",
      ],
      ["une hypothèse", "giả thuyết", "Cette hypothèse doit être vérifiée."],
      [
        "une contradiction",
        "sự mâu thuẫn",
        "Son argument contient une contradiction.",
      ],
      ["une ambiguïté", "sự mơ hồ", "Il faut lever toute ambiguïté."],
      [
        "une portée",
        "tầm ảnh hưởng",
        "La portée de cette décision est considérable.",
      ],
      ["un levier", "đòn bẩy", "L’éducation est un levier de transformation."],
      [
        "un dispositif",
        "cơ chế, hệ thống",
        "Le dispositif sera évalué chaque année.",
      ],
      [
        "une inégalité",
        "sự bất bình đẳng",
        "La politique vise à réduire les inégalités.",
      ],
      [
        "une transition",
        "sự chuyển đổi",
        "La transition énergétique exige des investissements.",
      ],
      [
        "la résilience",
        "khả năng phục hồi",
        "La résilience des villes est essentielle.",
      ],
      [
        "la cohésion sociale",
        "sự gắn kết xã hội",
        "La culture renforce la cohésion sociale.",
      ],
      [
        "la sensibilisation",
        "sự nâng cao nhận thức",
        "La sensibilisation du public est nécessaire.",
      ],
      [
        "la mise en œuvre",
        "việc triển khai",
        "La mise en œuvre prendra plusieurs mois.",
      ],
      [
        "un approfondissement",
        "sự nghiên cứu chuyên sâu",
        "Un approfondissement de la question est nécessaire.",
      ],
      [
        "une prise de conscience",
        "sự nhận thức",
        "Une prise de conscience collective émerge.",
      ],
      [
        "un consensus",
        "sự đồng thuận",
        "Les chercheurs ne sont pas parvenus à un consensus.",
      ],
      [
        "une controverse",
        "cuộc tranh cãi",
        "Cette décision suscite une controverse.",
      ],
      [
        "un argument fondé",
        "lập luận có cơ sở",
        "Il avance un argument fondé sur des données.",
      ],
      [
        "une source fiable",
        "nguồn đáng tin cậy",
        "Toute affirmation doit reposer sur une source fiable.",
      ],
      ["s’avérer", "hóa ra, tỏ ra", "Cette solution s’avère efficace."],
      ["remédier à", "khắc phục", "Il faut remédier à cette situation."],
      [
        "préconiser",
        "chủ trương, khuyến nghị",
        "Le rapport préconise une réforme.",
      ],
      ["souligner", "nhấn mạnh", "L’auteur souligne plusieurs limites."],
      [
        "contester",
        "phản bác, tranh cãi",
        "Certains experts contestent cette interprétation.",
      ],
      ["concilier", "dung hòa", "Il faut concilier efficacité et équité."],
      [
        "renforcer",
        "tăng cường",
        "Cette mesure vise à renforcer la coopération.",
      ],
      ["entraver", "cản trở", "Le manque de moyens peut entraver le projet."],
      ["favoriser", "thúc đẩy", "La formation favorise l’autonomie."],
      [
        "préserver",
        "bảo tồn, gìn giữ",
        "Nous devons préserver les ressources naturelles.",
      ],
      [
        "à long terme",
        "về lâu dài",
        "Cette décision aura des effets à long terme.",
      ],
      [
        "dans la mesure où",
        "trong chừng mực mà",
        "Cette option est pertinente dans la mesure où elle reste accessible.",
      ],
      [
        "pour autant",
        "vì thế, tuy nhiên",
        "Le progrès est utile sans pour autant être suffisant.",
      ],
      ["en dépit de", "bất chấp", "En dépit des obstacles, le projet avance."],
      [
        "dès lors",
        "kể từ đó, do vậy",
        "Dès lors, une autre stratégie s’impose.",
      ],
      [
        "sous réserve de",
        "với điều kiện là",
        "La proposition est acceptée sous réserve de modifications.",
      ],
      [
        "à défaut de",
        "nếu không có",
        "À défaut de preuves, la conclusion reste fragile.",
      ],
      [
        "faire valoir",
        "nêu ra, viện dẫn",
        "Elle souhaite faire valoir ses arguments.",
      ],
      [
        "mettre en évidence",
        "làm nổi bật",
        "Les résultats mettent en évidence une tendance.",
      ],
      [
        "prendre du recul",
        "lùi lại để nhìn nhận khách quan",
        "Il faut prendre du recul avant de conclure.",
      ],
    ],
  };
  const stateKey = "fp_state";
  function safeState() {
    try {
      const s = JSON.parse(localStorage.getItem(stateKey) || "{}");
      return {
        done: Array.isArray(s.done) ? s.done : [],
        scores: Array.isArray(s.scores) ? s.scores : [],
        words: Array.isArray(s.words) ? s.words : [],
        days: Array.isArray(s.days) ? s.days : [],
        last: s.last || null,
        wrong: Array.isArray(s.wrong) ? s.wrong : [],
        reviewed: Array.isArray(s.reviewed) ? s.reviewed : [],
        daily: s.daily || {},
      };
    } catch {
      return {
        done: [],
        scores: [],
        words: [],
        days: [],
        last: null,
        wrong: [],
        reviewed: [],
        daily: {},
      };
    }
  }
  // Keep the existing app's state object and add new fields without discarding prior learner records.
  Object.assign(state, safeState());
  function persist() {
    localStorage.setItem(stateKey, JSON.stringify(state));
    if (typeof updateStats === "function") updateStats();
  }
  function shuffle(a) {
    const x = a.slice();
    for (let i = x.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [x[i], x[j]] = [x[j], x[i]];
    }
    return x;
  }
  function hash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(36);
  }
  const bank = {};
  const patterns = [
    (w) => ({
      prompt: `Que signifie « ${w[0]} » ?`,
      sub: "Chọn nghĩa tiếng Việt chính xác.",
      answer: w[1],
      type: "Vocabulaire",
    }),
    (w) => ({
      prompt: `Choisissez la bonne traduction de « ${w[0]} ».`,
      sub: "Từ vựng Pháp – Việt.",
      answer: w[1],
      type: "Traduction",
    }),
    (w) => ({
      prompt: `Dans la phrase « ${w[2]} », quelle expression est étudiée ?`,
      sub: `Nghĩa của cụm từ được hỏi: ${w[0]}.`,
      answer: w[1],
      type: "Compréhension",
    }),
    (w) => ({
      prompt: `Quel est le sens de l’expression « ${w[0]} » dans ce contexte ?`,
      sub: w[2],
      answer: w[1],
      type: "Contexte",
    }),
    (w) => ({
      prompt: `Associez l’expression française « ${w[0]} » à son équivalent.`,
      sub: "Chọn cặp nghĩa tương ứng.",
      answer: w[1],
      type: "Association",
    }),
    (w) => ({
      prompt: `Vous lisez « ${w[0]} » dans un texte. Que devez-vous comprendre ?`,
      sub: "Kiểm tra khả năng hiểu từ vựng.",
      answer: w[1],
      type: "Lecture",
    }),
    (w) => ({
      prompt: `Quelle proposition explique correctement « ${w[0]} » ?`,
  
