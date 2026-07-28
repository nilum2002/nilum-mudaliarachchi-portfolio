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
      '<h3 class="blog-entry__title"><a href="' + b.url + '" target="_blank" rel="noopener">' + b.title + ' <span class="external-icon">↗</span></a></h3>' +
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
    var mediumProfile = window.PortfolioData.mediumProfile || "https://medium.com/@sachithyanilum";

    function bindFilterEvents(currentItems) {
      var tags = allTags(currentItems);
      var filterContainer = mount.querySelector(".blog-filter");
      if (filterContainer) {
        filterContainer.innerHTML = tags.map(function (t) {
          return '<button type="button" data-tag="' + t + '" class="' + (t === activeTag ? "is-active" : "") + '">' + t + "</button>";
        }).join("");

        filterContainer.querySelectorAll("[data-tag]").forEach(function (btn) {
          btn.addEventListener("click", function () {
            activeTag = btn.getAttribute("data-tag");
            filterContainer.querySelectorAll("[data-tag]").forEach(function (b) { b.classList.toggle("is-active", b === btn); });
            var filtered = activeTag === "All" ? currentItems : currentItems.filter(function (b) { return b.tags.indexOf(activeTag) !== -1; });
            renderList(mount, filtered);
          });
        });
      }
    }

    mount.innerHTML =
      '<div class="section-eyebrow"><span class="index">03 · Log</span><h2>Blogs & Articles</h2></div>' +
      '<div class="medium-banner">' +
      '  <div class="medium-banner__info">' +
      '    <p class="section-lede" style="margin-bottom:0;">Articles, research notes, and tutorials fetched directly from my Medium profile.</p>' +
      '  </div>' +
      '  <a href="' + mediumProfile + '" target="_blank" rel="noopener" class="medium-banner__btn">' +
      '    ' + (window.PortfolioIcons.medium || '') + ' Follow on Medium' +
      '  </a>' +
      '</div>' +
      '<div class="blog-filter"></div>' +
      '<div class="blog-list"></div>';

    renderList(mount, items);
    bindFilterEvents(items);

    // Fetch live articles from Medium RSS feed via api.rss2json.com
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sachithyanilum")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.status === "ok" && data.items && data.items.length) {
          var fetchedItems = data.items.map(function (item) {
            // Extract text excerpt from HTML description
            var div = document.createElement("div");
            div.innerHTML = item.description || "";
            var text = (div.textContent || div.innerText || "").replace(/\s+/g, " ").trim();
            var excerpt = text.length > 200 ? text.substring(0, 200) + "..." : text;
            
            var isoDate = item.pubDate ? item.pubDate.split(" ")[0] : new Date().toISOString().split("T")[0];

            return {
              date: isoDate,
              title: item.title,
              excerpt: excerpt,
              tags: item.categories && item.categories.length ? item.categories : ["Medium"],
              url: item.link
            };
          });

          window.PortfolioData.blogs = fetchedItems;
          renderList(mount, fetchedItems);
          bindFilterEvents(fetchedItems);
        }
      })
      .catch(function (err) {
        console.warn("Could not fetch live Medium RSS feed, displaying pre-rendered feed articles.", err);
      });
  }

  return { render: render };
})();
