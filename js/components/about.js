/* ==========================================================================
   ABOUT COMPONENT
   ========================================================================== */

window.PortfolioAbout = (function () {
  function render() {
    var mount = document.getElementById("panel-about");
    if (!mount) return;
    var profile = window.PortfolioData.profile;

    var skillsHTML = Object.keys(profile.skills)
      .map(function (group) {
        return (
          '<div class="skills-group">' +
          '<span class="skills-group__label">' + group + "</span>" +
          '<div class="skills-group__items">' +
          profile.skills[group].map(function (s) { return '<span class="chip">' + s + "</span>"; }).join("") +
          "</div></div>"
        );
      })
      .join("");

    var expHTML = profile.experience
      .map(function (e) {
        return (
          '<div class="exp-item">' +
          '<div class="exp-item__period">' + e.period + "</div>" +
          "<div>" +
          '<div class="exp-item__role">' + e.role + "</div>" +
          '<span class="exp-item__org">' + e.org + "</span>" +
          '<p class="exp-item__desc">' + e.desc + "</p>" +
          "</div></div>"
        );
      })
      .join("");

    mount.innerHTML =
      '<div class="section-eyebrow"><span class="index">05 · Profile</span><h2>About</h2></div>' +
      '<div class="about-grid">' +
      '<div class="about-bio">' +
      profile.bio.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      '<p class="about-bio__signoff">' + profile.signoff + "</p>" +
      "</div>" +
      "<div class=\"about-skills\">" + skillsHTML + "</div>" +
      "</div>" +
      '<div class="experience-list">' + expHTML + "</div>";
  }

  return { render: render };
})();
