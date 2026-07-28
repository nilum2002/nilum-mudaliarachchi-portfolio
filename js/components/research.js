/* ==========================================================================
   RESEARCH COMPONENT
   ========================================================================== */

window.PortfolioResearch = (function () {
  function cardHTML(r) {
    return (
      '<article class="research-card" data-id="' + r.id + '">' +
      '<div class="research-card__head">' +
      '<h3 class="research-card__title">' + r.title + "</h3>" +
      "</div>" +
      '<div class="research-card__meta">' + r.year + " &middot; " + r.authors + "</div>" +
      '<div class="research-card__tags">' +
      r.tags.map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") +
      "</div>" +
      '<div class="research-card__abstract">' + r.abstract + "</div>" +
      '<div class="research-card__links">' +
      r.links.map(function (l) { return '<a class="btn" href="' + l.url + '">' + l.label + "</a>"; }).join("") +
      '<button type="button" class="research-card__toggle" data-toggle-abstract>Read abstract</button>' +
      "</div>" +
      "</article>"
    );
  }

  function render() {
    var mount = document.getElementById("panel-research");
    if (!mount) return;
    var items = window.PortfolioData.research;

    mount.innerHTML =
      '<div class="section-eyebrow"><span class="index">01 · Index</span><h2>Research</h2></div>' +
      '<p class="section-lede">Published work and reports, newest first. Expand an entry to read the abstract.</p>' +
      '<div class="research-list">' + items.map(cardHTML).join("") + "</div>";

    mount.querySelectorAll("[data-toggle-abstract]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".research-card");
        var open = card.classList.toggle("is-open");
        btn.textContent = open ? "Hide abstract" : "Read abstract";
      });
    });
  }

  return { render: render };
})();
