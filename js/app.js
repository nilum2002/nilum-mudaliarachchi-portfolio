/* ==========================================================================
   APP — bootstraps the page once the DOM is ready
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  window.PortfolioTheme.init();

  window.PortfolioSidebar.render();
  window.PortfolioHome.render();
  window.PortfolioResearch.render();
  window.PortfolioProjects.render();
  window.PortfolioBlogs.render();
  window.PortfolioAchievements.render();
  window.PortfolioAbout.render();

  window.PortfolioSidebar.initMarker();
  window.PortfolioRouter.init();
});
