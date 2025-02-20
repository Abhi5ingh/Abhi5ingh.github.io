// script.js

document.addEventListener("DOMContentLoaded", function() {
  // ========== 1. Navbar scroll background ========== //
  const mainNav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });

  // ========== 2. Showcase modal ========== //
  const moreInfoBtn = document.getElementById('more-info-btn');
  if (moreInfoBtn) {
    moreInfoBtn.addEventListener('click', function() {
      const showcaseModal = new bootstrap.Modal(
        document.getElementById('showcaseModal')
      );
      showcaseModal.show();
    });
  }

  // ========== 3. Scroll-based fade-in ========== //
  const animateElements = document.querySelectorAll('[data-animate]');
  const animateObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.1 }
  );
  animateElements.forEach(el => animateObserver.observe(el));

  // ========== 4. Auto-play videos in view (optional) ========== //
  const videos = document.querySelectorAll('video');
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  });
  videos.forEach(video => videoObserver.observe(video));

  // ========== 5. Translation Dictionary ========== //
  const translations = {
    en: {
      // Navbar
      "nav-brand": "Abhishek Singh",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-current-work": "Current Work",
      "nav-experience": "Experience",
      "nav-projects": "Projects",
      "nav-education": "Education",
      "nav-contact": "Contact",
      // Hero
      "hero-title": "ABHISHEK SINGH",
      "hero-subtitle": "Machine Learning & AI Engineer",
      "hero-tagline": "\"Passionate about harnessing the power of AI to drive innovation and solve real-world problems.\"",
      "hero-linkedin": "LinkedIn",
      "hero-github": "GitHub",
      "hero-huggingface": "Hugging Face",
      // About
      "about-title": "About Me",
      "about-text1": "I am a Machine Learning enthusiast with a keen interest in Generative modelling applications. I have a master's degree in Machine Learning and Computer Vision, and I am currently working at a Bioscience pharmaceutical company in Singapore as an Applied AI Engineer for novel drug discovery for Cancer and Autoimmune disease treatments.",
      "about-text2": "This work made me be able to master working on an HPC, Linux environment, get more proficient in Python/PyTorch, and be able to fine tune Large models for our Applied applications.",
      // Showcase
      "showcase-title": "AI-based Drug Engineering",
      "showcase-text": "Using Generative models for denovo drug synthesis and discovery using models like Diffusion based models and LLMs.",
      "more-info-btn": "Learn More",
      // Modal
      "modal-title": "Showcase Details",
      "modal-paragraph": "During my 6-month tenure in Singapore, I delved deeper into Bioinformatics and Microbiology, merging that knowledge with advanced AI/ML techniques to pioneer a revolutionary approach to drug discovery. By leveraging generative models such as RFDiffusion and large language models (ESM3, ProBert), I worked on designing novel antibodies to combat cancer and autoimmune diseases. This synergy between biology and AI has the potential to accelerate breakthroughs and bring transformative treatments to patients worldwide.",
      // Experience
      "experience-title": "Experience",
      "exp1-title": "AI Drug Discovery, Hummingbird Bioscience",
      "exp1-text": "Working on Diffusion based models and Large Language Model finetuning and applications for advancements in Drug discovery and Cancer treatment.",
      "exp2-title": "Data Science Analyst, Yori Shoreditch",
      "exp2-text": "Built advanced predictive models (Python & R), performed data cleaning with SQL & Pandas, advanced EDA with NumPy & Matplotlib, and implemented ML algorithms to improve sales prediction accuracy by 30%.",
      "exp3-title": "Computer Vision Developer, Sibylline Advisory",
      "exp3-text": "Developed & deployed an Agricultural Disease Detection model on AWS using a custom augmented dataset; achieved over 90% accuracy.",
      "exp4-title": "Marugame Seimen, London Part-time",
      "exp4-text": "Worked as Team leader at one of the busiest Marugame Udon branches in London at Trafalgar Square; learned the Japanese language and culture.",
      // Projects
      "projects-title": "Projects",
      "proj1-title": "Fashion Garment Synthesis using Diffusion Models",
      "proj1-text1": "The Fashion industry is one of the old traditional industries that have shown massive amounts of reluctance to adapt to the changing tides brought by AI. I decided to help reduce the burdens of fashion designers by creating a tool using stable diffusion models to generate any number of garments from just a text prompt or a sketch.",
      "proj1-text2": "You can read the full research paper here.",
      "proj1-text3": "You can use the model here.",
      // Education
      "education-title": "Education",
      "edu1-title": "MSc Degree @ Queen Mary University",
      "edu1-text": "Machine Learning for Visual Data Analytics",
      "edu2-title": "B.Tech MNIT Jaipur",
      "edu2-text": "Electrical Engineering",
      // Contact
      "contact-title": "Contact Me",
      "contact-email-label": "Email:",
      "contact-email-link": "abhisteak@gmail.com",
      "contact-linkedin-label": "LinkedIn:",
      "contact-linkedin-link": "LinkedIn Profile",
      "contact-github-label": "GitHub:",
      "contact-github-link": "GitHub Profile",
      "contact-resume-label": "Download Resume:",
      "contact-resume-link": "Download here",
      // Footer
      "footer-text": "© 2024 Abhishek Singh. All rights reserved."
    },
    ja: {
      // Navbar
      "nav-brand": "アビシェック・シン",
      "nav-home": "ホーム",
      "nav-about": "自己紹介",
      "nav-current-work": "現在の仕事",
      "nav-experience": "経験",
      "nav-projects": "プロジェクト",
      "nav-education": "学歴",
      "nav-contact": "連絡先",
      // Hero
      "hero-title": "アビシェック・シン",
      "hero-subtitle": "機械学習＆AIエンジニア",
      "hero-tagline": "「AIの力を活用し、イノベーションを起こして現実世界の問題を解決することに情熱を注いでいます。」",
      "hero-linkedin": "リンクトイン",
      "hero-github": "ギットハブ",
      "hero-huggingface": "ハギングフェイス",
      // About
      "about-title": "自己紹介",
      "about-text1": "私はジェネレーティブモデリングの応用に強い関心を持つ機械学習の愛好家です。機械学習とコンピュータビジョンの修士号を取得し、現在はシンガポールのバイオサイエンス製薬企業で、がんや自己免疫疾患の新薬発見を目的としたApplied AIエンジニアとして勤務しています。",
      "about-text2": "この仕事を通じて、HPCやLinux環境での作業、Python/PyTorchの熟練度、そして大型モデルを応用したファインチューニングのスキルを身につけました。",
      // Showcase
      "showcase-title": "AIベースの創薬エンジニアリング",
      "showcase-text": "DiffusionモデルやLLMなどの生成モデルを活用して、新規の医薬品合成や探索を行っています。",
      "more-info-btn": "詳細を見る",
      // Modal
      "modal-title": "ショーケースの詳細",
      "modal-paragraph": "シンガポールでの6ヶ月の勤務では、バイオインフォマティクスと微生物学を深く学び、最先端のAI/ML技術と融合させることで、創薬に革命を起こすアプローチに取り組みました。RFDiffusionのような生成モデルや、大規模言語モデル（ESM3、ProBertなど）を活用し、がんや自己免疫疾患に対抗する新しい抗体を設計するプロジェクトに携わりました。生物学とAIのシナジーにより、研究の進展を加速し、世界中の患者に革新的な治療法をもたらす可能性があります。",
      // Experience
      "experience-title": "経験",
      "exp1-title": "AI創薬、ハミングバード・バイオサイエンス",
      "exp1-text": "Diffusionモデルや大規模言語モデルのファインチューニングを活用し、創薬やがん治療の進歩に貢献しています。",
      "exp2-title": "データサイエンスアナリスト、Yori Shoreditch",
      "exp2-text": "PythonとRで高度な予測モデルを構築し、SQLとPandasでのデータクリーニング、NumPyとMatplotlibでのEDAを実施。売上予測精度を30%向上させました。",
      "exp3-title": "コンピュータビジョン開発者、Sibylline Advisory",
      "exp3-text": "AWS上で農作物の病害検出モデルを開発・デプロイし、90％を超える精度を達成しました。",
      "exp4-title": "マルガメ製麺（ロンドン） パートタイム",
      "exp4-text": "ロンドンのトラファルガー広場にあるマルガメうどんの繁忙店舗でチームリーダーとして勤務し、日本語と日本文化への理解を深めました。",
      // Projects
      "projects-title": "プロジェクト",
      "proj1-title": "Diffusionモデルを用いたファッション衣類の合成",
      "proj1-text1": "ファッション業界は伝統的な産業の一つであり、AIの進化に適応することに対して強い抵抗を示してきました。私はファッションデザイナーの負担を軽減するため、Stable Diffusionモデルを用いて、テキストプロンプトや簡単なスケッチからTシャツやドレスなど多様な衣服を自動生成できるツールを開発しました。",
      "proj1-text2": "こちらで研究論文の全文をお読みいただけます。",
      "proj1-text3": "モデルの使用はこちらから可能です。",
      // Education
      "education-title": "学歴",
      "edu1-title": "修士号（クイーン・メアリー大学）",
      "edu1-text": "機械学習（視覚データ解析）",
      "edu2-title": "学士号（MNITジャイプール）",
      "edu2-text": "電気工学",
      // Contact
      "contact-title": "お問い合わせ",
      "contact-email-label": "メールアドレス:",
      "contact-email-link": "abhisteak@gmail.com",
      "contact-linkedin-label": "リンクトイン:",
      "contact-linkedin-link": "リンクトイン・プロフィール",
      "contact-github-label": "ギットハブ:",
      "contact-github-link": "ギットハブ・プロフィール",
      "contact-resume-label": "履歴書のダウンロード:",
      "contact-resume-link": "こちらからダウンロード",
      // Footer
      "footer-text": "© 2024 アビシェック・シン. 全著作権所有."
    }
  };

  // Current language state
  let currentLang = "en";

  // ========== 6. setLanguage function ========== //
  function setLanguage(lang) {
    for (const key in translations[lang]) {
      const elem = document.getElementById(key);
      if (elem) {
        elem.textContent = translations[lang][key];
      }
    }
  }

  // ========== 7. Translate button logic ========== //
  const translateBtn = document.getElementById("translate-btn");
  if (translateBtn) {
    translateBtn.addEventListener("click", function() {
      // Toggle language
      currentLang = (currentLang === "en") ? "ja" : "en";
      setLanguage(currentLang);

      // Toggle button text
      if (currentLang === "ja") {
        translateBtn.textContent = "English";
      } else {
        translateBtn.textContent = "日本語";
      }
    });
  }

  // Initialize page in English
  setLanguage("en");
});
