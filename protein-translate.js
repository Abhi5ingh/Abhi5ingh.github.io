// protein-translate.js

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
      "context-text": "I’ve been working at Hummingbird Bioscience to explore AI-driven solutions for protein design and drug discovery. My main focus is on designing novel nanobody “masks” or “locks” that can selectively activate therapeutic antibodies in tumor environments, thereby improving precision and minimizing off-target effects.",
      
      // Antibody Locks
      "antibody-title": "Antibody Locks & Problem Statement",
      "antibody-locks-label": "Antibody Locks:",
      "antibody-locks-text": "A strategy to keep antibodies inactive until they reach tumor cells. Typically, a peptide “lock” is attached to the antibody’s antigen-binding site via a cleavable linker that tumor-associated proteases can cut.",
      "nanobody-challenge-label": "Nanobody Challenge:",
      "nanobody-challenge-text": "Nanobodies have a single-chain format, making traditional coiled-coil masking strategies (developed for full-size antibodies) incompatible. We needed a new approach for attaching a cleavable lock at the nanobody’s N-terminus without disrupting its stability or binding functionality.",
      
      // Pipeline
      "design-pipeline-title": "Design Pipeline",
      "design-pipeline-intro": "Below is an overview of our AI-driven workflow for creating de novo peptide masks targeting the nanobody’s CDR region. This single flowchart illustrates each step, from backbone generation to final validation:",
      "pipeline-explanation": "RFDiffusion: Generates peptide backbones targeting the nanobody’s CDR.\nSol-MPNN: Assigns functional sequences to ensure solubility and stability.\nAF2-fast Filtering: Validates structures, discarding any with RMSD > 5 or PAE > 10.\nLiability De-Risking: Removes designs prone to aggregation, PTMs, or undesired disulfide bonds.\nMD Simulation: Confirms stability via RMSF/RMSD analysis, finalizing the best candidates.",
      
      // Key Findings
      "key-findings-title": "Key Findings",
      "key-findings-list": "• CDR Conformational Changes: The designed peptide masks induce higher RMSF in the CDR loops, crucial for “locking” the nanobody until protease cleavage.\n• High-Confidence Candidates: From 80,000 total sequences, only 30 advanced to MD simulations, and 10 are being tested experimentally.\n• Clinical Impact: This pipeline can accelerate targeted nanobody therapies, reducing off-target effects in cancer treatment.",
      
      // MD Analysis
      "md-analysis-title": "MD Simulation Analysis",
      "md-analysis-text": "Our RMSF/RMSD analysis highlights how attaching a peptide mask alters the nanobody’s CDR loops:",
      
      // Full Details
      "full-details-title": "Full Details",
      "full-details-text": "For a deeper dive, including additional slides and data on the entire pipeline:",
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
      "context-text": "私はHummingbird Bioscienceで、タンパク質設計と創薬のためのAIソリューションを探求しています。主に、新規のナノボディ「マスク」や「ロック」を設計し、腫瘍環境で選択的に活性化される抗体を実現することで、精度を高め、副作用を最小限に抑えることを目指しています。",
      
      // Antibody Locks
      "antibody-title": "抗体ロックと問題点",
      "antibody-locks-label": "抗体ロック:",
      "antibody-locks-text": "腫瘍細胞に到達するまで抗体を不活性化する戦略です。通常、ペプチド「ロック」を抗体の抗原結合部位に切断可能なリンカーで結合し、腫瘍関連プロテアーゼによって切断されることで活性化します。",
      "nanobody-challenge-label": "ナノボディの課題:",
      "nanobody-challenge-text": "ナノボディは単一鎖構造であるため、従来のコイルドコイル型マスキング戦略（フルサイズ抗体向け）とは互換性がありません。ナノボディのN末端に切断可能なロックを付与しても、安定性や結合能を損なわない新たなアプローチが必要でした。",
      
      // Pipeline
      "design-pipeline-title": "設計パイプライン",
      "design-pipeline-intro": "以下は、ナノボディのCDR領域を標的としたde novoペプチドマスクを作成するためのAIワークフロー概要です。このフローチャートでは、バックボーン生成から最終検証までの各ステップを示しています:",
      "pipeline-explanation": "RFDiffusion: ナノボディのCDRを標的とするペプチドバックボーンを生成。\nSol-MPNN: 可溶性と安定性を確保する配列を割り当て。\nAF2-fast Filtering: RMSD > 5またはPAE > 10の構造を破棄し、信頼性の高いモデルのみを残す。\nLiability De-Risking: 凝集、PTM、不要なジスルフィド結合などのリスクを除去。\nMD Simulation: RMSF/RMSD解析で安定性を確認し、最適候補を決定。",
      
      // Key Findings
      "key-findings-title": "主要な発見",
      "key-findings-list": "• CDRの立体変化: 設計したペプチドマスクによりCDRループのRMSFが上昇し、プロテアーゼ切断まで“ロック”を維持する上で重要。\n• 高い信頼性の候補: 合計80,000の配列から30がMDシミュレーションに進み、そのうち10が実験的に検証中。\n• 臨床的影響: このパイプラインにより標的型ナノボディ療法が加速し、がん治療におけるオフターゲット効果を低減する可能性があります。",
      
      // MD Analysis
      "md-analysis-title": "MDシミュレーション解析",
      "md-analysis-text": "RMSF/RMSD解析により、ペプチドマスクがナノボディのCDRループをどのように変化させるかが示されます:",
      
      // Full Details
      "full-details-title": "詳細情報",
      "full-details-text": "全スライドやデータを含む詳細はこちらをご覧ください:",
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
        // If you want bullet points/line breaks to appear, you can keep .textContent.
        // If you prefer actual HTML, use .innerHTML for certain keys.
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
