window.onload = function() {
  // --------------
// Set attr on all letters for draw animation
// --------------
var allLetters = Snap.selectAll(".letter")

function setAttr(letter) {

  var length = letter.getTotalLength();

  letter.attr({
    'stroke-dasharray': length,
    'stroke-dashoffset': length,
    'stroke': "#808080",
    'stroke-width': 0.5,
  })

}

function setAllLetters(elem, idx, arra) {
  setAttr(elem);
}

allLetters.forEach(setAllLetters);

// --------------
// Set KUTE variables
// --------------

// step 1 - create an empty array and grab the elements to animate
var ctDrawTweens = [],
  ctFadeInAllTweens = [],
  ctFadeOutDropTweens = [],
  ctFadeInDropTweens = [],
  quadDrawTweens = [],
  quadFadeInTweens = [],
  centerLetters = document.getElementsByClassName('ct-letter'),
  dropLetters = document.getElementsByClassName('drop'),
  quadLetters = document.getElementsByClassName('quad-letter'),
  numberOfCenterLetters = centerLetters.length,
  numberOfDropLetters = dropLetters.length,
  numberOfQuadLetters = quadLetters.length;

// Draw center letters
for (var i = 0; i < numberOfCenterLetters; i++) {
  var tween = KUTE.fromTo(centerLetters[i], {
    draw: '0% 0%'
  }, {
    draw: '0% 100%'
  }, {
    duration: 1700
  });
  ctDrawTweens.push(tween);
}

// Fade in center letters
for (var i = 0; i < numberOfCenterLetters; i++) {
  var tween = KUTE.fromTo(centerLetters[i], {
    fillOpacity: 1
  }, {
    fillOpacity: 1
  }, {
    duration: 2000,
    delay: 2000
  });
  ctFadeInAllTweens.push(tween);
}

// Fade out "oah resctott"
for (var i = 0; i < numberOfDropLetters; i++) {
  var tween = KUTE.fromTo(dropLetters[i], {
    opacity: 1,

  }, {
    opacity: 0,

  }, {
    duration: 200,
  });
  ctFadeOutDropTweens.push(tween);
}

// Fade in "oah resctott"
for (var i = 0; i < numberOfDropLetters; i++) {
  var tween = KUTE.fromTo(dropLetters[i], {
    opacity: 0
  }, {
    opacity: 1
  }, {
    duration: 100
  });
  ctFadeInDropTweens.push(tween);
}

// Fade in quad letters
// for (var i = 0; i < numberOfQuadLetters; i++) {
//   var tween = KUTE.fromTo(quadLetters[i], {
//     draw: '0% 0%'
//   }, {
//     draw: '0% 100%'
//   }, {
//     duration: 1000,
//     delay: 4000
//   });
//   quadDrawTweens.push(tween);
// }

// for (var i = 0; i < numberOfQuadLetters; i++) {
//   var tween = KUTE.fromTo(quadLetters[i], {
//     fillOpacity: 0
//   }, {
//     fillOpacity: 1
//   }, {
//     duration: 2000,
//     delay: 5000
//   });
//   quadFadeInTweens.push(tween);
// }

var now = window.performance.now();
var lag = 100;

// step4 - we just start the animation for all elements at once
function ctDraw() {
  for (var i = 0; i < numberOfCenterLetters; i++) {
    ctDrawTweens[i].start(now + lag);
  }
}

function ctFadeIn() {
  for (var i = 0; i < numberOfCenterLetters; i++) {
    ctFadeInAllTweens[i].start(now + lag);
  }
}

function ctFadeOut() {
  for (var i = 0; i < numberOfDropLetters; i++) {
    ctFadeOutDropTweens[i].start(now + lag + 3000);
  }
}

function quadDraw() {
  for (var i = 0; i < numberOfQuadLetters; i++) {
    quadDrawTweens[i].start(now + lag);
  }
}

function quadFade() {
  for (var i = 0; i < numberOfQuadLetters; i++) {
    quadFadeInTweens[i].start(now + lag);
  }
}

ctDraw();
ctFadeIn();
ctFadeOut();
quadDraw();
quadFade();

KUTE.fromTo('#C', {
  translate: 0,
  fill: "black",
  stroke: "black"
}, {
  translate: 180,
  fill: "#80A2B0",
  stroke: "#80A2B0"
}).start(4000);

KUTE.fromTo('#p', {
  translate: 0,
  fill: "black",
  stroke: "black"
}, {
  translate: 20,
  fill: "#7D9682",
  stroke: "#7D9682"
}).start(4000);

KUTE.fromTo('#P', {
  translate: 0,
  fill: "black",
  stroke: "black"
}, {
  translate: 20,
  fill: "#7D9682",
  stroke: "#7D9682"
}).start(4000);

KUTE.fromTo('#P2', {
  translate: 0,
  fill: "white",
  stroke: "white"
}, {
  translate: 20,
  fill: "white",
  stroke: "white"
}).start(4000);

// --------------
// * Have to use Snap svg for opacity animation because of non support in KUTE
// --------------

var s = Snap("#np");

var C = s.select("#C");
var P = s.select("#P");
var P2 = s.select("#P2");

var bbox = C.getBBox();
var pBbox = P.getBBox();
var p2Bbox = P2.getBBox();

function npAnimation() {

  C.animate({
    opacity: 1,
  }, 1000);

  P.animate({
    opacity: 1,
  }, 1000);

    P2.animate({
    opacity: 1,
  }, 1000);
}

setTimeout(function() {
  npAnimation()
}, 4000);

// --------------
// Center animation
// --------------

function fadeInLetters() {
  for (var i = 0; i < numberOfDropLetters; i++) {
    ctFadeInDropTweens[i].start();
  }
  KUTE.fromTo('#C', {
    translate: 180,
    fill: "#80A2B0",
    stroke: "#80A2B0"
  }, {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    duration: 200
  }).start();

    KUTE.fromTo('#p', {
    translate: 20,
    fill: "#7D9682",
    stroke: "#7D9682"
  }, {
    translate: 0,
    fill: "#7D9682",
    stroke: "#7D9682"
  }, {
    duration: 200
  }).start();

  KUTE.fromTo('#P', {
    translate: 20,
    fill: "#7D9682",
    stroke: "#7D9682"
  }, {
    translate: 0,
    fill: "#7D9682",
    stroke: "#7D9682"
  }, {
    duration: 200
  }).start();

   KUTE.fromTo('#P2', {
    translate: 20,
    fill: "white",
    stroke: "white"
  }, {
    translate: 0,
    fill: "white",
    stroke: "white"
  }, {
    duration: 200
  }).start();
}

function fadeOutLetters() {
  for (var i = 0; i < numberOfDropLetters; i++) {
    ctFadeOutDropTweens[i].start();
  }
  KUTE.fromTo('#C', {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    translate: 180,
    fill: "#80A2B0",
    stroke: "#80A2B0"
  }, {
    duration: 200
  }).start();

    KUTE.fromTo('#p', {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    translate: 20,
    fill: "#7D9682",
    stroke: "#7D9682"
  }, {
    duration: 200
  }).start();

  KUTE.fromTo('#P', {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    translate: 20,
    fill: "#7D9682",
    stroke: "#7D9682"
  }, {
    duration: 200
  }).start();

    KUTE.fromTo('#P2', {
    translate: 0,
    fill: "white",
    stroke: "white"
  }, {
    translate: 20,
    fill: "white",
    stroke: "white"
  }, {
    duration: 200
  }).start();
}

document.getElementById("np").addEventListener("mouseenter", fadeInLetters);
document.getElementById("np").addEventListener("mouseleave", fadeOutLetters);

// --------------
// Quadrant animation
// --------------

function zoomQuadrant() {
};

function zoomQuadrantBack() {
};

// Cursor no events for center for 5 secs
setTimeout(function() {
  document.getElementById("ct").style["pointer-events"] = "initial";
}, 5000)

}
