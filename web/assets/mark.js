// Rest & Reset mark: fermata over a whole rest, with spine lines below.
// Every mark on the site is rendered from this one definition.
(function () {
  var TEAL = 'oklch(32% 0.055 195)';
  var CLAY = 'oklch(60% 0.09 45)';
  var VERTEBRAE = [
    { x: 77, y: 152, w: 46 },
    { x: 80, y: 166, w: 40 },
    { x: 83, y: 180, w: 34 },
    { x: 87, y: 194, w: 26 }
  ];

  var CONCEPTS = {
    1: { num: 1, name: 'Classic Simple', mark: 'simple', font: "'Lora',serif", fontLabel: 'Lora (classic serif)', dot: TEAL, dimensional: false },
    2: { num: 2, name: 'Modern Spine', mark: 'detailed', font: "'Piazzolla',serif", fontLabel: 'Piazzolla (modern serif)', dot: CLAY, dimensional: true },
    3: { num: 3, name: 'Clean Sans', mark: 'simple', font: "'Archivo',sans-serif", fontLabel: 'Archivo (clean sans)', dot: TEAL, dimensional: false },
    4: { num: 4, name: 'Bold Signage', mark: 'detailed', font: "'Archivo',sans-serif", fontLabel: 'Archivo (clean sans)', dot: CLAY, dimensional: true }
  };

  // The mark's drawing commands only (no <svg> wrapper) — shared by the live
  // preview renderer and the standalone file exporter so they never drift.
  function innerMarkup(variant, fill, dot, filterAttr) {
    var spine = '';
    if (variant === 'detailed') {
      spine = VERTEBRAE.map(function (v) {
        return '<rect x="' + v.x + '" y="' + v.y + '" width="' + v.w + '" height="10" rx="4" fill="' + fill + '"></rect>';
      }).join('');
    } else {
      spine =
        '<path d="M78,155 Q100,150 122,155" fill="none" stroke="' + fill + '" stroke-width="6" stroke-linecap="round"></path>' +
        '<path d="M84,172 Q100,168 116,172" fill="none" stroke="' + fill + '" stroke-width="6" stroke-linecap="round"></path>';
    }
    return '<g' + (filterAttr || '') + '>' +
      '<path d="M50,85 A50,50 0 0 1 150,85" fill="none" stroke="' + fill + '" stroke-width="8" stroke-linecap="round"></path>' +
      '<circle cx="100" cy="88" r="7" fill="' + dot + '"></circle>' +
      '<line x1="70" x2="130" y1="118" y2="118" stroke="' + fill + '" stroke-width="6" stroke-linecap="round"></line>' +
      '<rect x="84" y="118" width="32" height="20" fill="' + fill + '"></rect>' +
      spine + '</g>';
  }

  // opts: { variant: 'simple'|'detailed', fill, dot, dimensional, size }
  function markSVG(opts) {
    var fill = opts.dimensional ? 'url(#tealGrad)' : opts.fill;
    var dot = opts.dimensional ? 'url(#clayGrad)' : (opts.dot || opts.fill);
    var filter = opts.dimensional ? ' filter="url(#markShadow)"' : '';
    var size = opts.size || 120;
    return '<svg viewBox="0 0 200 200" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false">' +
      innerMarkup(opts.variant, fill, dot, filter) + '</svg>';
  }

  // A standalone, downloadable single-color SVG file: real xmlns, cropped to
  // the mark's content (matches the exported asset pack), no live gradients.
  function standaloneMarkSVG(variant, hex) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 25 120 185">' +
      innerMarkup(variant, hex, hex, '') + '</svg>';
  }

  // The dimensional (gradient + shadow) file, for concepts 2 & 4 — matches
  // mark-color.svg in the exported asset pack exactly, defs embedded so the
  // file is self-contained.
  function standaloneDimensionalSVG(variant) {
    var defs =
      '<defs>' +
      // userSpaceOnUse (not the objectBoundingBox default) — a perfectly
      // horizontal <line> has a zero-height bounding box, so a top-to-bottom
      // objectBoundingBox gradient on it is degenerate and paints nothing.
      '<linearGradient id="tg" gradientUnits="userSpaceOnUse" x1="100" y1="0" x2="100" y2="200"><stop offset="0" stop-color="#2F6B69"></stop><stop offset="1" stop-color="#0E2F2E"></stop></linearGradient>' +
      '<radialGradient id="cg" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#D59A74"></stop><stop offset="1" stop-color="#9A5B33"></stop></radialGradient>' +
      '<filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0E2F2E" flood-opacity="0.4"></feDropShadow></filter>' +
      '</defs>';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 25 120 185">' + defs +
      innerMarkup(variant, 'url(#tg)', 'url(#cg)', ' filter="url(#sh)"') + '</svg>';
  }

  function conceptMark(c, size, override) {
    override = override || {};
    return markSVG({
      variant: c.mark,
      fill: override.fill || TEAL,
      dot: override.fill || c.dot,
      dimensional: override.flat ? false : c.dimensional,
      size: size
    });
  }

  // Fill any <span data-mark="1" data-size="36" data-fill="#E8DCC8" data-flat></span>
  function hydrate(root) {
    (root || document).querySelectorAll('[data-mark]').forEach(function (el) {
      var c = CONCEPTS[el.getAttribute('data-mark')] || CONCEPTS[1];
      el.innerHTML = conceptMark(c, +el.getAttribute('data-size') || 120, {
        fill: el.getAttribute('data-fill'),
        flat: el.hasAttribute('data-flat')
      });
    });
  }

  function triggerDownload(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  // hex === 'gradient' downloads the true dimensional version instead of a
  // flat recolor (only meaningful for concepts 2 & 4).
  function downloadSVG(variant, hex, filename) {
    var svg = hex === 'gradient' ? standaloneDimensionalSVG(variant) : standaloneMarkSVG(variant, hex);
    triggerDownload(new Blob([svg], { type: 'image/svg+xml' }), filename);
  }

  // Rasterizes the standalone SVG to a transparent-background PNG client-side.
  function downloadPNG(variant, hex, filename, px) {
    px = px || 1024;
    var svg = hex === 'gradient' ? standaloneDimensionalSVG(variant) : standaloneMarkSVG(variant, hex);
    var svgUrl = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    var img = new Image();
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = px;
      canvas.height = px;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, px, px);
      URL.revokeObjectURL(svgUrl);
      canvas.toBlob(function (blob) { triggerDownload(blob, filename); }, 'image/png');
    };
    img.onerror = function () { URL.revokeObjectURL(svgUrl); };
    img.src = svgUrl;
  }

  window.RR = {
    TEAL: TEAL, CLAY: CLAY, CONCEPTS: CONCEPTS,
    markSVG: markSVG, standaloneMarkSVG: standaloneMarkSVG, standaloneDimensionalSVG: standaloneDimensionalSVG,
    conceptMark: conceptMark, hydrate: hydrate,
    downloadSVG: downloadSVG, downloadPNG: downloadPNG
  };
})();
