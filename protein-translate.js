document.addEventListener("DOMContentLoaded", function() {
  const translations = {
    en: {
      // Navbar
      "nav-back-home": "← Back to Home",
      // Hero
      "hero-title": "Protein Design & Drug Discovery",
      "hero-subtitle": "AI-driven pipelines for designing novel nanobody locks and accelerating targeted therapies",
      // Context
      "context-title": "Context",
      "context-text": "I’ve been working at Hummingbird Bioscience to explore AI-driven solutions...",
      // Antibody
      "antibody-title": "Antibody Locks & Problem Statement",
      "antibody-locks-label": "Antibody Locks:",
      "antibody-locks-text": "A strategy to keep antibodies inactive until they reach tumor cells...",
      "nanobody-challenge-label": "Nanobody Challenge:",
      "nanobody-challenge-text": "Nanobodies have a single-chain format...",
      // Pipeline
      "design-pipeline-title": "Design Pipeline",
      "design-pipeline-intro": "Below is an overview of our AI-driven workflow...",
      "pipeline-explanation": "RFDiffusion generates peptide backbones...",
      // Key Findings
      "key-findings-title": "Key Findings",
      // MD Analysis
      "md-analysis-title": "MD Simulation Analysis",
      "md-analysis-text": "Our RMSF/RMSD analysis highlights...",
      // Full Details
      "full-details-title": "Full Details",
      "full-details-text": "For a deeper dive...",
      "pdf-button": "Download PDF",
      // Footer
      "footer-text": "© 2024 Abhishek Singh. All rights reserved."
    },
    ja: {
      // Navbar
      "nav-back-home": "← ホームに戻る",
      // Hero
      "hero-title": "タンパク質設計＆創薬",
      "hero-subtitle": "新規ナノボディロックを設計し、標的治療を加速するAIパイプライン",
      // Context
      "context-title": "概要",
      "context-text": "私はHummingbird Bioscienceで、タンパク質設計と創薬のためのAIソリューションを探求しています...",
      // Antibody
      "antibody-title": "抗体ロックと問題点",
      "antibody-locks-label": "抗体ロック:",
      "antibody-locks-text": "腫瘍細胞に到達するまで抗体を不活性化する戦略です...",
      "nanobody-challenge-label": "ナノボディの課題:",
      "nanobody-challenge-text": "ナノボディは単一鎖構造であるため...",
      // Pipeline
      "design-pipeline-title": "設計パイプライン",
      "design-pipeline-intro": "下記は、ナノボディのCDR領域を標的とした...",
      "pipeline-explanation": "RFDiffusionがペプチドのバックボーンを生成し...",
      // Key Findings
      "key-findings-title": "主要な発見",
      // MD Analysis
      "md-analysis-title": "MDシミュレーション解析",
      "md-analysis-text": "RMSF/RMSD解析により、ペプチドマスクがどのように...",
      // Full Details
      "full-details-title": "詳細情報",
      "full-details-text": "より詳しいスライドやデータはこちら...",
      "pdf-button": "PDFをダウンロード",
      // Footer
      "footer-text": "© 2024 アビシェック・シン. All rights reserved."
    }
  };

  let currentLang = "en";

  function setLanguage(lang) {
    for (const key in translations[lang]) {
      const elem = document.getElementById(key);
      if (elem) {
        elem.textContent = translations[lang][key];
      }
    }
  }

  const translateBtn = document.getElementById("translate-btn");
  if (translateBtn) {
    translateBtn.addEventListener("click", () => {
      currentLang = (currentLang === "en") ? "ja" : "en";
      setLanguage(currentLang);
      // Toggle button text
      translateBtn.textContent = (currentLang === "ja") ? "English" : "日本語";
    });
  }

  // Initialize in English
  setLanguage("en");
});
