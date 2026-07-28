/* ==========================================================================
   ABOUT COMPONENT
   ========================================================================== */

window.PortfolioAbout = (function () {
  function render() {
    var mount = document.getElementById("panel-about");
    if (!mount) return;
    var profile = window.PortfolioData.profile;

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
      '<div class="section-eyebrow"><span class="index">05 · Profile</span><h2>About Me</h2></div>' +
      '<div class="about-container">' +
      '  <div class="about-bio">' +
      '    <h3 class="about-section-title">Background & Research Interests</h3>' +
      profile.bio.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
      '    <blockquote class="about-quote">' +
      '      <p class="about-quote__text">“If the path to what you want seems too easy, then you\'re on the wrong path.”</p>' +
      '      <cite class="about-quote__author">— Monkey D. Luffy</cite>' +
      '    </blockquote>' +
      '  </div>' +
      '  <div class="about-experience">' +
      '    <h3 class="about-section-title">Education & Background</h3>' +
      '    <div class="experience-list">' + expHTML + "</div>" +
      '  </div>' +
      '</div>';
  }

  return { render: render };
})();
