 <!-- useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(ideRef.current, {
        x: -200,
        scale: 3,
        duration: 10,
        scrollTrigger: {
          trigger: ideRef.current,
          start: 'top 190',
          end: '+=2000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
      });
    }, '.home-wrapper');
    //Clean-Up
    return () => ctx.revert();
  }, []); -->
