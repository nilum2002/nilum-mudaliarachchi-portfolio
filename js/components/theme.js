/* ==========================================================================
   THEME — light / dark / system, persisted in localStorage
   ========================================================================== */

window.PortfolioTheme = (function () {
  var STORAGE_KEY = "portfolio-theme-preference";
  var mql = window.matchMedia("(prefers-color-scheme: dark)");

  function resolve(pref) {
    if (pref === "system") return mql.matches ? "dark" : "light";
    return pref;
  }

  function apply(pref) {
    document.documentElement.setAttribute("data-theme", resolve(pref));
    document.documentElement.setAttribute("data-theme-pref", pref);
    updateButtons(pref);
  }

  function updateButtons(pref) {
    var buttons = document.querySelectorAll("[data-theme-option]");
    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-theme-option") === pref);
    });
  }

  function set(pref) {
    localStorage.setItem(STORAGE_KEY, pref);
    apply(pref);
  }

  function getStored() {
    return localStorage.getItem(STORAGE_KEY) || "system";
  }

  function init() {
    apply(getStored());

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-theme-option]");
      if (!btn) return;
      set(btn.getAttribute("data-theme-option"));
    });

    mql.addEventListener("change", function () {
      if (getStored() === "system") apply("system");
    });
  }

  return { init: init };
})();
