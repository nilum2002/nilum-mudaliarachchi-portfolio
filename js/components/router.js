/* ==========================================================================
   ROUTER — hash-based section switching
   ========================================================================== */

window.PortfolioRouter = (function () {
  var DEFAULT = "home";
  var VALID = ["home", "research", "projects", "blogs", "achievements", "about"];

  function currentKey() {
    var hash = window.location.hash.replace("#", "");
    return VALID.indexOf(hash) !== -1 ? hash : DEFAULT;
  }

  function show(key) {
    VALID.forEach(function (k) {
      var panel = document.getElementById("panel-" + k);
      if (panel) panel.classList.toggle("is-active", k === key);
    });
    window.PortfolioSidebar.setActive(key);
    document.getElementById("content-scroll").scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    document.title = key === "home" ? window.PortfolioData.profile.name : capitalize(key) + " — " + window.PortfolioData.profile.name;
  }

  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function init() {
    window.addEventListener("hashchange", function () { show(currentKey()); });
    document.addEventListener("click", function (e) {
      var link = e.target.closest("[data-nav-link]");
      if (!link) return;
      var key = link.getAttribute("data-nav-link") || link.getAttribute("href").replace("#", "");
      if (VALID.indexOf(key) === -1) return;
      if (window.location.hash === "#" + key) show(key);
    });
    show(currentKey());
  }

  return { init: init, show: show };
})();
