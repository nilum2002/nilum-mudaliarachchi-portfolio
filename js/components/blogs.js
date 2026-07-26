/* ==========================================================================
   BLOGS COMPONENT
   ========================================================================== */

window.PortfolioBlogs = (function () {
  var activeTag = "All";

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  function allTags(items) {
    var set = {};
    items.forEach(function (b) { b.tags.forEach(function (t) { set[t] = true; }); });
    return ["All"].concat(Object.keys(set));
  }

  function entryHTML(b) {
    return (
      '<article class="blog-entry">' +
      '<div class="blog-entry__date">' + formatDate(b.date) + "</div>" +
      "<div>" +
      '<h3 class="blog-entry__title"><a href="' + b.url + '">' + b.title + "</a></h3>" +
      '<p class="blog-entry__excerpt">' + b.excerpt + "</p>" +
      '<div class="blog-entry__tags">' +
      b.tags.map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") +
      "</div></div></article>"
    );
  }

  function renderList(mount, items) {
    var list = mount.querySelector(".blog-list");
    if (!items.length) {
      list.innerHTML = '<p class="blog-empty">No entries tagged &ldquo;' + activeTag + '&rdquo; yet.</p>';
      return;
    }
    list.innerHTML = items.map(entryHTML).join("");
  }

  function render() {
    var mount = document.getElementById("panel-blogs");
    if (!mount) return;
    var items = window.PortfolioData.blogs;
    var tags = allTags(items);

    mount.innerHTML =
      '<div class="section-eyebrow"><span class="index">03 · Log</span><h2>Blogs</h2></div>' +
      '<p class="section-lede">Write-ups on things I built, broke, or learned the hard way.</p>' +
      '<div class="blog-filter">' +
      tags.map(function (t) {
        return '<button type="button" data-tag="' + t + '" class="' + (t === activeTag ? "is-active" : "") + '">' + t + "</button>";
      }).join("") +
      "</div>" +
      '<div class="blog-list"></div>';

    renderList(mount, items);

    mount.querySelectorAll("[data-tag]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeTag = btn.getAttribute("data-tag");
        mount.querySelectorAll("[data-tag]").forEach(function (b) { b.classList.toggle("is-active", b === btn); });
        var filtered = activeTag === "All" ? items : items.filter(function (b) { return b.tags.indexOf(activeTag) !== -1; });
        renderList(mount, filtered);
      });
    });
  }

  return { render: render };
})();
