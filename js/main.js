(() => {
  // Variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  // Data
  const infoBoxes = [
    { title: "Spatial Audio", text: "Immerse yourself in a 360° audio experience with music, shows, and podcasts that surround you in rich, dynamic sound. Create a theater-like experience with audio that feels like it's moving around you", image: "images/spatial-audio.png" },
    { title: "Hearing Aid Functionality", text: "Designed to enhance your everyday life, these earbuds can capture and amplify voices and sounds from your surroundings, offering a casual hearing aid option when needed", image: "images/hearing-aid.png" },
    { title: "Built-In Microphone", text: "A powerful ally for your voice calls, meetings, and audio messages! This advanced inner microphone features enhanced noise cancellation and voice isolation, delivering crystal-clear sound quality", image: "images/built-microphone.png" },
    { title: "Touch Controls", text: "Despite its smaller size, functionality remains a priority. Tap once to pause, twice to skip forward, and three times to go back, providing easy control with a simple touch", image: "images/touch-controls.png" },
    { title: "Lasting Battery", text: "Charges quickly and outlasts previous models. The case holds enough power to fully charge both earbuds up to five times, keeping you connected all day", image: "images/lasting-battery.png" }
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