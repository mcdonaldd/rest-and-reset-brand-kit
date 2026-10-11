// Rest & Reset V2 marks — 8 directions from Dr. Wilson's feedback round.
// Geometry ported 1:1 from RRMarkV2.dc.html (the Claude Design export).
(function () {
  var CREAM = '#E8DCC8';

  // Each builder takes (main, acc, filterAttr) and returns the <g>...</g>
  // markup for that variant. `main` / `acc` are already resolved to either
  // a literal color or a gradient url() reference by the caller.
  var BUILDERS = {
    vrest: function (main, acc, filt) {
      return '<g' + filt + '>' +
        '<path d="M54,84 A46,46 0 0 1 146,84" fill="none" stroke="' + main + '" stroke-width="8" stroke-linecap="round"></path>' +
        '<circle cx="100" cy="80" r="8" fill="' + acc + '"></circle>' +
        '<path transform="translate(0,-6)" d="M44,114 C52,104 70,108 82,110 C92,112 108,112 118,110 C130,108 148,104 156,114 C160,120 154,126 146,124 C136,122 128,124 124,128 C120,134 122,142 126,148 Q100,154 74,148 C78,142 80,134 76,128 C72,124 64,122 54,124 C46,126 40,120 44,114 Z" fill="' + main + '"></path>' +
        '<path d="M74,166 Q100,160 126,166" fill="none" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></path>' +
        '<path d="M83,182 Q100,177 117,182" fill="none" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></path>' +
        '</g>';
    },
    column: function (main, acc, filt) {
      var blob = 'M44,114 C52,104 70,108 82,110 C92,112 108,112 118,110 C130,108 148,104 156,114 C160,120 154,126 146,124 C136,122 128,124 124,128 C120,134 122,142 126,148 Q100,154 74,148 C78,142 80,134 76,128 C72,124 64,122 54,124 C46,126 40,120 44,114 Z';
      return '<g' + filt + '>' +
        '<path d="M54,84 A46,46 0 0 1 146,84" fill="none" stroke="' + main + '" stroke-width="8" stroke-linecap="round"></path>' +
        '<circle cx="100" cy="80" r="8" fill="' + acc + '"></circle>' +
        '<path transform="translate(0,-6)" d="' + blob + '" fill="' + main + '"></path>' +
        '<path transform="translate(100,166) scale(0.6) translate(-100,-128)" d="' + blob + '" fill="' + main + '"></path>' +
        '<path transform="translate(100,196) scale(0.42) translate(-100,-128)" d="' + blob + '" fill="' + main + '"></path>' +
        '</g>';
    },
    sunset: function (main, acc, filt) {
      return '<g' + filt + '>' +
        '<path d="M50,128 A50,50 0 0 1 150,128" fill="none" stroke="' + main + '" stroke-width="7" stroke-linecap="round"></path>' +
        '<path d="M78,128 A22,22 0 0 1 122,128 Z" fill="' + acc + '"></path>' +
        '<line x1="34" y1="138" x2="166" y2="138" stroke="' + main + '" stroke-width="7" stroke-linecap="round"></line>' +
        '<path d="M76,138 H124 V147 Q124,155 116,155 H84 Q76,155 76,147 Z" fill="' + main + '"></path>' +
        '<line x1="62" y1="171" x2="138" y2="171" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></line>' +
        '<line x1="74" y1="185" x2="126" y2="185" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></line>' +
        '<line x1="87" y1="199" x2="113" y2="199" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></line>' +
        '</g>';
    },
    sunvert: function (main, acc, filt) {
      return '<g' + filt + '>' +
        '<path d="M50,128 A50,50 0 0 1 150,128" fill="none" stroke="' + main + '" stroke-width="7" stroke-linecap="round"></path>' +
        '<path d="M78,128 A22,22 0 0 1 122,128 Z" fill="' + acc + '"></path>' +
        '<path transform="translate(0,28)" d="M44,114 C52,104 70,108 82,110 C92,112 108,112 118,110 C130,108 148,104 156,114 C160,120 154,126 146,124 C136,122 128,124 124,128 C120,134 122,142 126,148 Q100,154 74,148 C78,142 80,134 76,128 C72,124 64,122 54,124 C46,126 40,120 44,114 Z" fill="' + main + '"></path>' +
        '<path d="M78,195 Q100,189 122,195" fill="none" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></path>' +
        '<path d="M87,209 Q100,204 113,209" fill="none" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></path>' +
        '</g>';
    },
    outline: function (main, acc, filt) {
      var blob = 'M44,114 C52,104 70,108 82,110 C92,112 108,112 118,110 C130,108 148,104 156,114 C160,120 154,126 146,124 C136,122 128,124 124,128 C120,134 122,142 126,148 Q100,154 74,148 C78,142 80,134 76,128 C72,124 64,122 54,124 C46,126 40,120 44,114 Z';
      return '<g' + filt + '>' +
        '<path d="M54,84 A46,46 0 0 1 146,84" fill="none" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></path>' +
        '<circle cx="100" cy="80" r="7" fill="' + acc + '"></circle>' +
        '<path transform="translate(0,-6)" d="' + blob + '" fill="none" stroke="' + main + '" stroke-width="6" stroke-linejoin="round"></path>' +
        '<path transform="translate(100,174) scale(0.62) translate(-100,-128)" d="' + blob + '" fill="none" stroke="' + main + '" stroke-width="9" stroke-linejoin="round"></path>' +
        '</g>';
    },
    tidal: function (main, acc, filt) {
      return '<g' + filt + '>' +
        '<path d="M44,126 A56,56 0 0 1 156,126" fill="none" stroke="' + main + '" stroke-width="7" stroke-linecap="round"></path>' +
        '<path d="M68,128 A32,32 0 0 1 132,128 Z" fill="' + acc + '"></path>' +
        '<line x1="30" y1="138" x2="170" y2="138" stroke="' + main + '" stroke-width="7" stroke-linecap="round"></line>' +
        '<rect x="54" y="148" width="92" height="10" rx="5" fill="' + main + '"></rect>' +
        '<rect x="66" y="163" width="68" height="10" rx="5" fill="' + main + '"></rect>' +
        '<rect x="78" y="178" width="44" height="10" rx="5" fill="' + main + '"></rect>' +
        '<rect x="88" y="193" width="24" height="10" rx="5" fill="' + main + '"></rect>' +
        '</g>';
    },
    // seal ignores `main`/`acc` the normal way — it resolves knock/sealDot
    // itself, so it's handled as a special case in v2MarkSVG() instead.
    seal: function (circleFill, knock, sealDot, filt) {
      return '<g' + filt + '>' +
        '<circle cx="100" cy="118" r="92" fill="' + circleFill + '"></circle>' +
        '<g transform="translate(100,122) scale(0.6) translate(-100,-128)">' +
        '<path d="M54,84 A46,46 0 0 1 146,84" fill="none" stroke="' + knock + '" stroke-width="9" stroke-linecap="round"></path>' +
        '<circle cx="100" cy="80" r="9" fill="' + sealDot + '"></circle>' +
        '<path transform="translate(0,-6)" d="M44,114 C52,104 70,108 82,110 C92,112 108,112 118,110 C130,108 148,104 156,114 C160,120 154,126 146,124 C136,122 128,124 124,128 C120,134 122,142 126,148 Q100,154 74,148 C78,142 80,134 76,128 C72,124 64,122 54,124 C46,126 40,120 44,114 Z" fill="' + knock + '"></path>' +
        '<path d="M74,168 Q100,162 126,168" fill="none" stroke="' + knock + '" stroke-width="7" stroke-linecap="round"></path>' +
        '<path d="M83,185 Q100,180 117,185" fill="none" stroke="' + knock + '" stroke-width="7" stroke-linecap="round"></path>' +
        '</g></g>';
    },
    horizon: function (main, acc, filt) {
      return '<g' + filt + '>' +
        '<path d="M52,122 A48,48 0 0 1 148,122" fill="none" stroke="' + main + '" stroke-width="8" stroke-linecap="round"></path>' +
        '<circle cx="100" cy="114" r="9" fill="' + acc + '"></circle>' +
        '<path d="M40,140 C50,128 72,134 100,134 C128,134 150,128 160,140 C164,146 156,152 148,149 C130,144 70,144 52,149 C44,152 36,146 40,140 Z" fill="' + main + '"></path>' +
        '<path d="M72,168 Q100,161 128,168" fill="none" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></path>' +
        '<path d="M84,184 Q100,179 116,184" fill="none" stroke="' + main + '" stroke-width="6" stroke-linecap="round"></path>' +
        '</g>';
    }
  };

  var CONCEPTS = {
    1: { num: 1, name: 'Vertebra Rest', variant: 'vrest', dim: false, accent: '#1F4A48', finish: 'Flat', fontLabel: 'Lora (classic serif)', fontFamily: "'Lora',serif",
      desc: 'Same structure as V1, but the whole rest takes the curved silhouette of a vertebra. Two curved bars continue the spine below it.' },
    2: { num: 2, name: 'Vertebral Column', variant: 'column', dim: true, accent: '#B5764A', finish: 'Dimensional', fontLabel: 'Piazzolla (modern serif)', fontFamily: "'Piazzolla',serif",
      desc: 'The vertebra rest leads a short column of smaller vertebrae, closer to the stacked reference image. A clay fermata dot adds warmth.' },
    3: { num: 3, name: 'Sunset Rest', variant: 'sunset', dim: false, accent: '#B5764A', finish: 'Flat', fontLabel: 'Archivo (clean sans)', fontFamily: "'Archivo',sans-serif",
      desc: 'The fermata turns into a sunset over water. The reflection under the horizon is a literal whole rest, and the ripples narrow like a spine.' },
    4: { num: 4, name: 'Sunset Vertebra', variant: 'sunvert', dim: true, accent: '#B5764A', finish: 'Dimensional', fontLabel: 'Lora (classic serif)', fontFamily: "'Lora',serif",
      desc: 'Combines both ideas: the sun sets on a horizon shaped like a vertebra. This is the most layered option.' },
    5: { num: 5, name: 'Line Vertebra', variant: 'outline', dim: false, accent: '#B5764A', finish: 'Line art', fontLabel: 'Piazzolla (modern serif)', fontFamily: "'Piazzolla',serif",
      desc: 'Drawn in outline like the stacked vertebrae reference. It feels lighter and more clinical, and suits embossing or engraving.' },
    6: { num: 6, name: 'Tidal Spine', variant: 'tidal', dim: false, accent: '#B5764A', finish: 'Flat', fontLabel: 'Archivo (clean sans)', fontFamily: "'Archivo',sans-serif",
      desc: 'Based on the solid sunset reference. A fuller sun sits under the fermata arc, and the reflection breaks into four tapering bars that read as vertebrae.' },
    7: { num: 7, name: 'Seal', variant: 'seal', dim: true, accent: '#B5764A', finish: 'Dimensional badge', fontLabel: 'Lora (classic serif)', fontFamily: "'Lora',serif",
      desc: 'The Vertebra Rest knocked out of a solid teal circle. It works as a social avatar, signage roundel or stamp without any extra cropping.' },
    8: { num: 8, name: 'Soft Horizon', variant: 'horizon', dim: false, accent: '#1F4A48', finish: 'Flat', fontLabel: 'Lora (classic serif)', fontFamily: "'Lora',serif",
      desc: 'The most reduced option. The rest becomes a single bar curved like a vertebra and a horizon line at once, with no hanging block.' }
  };

  // opts: { variant, color, accent, dimensional, size }
  function markSVG(opts) {
    var variant = opts.variant;
    var color = opts.color || '#1F4A48';
    var accent = opts.accent || color;
    var dim = !!opts.dimensional;
    var size = opts.size || 120;
    var main = dim ? 'url(#v2tealGrad)' : color;
    var acc = dim ? 'url(#v2clayGrad)' : accent;
    var filt = dim ? ' filter="url(#v2markShadow)"' : '';
    var inner;
    if (variant === 'seal') {
      var knock = color.toUpperCase() === CREAM ? '#1F4A48' : '#F7F1E7';
      var sealDot = accent === color ? knock : (dim ? 'url(#v2clayGrad)' : accent);
      inner = BUILDERS.seal(main, knock, sealDot, filt);
    } else {
      inner = (BUILDERS[variant] || BUILDERS.vrest)(main, acc, filt);
    }
    return '<svg viewBox="0 20 200 196" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false">' + inner + '</svg>';
  }

  function conceptMark(c, size, override) {
    override = override || {};
    var flat = !!override.flat;
    return markSVG({
      variant: c.variant,
      color: override.color || '#1F4A48',
      accent: override.color || c.accent,
      dimensional: flat ? false : c.dim,
      size: size
    });
  }

  function hydrate(root) {
    (root || document).querySelectorAll('[data-markv2]').forEach(function (el) {
      var c = CONCEPTS[el.getAttribute('data-markv2')] || CONCEPTS[1];
      el.innerHTML = conceptMark(c, +el.getAttribute('data-size') || 120, {
        color: el.getAttribute('data-fill'),
        flat: el.hasAttribute('data-flat')
      });
    });
  }

  // Standalone, self-contained files (own <defs>, real xmlns) for downloads.
  function standaloneSVG(variant, hex) {
    var inner;
    if (variant === 'seal') {
      var knock = hex.toUpperCase() === CREAM ? '#1F4A48' : '#F7F1E7';
      inner = BUILDERS.seal(hex, knock, knock, '');
    } else {
      inner = (BUILDERS[variant] || BUILDERS.vrest)(hex, hex, '');
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 196">' + inner + '</svg>';
  }

  function standaloneDimensionalSVG(variant) {
    var defs =
      '<defs>' +
      '<linearGradient id="tg" gradientUnits="userSpaceOnUse" x1="100" y1="20" x2="100" y2="216"><stop offset="0" stop-color="#2F6B69"></stop><stop offset="1" stop-color="#0E2F2E"></stop></linearGradient>' +
      '<radialGradient id="cg" gradientUnits="userSpaceOnUse" cx="92" cy="105" r="45"><stop offset="0" stop-color="#E0A882"></stop><stop offset="1" stop-color="#9A5B33"></stop></radialGradient>' +
      '<filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#0E2F2E" flood-opacity="0.35"></feDropShadow></filter>' +
      '</defs>';
    var inner;
    if (variant === 'seal') {
      inner = BUILDERS.seal('url(#tg)', '#F7F1E7', 'url(#cg)', '');
    } else {
      inner = (BUILDERS[variant] || BUILDERS.vrest)('url(#tg)', 'url(#cg)', ' filter="url(#sh)"');
    }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 196">' + defs + inner + '</svg>';
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

  function downloadSVG(variant, hex, filename) {
    var svg = hex === 'gradient' ? standaloneDimensionalSVG(variant) : standaloneSVG(variant, hex);
    triggerDownload(new Blob([svg], { type: 'image/svg+xml' }), filename);
  }

  function downloadPNG(variant, hex, filename, px) {
    px = px || 1024;
    var svg = hex === 'gradient' ? standaloneDimensionalSVG(variant) : standaloneSVG(variant, hex);
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

  window.RR2 = {
    CONCEPTS: CONCEPTS, markSVG: markSVG, conceptMark: conceptMark, hydrate: hydrate,
    standaloneSVG: standaloneSVG, standaloneDimensionalSVG: standaloneDimensionalSVG,
    downloadSVG: downloadSVG, downloadPNG: downloadPNG
  };
})();
