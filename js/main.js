console.log("Javascript file is connected!");

// HEADER
(() => {
const burgerButton = document.querySelector("#burger-button")
const navbarLinks = document.querySelector(".links-header")
burgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    burgerButton.classList.toggle('active');
})
})();

// SCROLL ANIMATION
(() => {
  gsap.registerPlugin(ScrollTrigger);

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1080;

  const frameCount = 170; //amount of still images

  const images = []; //array to hold images

  // Fill the array with loaded images and point to them
  for(let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `video/animation/explode_${(i+1).toString().padStart(4, '0')}.webp`;
      images.push(img);
  }
  
  // Create an object, which will have a property called frames. Similar to how we animate a dom object and its properties
  const buds = {
      frame: 0
  }

  gsap.to(buds, {
    frame: frameCount - 1,
    snap: "frame", 
    scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        start: "top top",
        end: "500% bottom",
        scrub: 2,
    },
    onUpdate: render,
})

  // When image is first loaded into the array, call the function.
  images[0].addEventListener("load", render)

  function render() {
      console.log(images[buds.frame]);
      const currentFrame = Math.min(Math.floor(buds.frame), frameCount - 1);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
  }

})();

// MODEL-VIEWER
(() => {
  // Variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  // Data
  const infoBoxes = [
    {
      title: "Spatial Audio", 
      text: "Immerse yourself in a 360° audio experience with music, shows, and podcasts that surround you in rich, dynamic sound. Create a theater-like experience with audio that feels like it's moving around you", 
      image: "images/spatial-audio.png"
    },
    {
      title: "Hearing Aid Functionality",
      text: "Designed to enhance your everyday life, these earbuds can capture and amplify voices and sounds from your surroundings, offering a casual hearing aid option when needed",
      image: "images/hearing-aid.png"
    },
    {
      title: "Built-In Microphone",
      text: "A powerful ally for your voice calls, meetings, and audio messages! This advanced inner microphone features enhanced noise cancellation and voice isolation, delivering crystal-clear sound quality",
      image: "images/built-microphone.png"
    },
    {
      title: "Touch Controls",
      text: "Despite its smaller size, functionality remains a priority. Tap once to pause, twice to skip forward, and three times to go back, providing easy control with a simple touch",
      image: "images/touch-controls.png"
    },
    {
      title: "Lasting Battery",
      text: "Charges quickly and outlasts previous models. The case holds enough power to fully charge both earbuds up to five times, keeping you connected all day",
      image: "images/lasting-battery.png"
    }
  ];

  // Populate info boxes
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      const selected = document.querySelector(`.Hotspot[slot="hotspot-${index + 1}"]`);
      if (selected) {
        const imageBox = document.createElement("img");
        imageBox.src = infoBox.image;
      

        const titleBox = document.createElement("h2");
        titleBox.textContent = infoBox.title;
        titleBox.classList.add("hotspot-title");

        const textBox = document.createElement("p");
        textBox.textContent = infoBox.text;
        textBox.classList.add("hotspot-text");

        selected.querySelector(".HotspotAnnotation").append(imageBox, titleBox, textBox);
      }
    });
  }

  // Ensure info loads on page load
  loadInfo();

  // Show/Hide Info on Hover
  function showInfo() {
    const annotation = this.querySelector(".HotspotAnnotation");
    if (annotation) gsap.to(annotation, { autoAlpha: 1, duration: 0.5 });
  }

  function hideInfo() {
    const annotation = this.querySelector(".HotspotAnnotation");
    if (annotation) gsap.to(annotation, { autoAlpha: 0, duration: 0.5 });
  }

  // Add Event Listeners to Each Hotspot
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();

// X-RAY
(() => {
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = slider.value+"%";
  }

  slider.addEventListener("input", moveDivisor);
})();

// COLOR PICKER
(() => {
  const earbuds = document.querySelector("#default-color");
  const colorButtons = document.querySelectorAll("#color-con button");

  function swapColor(e) {

      let selected = e.currentTarget.id;
      earbuds.src = `images/${selected}.jpg`
  }

  colorButtons.forEach(colorButton => {
      colorButton.addEventListener("click", swapColor);
  })
})();

// GSAP ANIMATIONS
(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from( ".intro-text", 1, {
    scrollTrigger: {
      trigger: "#explode-view",
    },
    opacity: 0,
    ease: "power2.in", 
    delay: 1
  })


  gsap.from(".intro-img", 1.5, {
    scrollTrigger: {
      trigger: ".intro-img",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 250,
    duration: 1,
    ease: "ease-in",
    stagger: .3
  });

  gsap.from( ".model-text", 1, {
    scrollTrigger: {
      trigger: ".model-text",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    ease: "power2.in", 
    delay: .25
  })

  gsap.from("#model", 1, {
    scrollTrigger: {
      trigger: ".model-text",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 250,
    duration: 1,
    ease: "ease.in", 
    scale: 0.8,
    delay: .5
  });

  gsap.from( ".feature-text", 1, {
    scrollTrigger: {
      trigger: ".feature-text",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    ease: "power2.in", 
  })

  gsap.from( ".color-text", 1, {
    scrollTrigger: {
      trigger: ".color-text",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    ease: "power2.in", 
  })

  gsap.from( ".feature-text-2", 1, {
    scrollTrigger: {
      trigger: ".feature-text-2",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    ease: "power2.in", 
  })

  gsap.from(".feature-box", 1, {
    scrollTrigger: {
      trigger: ".feature-box",
      toggleActions: "play none none reverse",
    },
    scale: 0.5,
    opacity: 0,
    y: 250,
    duration: 1,
    ease: "back.out", 
    stagger: .3
    
  });


  gsap.from("#footer", 1, {
    scrollTrigger: {
      trigger: "#footer",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: -250,
    duration: 2,
    ease: "ease.in", 
    delay: .5
  });

  gsap.from(".footer-shop", 1, {
    scrollTrigger: {
      trigger: ".footer-nav",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 0,
    x: -250,
    ease: "back.out", 
    stagger: .3,
    delay: .25
  });
})();