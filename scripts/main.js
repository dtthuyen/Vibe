// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("content.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          document.querySelector(`[text-content*="${customData}"]`).innerText = data[customData];
        }

        // Check if the iteration is over
        // Run amimation if so
        if (dataArr.length === dataArr.indexOf(customData) + 1) {
          animationTimeline();
        }
      });
    });
};

// Animation Timeline
const animationTimeline = () => {

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.4, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=2")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".four", 0.7, { opacity: 0, y: 10 })
    .to(".four", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.7, {
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      z: 10,
      opacity: 0
    }, "+=0.5")
    .to(".idea-5 .smiley", 0.7, { rotation: 90, x: 8 }, "+=1.0")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2.5")
    .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
    .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1")
    .from(".six", 0.7, { opacity: 0, y: 10 })
    .to(".six", 0.7, { opacity: 0, y: 10 }, "+=5")
    .from(".seven", 0.7, { opacity: 0, y: 10 })
    .to(".seven", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".eight", 0.7, { opacity: 0, y: 10 })
    .to(".eight", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".nine", 0.7, { opacity: 0, y: 10 })
    .to(".nine", 0.7, { opacity: 0, y: 10 }, "+=4.5")
    .from(".ten", 0.7, { opacity: 0, y: 10 })
    .from(".troll", 0.7, { opacity: 0, y: 10 })
    .to(".ten", 0.7, { opacity: 0, y: 10 }, "+=3.5")
    .to(".troll", 0.7, { opacity: 0, y: 10 }, "-=2")
    .staggerFrom(".final p", 1, ideaTextTrans, 1.2)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1.5");


};

// Run fetch and animation in sequence
fetchData();