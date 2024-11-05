(() => {
  const hotspots = document.querySelectorAll(".Hotspot");
  
  function showInfo(e) {
    console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    //button[slot="hotspot-1"] > div
    gsap.to(selected, 1, {autoAlpha:1});			
  }
  
  function hideInfo(e) {
    //console.log(e.currentTarget.slot);
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha:0});
  }
  
  hotspots.forEach(hotspot => {
    // The hover event is triggered with click/touch events on mobile phone, because you can not simply hover an element on a touch screen.
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  model.addEventListener("load", loaded);
})()



