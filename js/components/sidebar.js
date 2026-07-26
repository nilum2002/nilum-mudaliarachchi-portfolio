/* ==========================================================================
   SIDEBAR COMPONENT
   ========================================================================== */

window.PortfolioSidebar = (function () {
  var SECTIONS = [
    { key: "home", label: "Home" },
    { key: "research", label: "Research" },
    { key: "projects", label: "Projects" },
    { key: "blogs", label: "Blogs" },
    { key: "achievements", label: "Achievements" },
    { key: "about", label: "About" }
  ];

  function socialsHTML(profile) {
    return profile.socials
      .map(function (s) {
        var icon = window.PortfolioIcons[s.icon] || "";
        return (
          '<a class="social-link" href="' + s.url + '" target="_blank" rel="noopener" aria-label="' + s.name + '">' +
          icon +
          "</a>"
        );
      })
      .join("");
  }

  function navHTML() {
    return SECTIONS.map(function (s, i) {
      var num = String(i + 1).padStart(2, "0");
      return (
        '<li class="nav__item" data-section="' + s.key + '">' +
        '<a class="nav__link" href="#' + s.key + '" data-nav-link="' + s.key + '">' +
        '<span class="num">' + num + "</span>" + s.label +
        "</a></li>"
      );
    }).join("");
  }

  function render() {
    var profile = window.PortfolioData.profile;
    var mount = document.getElementById("sidebar-mount");
    var topbarMount = document.getElementById("topbar-mount");
    if (!mount) return;

    mount.innerHTML =
      '<div class="sidebar__identity">' +
      '<div class="avatar">' + profile.initials + "</div>" +
      '<h1 class="sidebar__name">' + profile.name + "</h1>" +
      '<div class="sidebar__role">' + profile.role + "</div>" +
      "</div>" +
      '<nav class="sidebar__nav" aria-label="Primary">' +
      '<ul class="nav__list" id="nav-list">' + navHTML() + "</ul>" +
      "</nav>" +
      '<div class="sidebar__socials">' + socialsHTML(profile) + "</div>" +
      '<div class="theme-toggle" role="group" aria-label="Theme">' +
      '<button type="button" data-theme-option="light">Light</button>' +
      '<button type="button" data-theme-option="dark">Dark</button>' +
      '<button type="button" data-theme-option="system">System</button>' +
      "</div>" +
      '<div class="sidebar__foot">&copy; <span id="year"></span> ' + profile.name + "</div>";

    document.getElementById("year").textContent = new Date().getFullYear();

    if (topbarMount) {
      topbarMount.innerHTML =
        '<div class="topbar__brand"><div class="avatar">' + profile.initials + "</div>" + profile.name + "</div>" +
        '<button type="button" class="topbar__menu-btn" id="drawer-toggle" aria-label="Open menu">' +
        window.PortfolioIcons.menu +
        "</button>";
    }

    bindDrawer();
  }

  function bindDrawer() {
    var toggle = document.getElementById("drawer-toggle");
    var scrim = document.getElementById("sidebar-scrim");
    if (!toggle) return;

    function close() {
      document.documentElement.setAttribute("data-sidebar-open", "false");
      toggle.innerHTML = window.PortfolioIcons.menu;
    }
    function open() {
      document.documentElement.setAttribute("data-sidebar-open", "true");
      toggle.innerHTML = window.PortfolioIcons.close;
    }

    toggle.addEventListener("click", function () {
      var isOpen = document.documentElement.getAttribute("data-sidebar-open") === "true";
      isOpen ? close() : open();
    });
    if (scrim) scrim.addEventListener("click", close);

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-nav-link]")) close();
    });
  }

  function setActive(sectionKey) {
    var items = document.querySelectorAll("#nav-list .nav__item");
    var activeIndex = 0;
    items.forEach(function (item, i) {
      var isActive = item.getAttribute("data-section") === sectionKey;
      item.classList.toggle("is-active", isActive);
      if (isActive) activeIndex = i;
    });
    var marker = document.getElementById("nav-marker");
    if (marker && items[activeIndex]) {
      marker.style.transform = "translateY(" + items[activeIndex].offsetTop + "px)";
    }
  }

  function initMarker() {
    var list = document.getElementById("nav-list");
    if (!list) return;
    var marker = document.createElement("div");
    marker.className = "nav__marker";
    marker.id = "nav-marker";
    list.appendChild(marker);
  }

  return {
    sections: SECTIONS,
    render: render,
    initMarker: initMarker,
    setActive: setActive
  };
})();
