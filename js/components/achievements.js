/* ==========================================================================
   ACHIEVEMENTS COMPONENT
   ========================================================================== */

window.PortfolioAchievements = (function () {
  function itemHTML(a) {
    return (
      '<li class="timeline-item">' +
      '<span class="timeline-item__year">' + a.year + "</span>" +
      '<h3 class="timeline-item__title">' + a.title + "</h3>" +
      '<span class="timeline-item__org">' + a.org + "</span>" +
      '<p class="timeline-item__desc">' + a.desc + "</p>" +
      "</li>"
    );
  }

  function render() {
    var mount = document.getElementById("panel-achievements");
    if (!mount) return;
    var items = window.PortfolioData.achievements;

    mount.innerHTML =
      '<div class="section-eyebrow"><span class="index">04 · Honors</span><h2>Achievements</h2></div>' +
      '<p class="section-lede">Awards, fellowships, and other marks in the logbook.</p>' +
      '<ul class="timeline">' + items.map(itemHTML).join("") + "</ul>";
  }

  return { render: render };
})();
