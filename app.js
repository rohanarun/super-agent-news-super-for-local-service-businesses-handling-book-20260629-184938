(function () {
  // Guarded GSAP animations: page still works if CDN fails
  function initAnimations() {
    if (!window.gsap) return;
    gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 });
    gsap.from('.tile', {
      scrollTrigger: {
        trigger: '.bento',
        start: 'top 80%'
      },
      y: 30,
      opacity: 0,
      stagger: 0.1
    });
  }

  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js';
  script.onload = function () {
    var st = document.createElement('script');
    st.src = 'https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js';
    st.onload = initAnimations;
    document.head.appendChild(st);
  };
  document.head.appendChild(script);
})();