(function () {
  "use strict";

  const levels = ["A1", "A2", "B1", "B2"];

  const lessons = {
    A1: [
      {
        title: "Unité 1 – Bonjour !",
        topic: "Chào hỏi và giới thiệu bản thân",
        grammar: "Être, avoir, s’appeler; đại từ nhân xưng",
        example: "Bonjour ! Je m’appelle Léa. Je suis vietnamienne.",
        vocabulary: "bonjour = xin chào; enchanté(e) = rất vui được gặp; habiter = sinh sống"
      },
      {
        title: "Unité 2 – Au quotidien",
        topic: "Sinh hoạt hằng ngày",
        grammar: "Động từ nhóm -er; giờ giấc và ngày tháng",
        example: "Je me lève à sept heures et je prends le petit-déjeuner.",
        vocabulary: "se lever = thức dậy; le matin = buổi sáng; travailler = làm việc"
      },
      {
        title: "Unité 3 – En ville",
        topic: "Địa điểm và hỏi đường",
        grammar: "Il y a; giới từ chỉ địa điểm",
        example: "La gare est à côté du café.",
        vocabulary: "la gare = nhà ga; une rue = con phố; à côté de = bên cạnh"
      },
      {
        title: "Unité 4 – À table",
        topic: "Đồ ăn và gọi món",
        grammar: "Mạo từ xác định, không xác định và bộ phận",
        example: "Je voudrais un café et une salade, s’il vous plaît.",
        vocabulary: "un repas = bữa ăn; une boisson = đồ uống; l’addition = hóa đơn"
      }
    ],

    A2: [
      {
        title: "Unité 1 – Souvenirs",
        topic: "Kể về trải nghiệm trong quá khứ",
        grammar: "Passé composé và imparfait cơ bản",
        example: "Hier, j’ai visité le musée avec mes amis.",
        vocabulary: "un souvenir = kỷ niệm; hier = hôm qua; visiter = tham quan"
      },
      {
        title: "Unité 2 – Projets",
        topic: "Dự định và kế hoạch",
        grammar: "Futur proche; trạng từ chỉ thời gian",
        example: "Ce week-end, nous allons partir à la mer.",
        vocabulary: "prévoir = dự định; bientôt = sớm; un projet = dự án"
      },
      {
        title: "Unité 3 – Se loger",
        topic: "Nhà ở và khu phố",
        grammar: "So sánh hơn và so sánh nhất",
        example: "Cet appartement est plus lumineux que l’autre.",
        vocabulary: "un appartement = căn hộ; louer = thuê; un quartier = khu phố"
      },
      {
        title: "Unité 4 – Santé et bien-être",
        topic: "Sức khỏe và lời khuyên",
        grammar: "Impératif; devoir và pouvoir",
        example: "Tu dois dormir suffisamment et faire une pause.",
        vocabulary: "se reposer = nghỉ ngơi; une habitude = thói quen; suffisamment = đủ"
      }
    ],

    B1: [
      {
        title: "Unité 1 – Relations",
        topic: "Quan hệ xã hội và giao tiếp",
        grammar: "Pronoms relatifs qui, que, où",
        example: "C’est une personne qui m’a beaucoup aidé.",
        vocabulary: "une relation = mối quan hệ; soutenir = hỗ trợ; faire confiance = tin tưởng"
      },
      {
        title: "Unité 2 – Travail",
        topic: "Công việc và học tập",
        grammar: "Conditionnel de politesse",
        example: "Je souhaiterais obtenir des renseignements sur ce poste.",
        vocabulary: "un poste = vị trí; une candidature = hồ sơ ứng tuyển; compétent = có năng lực"
      },
      {
        title: "Unité 3 – Société",
        topic: "Các vấn đề xã hội",
        grammar: "Connecteurs logiques; nguyên nhân và kết quả",
        example: "Les transports sont pratiques, pourtant ils sont parfois chers.",
        vocabulary: "pourtant = tuy nhiên; puisque = bởi vì; en revanche = ngược lại"
      },
      {
        title: "Unité 4 – Culture",
        topic: "Văn hóa và truyền thông",
        grammar: "Subjonctif cơ bản; diễn đạt ý kiến",
        example: "Il est important que chacun puisse s’exprimer.",
        vocabulary: "une œuvre = tác phẩm; un avis = ý kiến; s’exprimer = bày tỏ"
      }
    ],

    B2: [
      {
        title: "Unité 1 – Débattre",
        topic: "Tranh luận và bảo vệ quan điểm",
        grammar: "Nhượng bộ, phản biện và lập luận",
        example: "Bien que cette solution soit coûteuse, elle présente des avantages.",
        vocabulary: "bien que = mặc dù; toutefois = tuy nhiên; un enjeu = vấn đề then chốt"
      },
      {
        title: "Unité 2 – Environnement",
        topic: "Môi trường và phát triển bền vững",
        grammar: "Hypothèses; conditionnel passé",
        example: "Si nous avions mieux anticipé, nous aurions réduit les déchets.",
        vocabulary: "durable = bền vững; les déchets = rác thải; sensibiliser = nâng cao nhận thức"
      },
      {
        title: "Unité 3 – Médias",
        topic: "Truyền thông và thông tin",
        grammar: "Voix passive; discours rapporté",
        example: "Cette information a été confirmée par plusieurs sources.",
        vocabulary: "une source = nguồn; fiable = đáng tin; vérifier = kiểm chứng"
      },
      {
        title: "Unité 4 – Monde professionnel",
        topic: "Thế giới nghề nghiệp",
        grammar: "Registre formel; tổng hợp thông tin",
        example: "Je vous saurais gré de bien vouloir examiner ma demande.",
        vocabulary: "une démarche = thủ tục; approfondi = chuyên sâu; examiner = xem xét"
      }
    ]
  };

  const vocabulary = {
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
      ["un ami", "người bạn", "Paul est mon ami."],
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
      ["aimer", "thích", "J’aime apprendre."],
      ["habiter", "sống, cư trú", "Elle habite à Lyon."],
      ["travailler", "làm việc", "Ils travaillent ensemble."],
      ["étudier", "học tập", "Tu étudies le français."],
      ["acheter", "mua", "Je voudrais acheter ce livre."],
      ["manger", "ăn", "Nous mangeons à midi."],
      ["boire", "uống", "Il boit un verre d’eau."]
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
      ["un conseil", "lời khuyên", "Merci pour ce conseil."]
    ],

    B1: [
      ["une relation", "mối quan hệ", "Une relation repose sur le respect."],
      ["un échange", "sự trao đổi", "Cet échange était enrichissant."],
      ["un débat", "cuộc tranh luận", "Le débat a duré une heure."],
      ["un point de vue", "quan điểm", "Je comprends ton point de vue."],
      ["une opinion", "ý kiến", "Chacun peut donner son opinion."],
      ["remettre en question", "đặt lại vấn đề", "Il faut remettre cette idée en question."],
      ["faire confiance", "tin tưởng", "Je fais confiance à mon équipe."],
      ["s’engager", "cam kết, tham gia", "Les citoyens souhaitent s’engager."],
      ["soutenir", "ủng hộ, hỗ trợ", "Cette association soutient les familles."],
      ["améliorer", "cải thiện", "Nous voulons améliorer le service."],
      ["développer", "phát triển", "La ville développe les transports publics."],
      ["éviter", "tránh", "Il vaut mieux éviter les erreurs."],
      ["permettre", "cho phép", "Cette formation permet de progresser."],
      ["contribuer à", "đóng góp vào", "Chacun peut contribuer à ce projet."],
      ["en revanche", "ngược lại", "Le coût est élevé ; en revanche, la qualité est bonne."],
      ["néanmoins", "tuy nhiên", "Néanmoins, cette proposition reste intéressante."],
      ["un changement", "sự thay đổi", "Le changement prend du temps."],
      ["une conséquence", "hệ quả", "Cette décision aura des conséquences."],
      ["une cause", "nguyên nhân", "Il faut identifier la cause du problème."],
      ["un inconvénient", "nhược điểm", "Le principal inconvénient est le coût."]
    ],

    B2: [
      ["une inégalité", "sự bất bình đẳng", "La politique vise à réduire les inégalités."],
      ["une transition", "sự chuyển đổi", "La transition énergétique exige des investissements."],
      ["la résilience", "khả năng phục hồi", "La résilience des villes est essentielle."],
      ["la cohésion sociale", "sự gắn kết xã hội", "La culture renforce la cohésion sociale."],
      ["la sensibilisation", "sự nâng cao nhận thức", "La sensibilisation du public est nécessaire."],
      ["la mise en œuvre", "việc triển khai", "La mise en œuvre prendra plusieurs mois."],
      ["un approfondissement", "sự nghiên cứu chuyên sâu", "Un approfondissement de la question est nécessaire."],
      ["une prise de conscience", "sự nhận thức", "Une prise de conscience collective émerge."],
      ["un consensus", "sự đồng thuận", "Les chercheurs ne sont pas parvenus à un consensus."],
      ["une controverse", "cuộc tranh cãi", "Cette décision suscite une controverse."],
      ["un argument fondé", "lập luận có cơ sở", "Il avance un argument fondé sur des données."],
      ["une source fiable", "nguồn đáng tin cậy", "Toute affirmation doit reposer sur une source fiable."],
      ["s’avérer", "hóa ra, tỏ ra", "Cette solution s’avère efficace."],
      ["remédier à", "khắc phục", "Il faut remédier à cette situation."],
      ["préconiser", "chủ trương, khuyến nghị", "Le rapport préconise une réforme."],
      ["souligner", "nhấn mạnh", "L’auteur souligne plusieurs limites."],
      ["contester", "phản bác, tranh cãi", "Certains experts contestent cette interprétation."],
      ["concilier", "dung hòa", "Il faut concilier efficacité et équité."],
      ["renforcer", "tăng cường", "Cette mesure vise à renforcer la coopération."],
      ["entraver", "cản trở", "Le manque de moyens peut entraver le projet."],
      ["favoriser", "thúc đẩy", "La formation favorise l’autonomie."],
      ["préserver", "bảo tồn, gìn giữ", "Nous devons préserver les ressources naturelles."],
      ["à long terme", "về lâu dài", "Cette décision aura des effets à long terme."],
      ["dans la mesure où", "trong chừng mực mà", "Cette option est pertinente dans la mesure où elle reste accessible."],
      ["pour autant", "tuy nhiên, vì thế", "Le progrès est utile sans pour autant être suffisant."],
      ["en dépit de", "bất chấp", "En dépit des obstacles, le projet avance."],
      ["dès lors", "do vậy, kể từ đó", "Dès lors, une autre stratégie s’impose."],
      ["sous réserve de", "với điều kiện là", "La proposition est acceptée sous réserve de modifications."],
      ["à défaut de", "nếu không có", "À défaut de preuves, la conclusion reste fragile."],
      ["faire valoir", "nêu ra, viện dẫn", "Elle souhaite faire valoir ses arguments."],
      ["mettre en évidence", "làm nổi bật", "Les résultats mettent en évidence une tendance."],
      ["prendre du recul", "nhìn nhận khách quan", "Il faut prendre du recul avant de conclure."]
    ]
  };

  const questions = {
    A1: [
      ["Comment tu t’appelles ?", "Bạn tên là gì?", ["Je m’appelle Lan.", "J’ai vingt ans.", "Je suis merci."], 0, "Je m’appelle = Tôi tên là."],
      ["« Merci » signifie…", "Merci có nghĩa là gì?", ["Xin chào", "Cảm ơn", "Tạm biệt"], 1, "Merci = Cảm ơn."],
      ["Complétez : J’___ à Hanoï.", "Tôi sống ở Hà Nội.", ["habite", "habites", "habitent"], 0, "Với je, động từ habiter chia là j’habite."],
      ["Quel jour vient après lundi ?", "Ngày nào sau thứ Hai?", ["dimanche", "mardi", "vendredi"], 1, "Mardi = thứ Ba."],
      ["« La gare » signifie…", "La gare có nghĩa là gì?", ["nhà ga", "trường học", "bệnh viện"], 0, "La gare = nhà ga."]
    ],

    A2: [
      ["Hier, nous ___ au cinéma.", "Hôm qua chúng tôi đã đi xem phim.", ["allons", "sommes allés", "irons"], 1, "Passé composé của aller dùng être."],
      ["Demain, je ___ visiter Paris.", "Ngày mai tôi sẽ thăm Paris.", ["vais", "suis", "ai"], 0, "Futur proche = aller + infinitif."],
      ["Le contraire de « facile » est…", "Từ trái nghĩa với facile là gì?", ["simple", "difficile", "rapide"], 1, "Difficile = khó."],
      ["Je vais ___ France.", "Tôi sẽ đi Pháp.", ["à", "en", "au"], 1, "On dit aller en France."],
      ["Depuis deux ans, il ___ ici.", "Anh ấy sống ở đây được hai năm.", ["habite", "a habité", "habitera"], 0, "Depuis + présent diễn tả hành động còn tiếp diễn."]
    ],

    B1: [
      ["La personne ___ parle est gentille.", "Người đang nói rất tốt bụng.", ["qui", "que", "où"], 0, "Qui thay thế chủ ngữ."],
      ["Il est fatigué, ___ il continue.", "Anh ấy mệt nhưng vẫn tiếp tục.", ["donc", "pourtant", "car"], 1, "Pourtant = tuy nhiên."],
      ["Si j’avais le temps, je ___ plus.", "Nếu có thời gian, tôi sẽ đọc nhiều hơn.", ["lis", "lirais", "ai lu"], 1, "Si + imparfait → conditionnel présent."],
      ["Une candidature signifie…", "Une candidature có nghĩa là gì?", ["hồ sơ ứng tuyển", "kỳ nghỉ", "cuộc họp"], 0, "Une candidature = hồ sơ ứng tuyển."],
      ["Il faut que tu ___.", "Bạn cần phải đến.", ["viens", "viennes", "viendras"], 1, "Il faut que + subjonctif."]
    ],

    B2: [
      ["Bien que le sujet ___ complexe…", "Mặc dù chủ đề phức tạp…", ["est", "soit", "sera"], 1, "Bien que + subjonctif."],
      ["Cette décision a été ___.", "Quyết định này đã được công bố.", ["annoncé", "annoncée", "annoncées"], 1, "Décision là danh từ giống cái, số ít."],
      ["Toutefois exprime…", "Toutefois diễn đạt điều gì?", ["mục đích", "sự đối lập", "thời gian"], 1, "Toutefois = tuy nhiên."],
      ["Si nous avions su, nous ___ autrement.", "Nếu biết trước, chúng tôi đã hành động khác.", ["agirons", "aurions agi", "agissons"], 1, "Si + plus-que-parfait → conditionnel passé."],
      ["Une source fiable est une source…", "Nguồn đáng tin cậy là nguồn…", ["crédible", "fausse", "inutile"], 0, "Fiable = đáng tin cậy."]
    ]
  };

  window.FP_MODULES = {
    levels,
    lessons,
    vocabulary,
    questions
  };
})();
