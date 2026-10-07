/* ==========================================================================
   RESEARCH DETAIL COMPONENT — builds a standalone research landing page
   (used by research/<id>/index.html, not by the portfolio itself)
   ========================================================================== */

window.PortfolioResearchDetail = (function () {
  function find(id) {
    var key = String(id).toUpperCase();
    var details = (window.PortfolioData.researchDetails || {})[key];
    var summary = window.PortfolioData.research.filter(function (r) { return r.id === key; })[0];
    return details && summary ? { summary: summary, details: details } : null;
  }

  function escapeHTML(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function section(title, body, extraClass) {
    return (
      '<section class="paper-section' + (extraClass ? " " + extraClass : "") + '">' +
      "<h3>" + title + "</h3>" + body +
      "</section>"
    );
  }

  function headerHTML(r, d) {
    var authors = (d.authors || []).map(function (a) {
      var sup = a.aff && d.affiliations && d.affiliations.length > 1 ? "<sup>" + a.aff.join(",") + "</sup>" : "";
      var name = a.url ? '<a href="' + a.url + '">' + a.name + "</a>" : a.name;
      return '<span class="paper-header__author">' + name + sup + "</span>";
    }).join("");

    var affs = (d.affiliations || []).map(function (aff, i) {
      return "<span>" + (d.affiliations.length > 1 ? "<sup>" + (i + 1) + "</sup>" : "") + aff + "</span>";
    }).join("");

    var buttons = (d.buttons || []).filter(function (b) { return b.url; }).map(function (b) {
      var icon = window.PortfolioIcons[b.icon] || "";
      return '<a class="paper-header__btn" href="' + b.url + '" target="_blank" rel="noopener">' + icon + "<span>" + b.label + "</span></a>";
    }).join("");

    return (
      '<header class="paper-header">' +
      (d.showVenue ? '<div class="paper-header__venue">' + r.venue + " &middot; " + r.year + "</div>" : "") +
      '<h2 class="paper-header__title">' + r.title + "</h2>" +
      (authors ? '<div class="paper-header__authors">' + authors + "</div>" : "") +
      (affs ? '<div class="paper-header__affs">' + affs + "</div>" : "") +
      (buttons ? '<div class="paper-header__buttons">' + buttons + "</div>" : "") +
      "</header>"
    );
  }

  // Turns any YouTube link (watch, youtu.be, shorts, embed) into an embed URL.
  function youtubeEmbed(url) {
    var m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    return m ? "https://www.youtube.com/embed/" + m[1] : null;
  }

  function mediaHTML(d) {
    var embed = d.video && (youtubeEmbed(d.video) || (/player\.vimeo\.com/.test(d.video) ? d.video : null));
    if (embed) {
      return '<div class="paper-media paper-media--video"><iframe src="' + embed + '" title="Project video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>';
    }
    if (d.video) {
      return '<div class="paper-media"><video src="' + d.video + '" controls muted playsinline></video></div>';
    }
    if (d.teaserImage) {
      return '<div class="paper-media"><img src="' + d.teaserImage + '" alt="Project overview"></div>';
    }
    return "";
  }

  // Paper-style (booktabs) table: optional column groups with a short rule
  // under each, a header row, and body rows with optional gaps between blocks.
  function tableHTML(t) {
    var gaps = t.gapAfter || [];
    var groups = t.groups
      ? "<tr class=\"paper-table__groups\">" +
        t.groups.map(function (g) {
          return '<th colspan="' + (g.span || 1) + '"' + (g.label ? ' class="has-rule"' : "") + ">" + (g.label || "") + "</th>";
        }).join("") +
        "</tr>"
      : "";
    // The first `textColumns` columns are left-aligned labels; the rest are numbers.
    var textCols = t.textColumns || 1;
    var cls = function (i) { return i < textCols ? ' class="is-text"' : ""; };
    var head = "<tr>" + t.columns.map(function (c, i) { return "<th" + cls(i) + ">" + c + "</th>"; }).join("") + "</tr>";
    var body = t.rows.map(function (row, i) {
      return "<tr" + (gaps.indexOf(i - 1) !== -1 ? ' class="gap"' : "") + ">" +
        row.map(function (cell, j) { return "<td" + cls(j) + ">" + cell + "</td>"; }).join("") +
        "</tr>";
    }).join("");

    return (
      '<figure class="paper-table">' +
      (t.label || t.caption
        ? "<figcaption>" +
          (t.label ? '<span class="paper-table__label">' + t.label + "</span>" : "") +
          (t.caption ? '<span class="paper-table__caption">' + t.caption + "</span>" : "") +
          "</figcaption>"
        : "") +
      '<div class="paper-table__scroll"><table>' +
      "<thead>" + groups + head + "</thead><tbody>" + body + "</tbody></table></div>" +
      "</figure>"
    );
  }

  function resultsHTML(res) {
    if (!res) return "";
    var tables = (res.tables || []).map(tableHTML).join("");
    var stats = (res.highlights || []).map(function (h) {
      return '<div class="paper-stat"><span class="paper-stat__value">' + h.value + '</span><span class="paper-stat__label">' + h.label + "</span></div>";
    }).join("");
    var figures = (res.figures || []).map(function (f) {
      return '<figure class="paper-figure"><img src="' + f.src + '" alt="' + (f.caption || "") + '">' +
        (f.caption ? "<figcaption>" + f.caption + "</figcaption>" : "") + "</figure>";
    }).join("");
    return section(
      "Results",
      (stats ? '<div class="paper-stats">' + stats + "</div>" : "") +
      (res.text ? "<p>" + res.text + "</p>" : "") +
      tables +
      figures
    );
  }

  function html(id) {
    var entry = find(id);
    if (!entry) return null;
    var r = entry.summary;
    var d = entry.details;

    return (
      '<article class="paper">' +
      headerHTML(r, d) +
      (d.teaser ? '<p class="paper-teaser">' + d.teaser + "</p>" : "") +
      mediaHTML(d) +
      (d.showAbstract ? section("Abstract", "<p>" + r.abstract + "</p>") : "") +
      (d.contributions && d.contributions.length
        ? section(
            "Key Ideas and Contributions",
            '<ol class="paper-contribs">' +
            d.contributions.map(function (c) {
              return "<li><strong>" + c.title + ".</strong> " + c.text + "</li>";
            }).join("") +
            "</ol>"
          )
        : "") +
      resultsHTML(d.results) +
      (d.bibtex
        ? section(
            "Citation",
            '<div class="paper-bibtex"><button type="button" class="paper-bibtex__copy" data-copy-bibtex>Copy</button>' +
            "<pre><code>" + escapeHTML(d.bibtex) + "</code></pre></div>"
          )
        : "") +
      (d.references && d.references.length
        ? section("References", "<ol class=\"paper-refs\">" + d.references.map(function (ref) { return "<li>" + ref + "</li>"; }).join("") + "</ol>")
        : "") +
      (d.acknowledgements ? section("Acknowledgements", "<p>" + d.acknowledgements + "</p>") : "") +
      (d.showTags ? '<div class="paper-tags">' + r.tags.map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") + "</div>" : "") +
      "</article>"
    );
  }

  // Wires up interactive bits after the detail markup is mounted.
  function bind(mount) {
    var btn = mount.querySelector("[data-copy-bibtex]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var text = mount.querySelector(".paper-bibtex code").textContent;
      var done = function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = "Copy"; }, 1500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
  }

  function title(id) {
    var entry = find(id);
    return entry ? entry.summary.title : null;
  }

  return { html: html, bind: bind, title: title };
})();
