(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".language-toggle");
  const saved = window.localStorage.getItem("celvion-scout-language");
  const initial = saved === "zh" || saved === "en"
    ? saved
    : (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";

  function apply(language) {
    root.dataset.language = language;
    root.lang = language === "zh" ? "zh-CN" : "en";
    if (toggle) {
      toggle.textContent = language === "zh" ? "EN" : "中文";
      toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到简体中文");
    }
  }

  apply(initial);
  toggle?.addEventListener("click", () => {
    const next = root.dataset.language === "zh" ? "en" : "zh";
    window.localStorage.setItem("celvion-scout-language", next);
    apply(next);
  });
})();
