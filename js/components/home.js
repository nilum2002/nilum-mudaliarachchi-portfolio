/* ==========================================================================
   HOME COMPONENT
   ========================================================================== */

window.PortfolioHome = (function () {
  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  function render() {
    var mount = document.getElementById("panel-home");
    if (!mount) return;
    var profile = window.PortfolioData.profile;
    var recentBlogs = window.PortfolioData.blogs.slice(0, 3);
    var recentResearch = window.PortfolioData.research.slice(0, 2);

    mount.innerHTML =
      '<div class="home-hero">' +
      '<div class="home-hero__kicker">' + profile.kicker + "</div>" +
      "<h1>" + profile.heroTitle + "</h1>" +
      '<p class="home-hero__lede">' + profile.heroLede + "</p>" +
      '<div class="home-hero__actions">' +
      '<a class="btn btn--solid" href="#projects" data-nav-link="projects">View projects ' + window.PortfolioIcons.arrow + "</a>" +
      '<a class="btn" href="#about" data-nav-link="about">About me</a>' +
      "</div>" +
      "</div>" +

      '<div class="stat-row">' +
      profile.stats
        .map(function (s) {
          return '<div class="stat"><span class="stat__num">' + s.num + '</span><span class="stat__label">' + s.label + "</span></div>";
        })
        .join("") +
      "</div>" +

      '<div class="home-block">' +
      '<div class="home-block__head"><h3>Latest entries</h3><a href="#blogs" data-nav-link="blogs">All posts &rarr;</a></div>' +
      '<div class="home-list">' +
      recentBlogs
        .map(function (b) {
          return (
            '<div class="home-list__row"><span class="home-list__date">' + formatDate(b.date) + '</span>' +
            '<span class="home-list__title">' + b.title + "</span></div>"
          );
        })
        .join("") +
      "</div></div>" +

      '<div class="home-block">' +
      '<div class="home-block__head"><h3>Recent research</h3><a href="#research" data-nav-link="research">All research &rarr;</a></div>' +
      '<div class="home-list">' +
      recentResearch
        .map(function (r) {
          return (
            '<div class="home-list__row"><span class="home-list__date">' + r.year + '</span>' +
            '<span class="home-list__title">' + r.title + "</span></div>"
          );
        })
        .join("") +
      "</div></div>";
  }

  return { render: render };
})();
