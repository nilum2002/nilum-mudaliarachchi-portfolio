/* ==========================================================================
   PROJECTS COMPONENT
   ========================================================================== */

window.PortfolioProjects = (function () {
  function cardHTML(p) {
    return (
      '<article class="project-card" data-id="' + p.id + '">' +
      '<div class="project-card__top"><h3 class="project-card__title">' + p.title + "</h3></div>" +
      '<p class="project-card__desc">' + p.desc + "</p>" +
      '<div class="project-card__stack">' +
      p.stack.map(function (s) { return '<span class="chip">' + s + "</span>"; }).join("") +
      "</div>" +
      '<div class="project-card__links">' +
      p.links.map(function (l) { return '<a href="' + l.url + '">' + l.label + " " + window.PortfolioIcons.arrow + "</a>"; }).join("") +
      "</div>" +
      "</article>"
    );
  }

  function render() {
    var mount = document.getElementById("panel-projects");
    if (!mount) return;
    var items = window.PortfolioData.projects;

    mount.innerHTML =
      '<div class="section-eyebrow"><span class="index">02 · Builds</span><h2>Projects</h2></div>' +
      '<p class="section-lede">Things I\'ve built end to end, from weekend experiments to production systems.</p>' +
      '<div class="project-grid">' + items.map(cardHTML).join("") + "</div>";
  }

  return { render: render };
})();
