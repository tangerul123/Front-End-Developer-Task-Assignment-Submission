gsap.registerPlugin(ScrollTrigger);

// Timeline for whole section
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top 80%",
  }
});

// Section fade + up
tl.from(".featured-works", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

// Title
.from(".feature-title", {
  x: 100,
  opacity: 0,
  rotate: -5,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.5")

// Subtitle
.from(".feature-sub-title", {
  x: -100,
  opacity: 0,
  rotate: -10,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.6")

// Center Card 
.from(".feature-card-2", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.4")

// Left Card
.from(".feature-card-1", {
  x: -120,
  opacity: 0,
  rotate: -8,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.8")

// Right Card
.from(".feature-card-3", {
  x: 120,
  opacity: 0,
  rotate: 8,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.8");



// brand section animation
const brandTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".brand-section",
      start: "top 75%",
      once: true,
    }
  });

  // 1. Left image - clip-path reveal from bottom
  brandTl.fromTo(".brand-item-1",
    { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
    { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1, ease: "power3.out" }
  );

  // 2. Brand number 04/01 - fade up
  brandTl.fromTo(".brand-number",
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "-=0.6"
  );

  // 3. Brand title (right) - stagger word by word
  const titleEl = document.querySelector(".brand-item-title");
  if (titleEl) {
    const words = titleEl.innerText.split(" ");
    titleEl.innerHTML = words
      .map(w => `<span class="brand-word inline-block">${w}&nbsp;</span>`)
      .join("");

    brandTl.fromTo(".brand-word",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08
      },
      "-=0.4"
    );
  }

  // 4. Subtitle - fade in
  brandTl.fromTo(".brand-item-subtitle",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "-=0.2"
  );

  // 5. Tags - staggered pop-in
  brandTl.fromTo(".brand-tag",
    { scale: 0.7, opacity: 0 },
    {
      scale: 1, opacity: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      stagger: 0.1
    },
    "-=0.2"
  );

  // 6. Small images - fade + scale
  brandTl.fromTo(".brand-img-2, .brand-img-3",
    { scale: 0.8, opacity: 0 },
    {
      scale: 1, opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15
    },
    "-=0.2"
  );

  // 7. CTA Button - bounce effect
  brandTl.fromTo(".brand-btn",
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    },
    "-=0.3"
  );

  // 8. Heading title & subtitle - slide from left
  brandTl.fromTo(".brand-title",
    { x: -80, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    0.2
  );

  brandTl.fromTo(".brand-sub-title",
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    0
  );


// CTA Section Animations


//  SUBTITLE - fade up
gsap.fromTo(".cta-subtitle",
  { y: 30, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cta-subtitle",
      start: "top 85%",
      once: true
    }
  }
);

// MAIN TITLE - word by word stagge
  gsap.fromTo(".cta-title",
    { y: 80, opacity: 0,rotate: -5, },
    {
      y: 0, opacity: 1,
      duration: 2,
      rotate: 0,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".cta-title",
        start: "top 85%",
        once: true
      }
    }
  );





//  CONTACT INFO - fade up
gsap.fromTo(".cta-info",
  { y: 20, opacity: 0 },
  {
    y: 0, opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
    scrollTrigger: {
      trigger: ".cta-info",
      start: "top 90%",
      once: true
    }
  }
);

//  BUTTON - bounce in
gsap.fromTo(".cta-button",
  { y: 30, opacity: 0, scale: 0.9 },
  {
    y: 0, opacity: 1, scale: 1,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    delay: 0.4,
    scrollTrigger: {
      trigger: ".cta-button",
      start: "top 95%",
      once: true
    }
  }
);

//  FLOATING IMAGES - smooth continuous loop
gsap.to(".cta-img-1", {
  y: -18,
  duration: 2.8,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

gsap.to(".cta-img-2", {
  y: 14,
  duration: 3.2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  delay: 0.5
});

gsap.to(".cta-img-3", {
  y: -12,
  duration: 2.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  delay: 0.8
});

gsap.to(".cta-img-4", {
  y: 16,
  duration: 3.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  delay: 0.3
});

//  CTA SHAPE - slow rotation
gsap.to(".cta-shape", {
  rotate: 15,
  duration: 6,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});