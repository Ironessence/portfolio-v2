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

  <!-- useEffect(() => {
    if (sections !== null) {
      let ctx = gsap.context(() => {
        //INSIDE CONTEXT >
        if (desktopScreen.matches) {
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: projects.current,
              start: 'top top',
              scrub: true,
              pin: true,
              pinSpacing: false,
              markers: true,
              end: '+=4000',
            },
          });

          //HANDLE ANIMATION FOR PROJECTS FOR TABLET / MOBILE
        }
      }, projects);
      //Clean-Up
      return () => ctx.revert();
    }
  }, [desktopScreen.matches, sections]);

  useEffect(() => {
    if (sections !== null && !desktopScreen.matches) {
      let ctx = gsap.context(() => {
        gsap
          .timeline()
          .to(sections[0], {
            scrollTrigger: {
              trigger: sections[0],
              start: '1 top',
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          })
          .to(sections[0], {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
              trigger: sections[0],
              start: 'top top',
              scrub: true,
            },
          })
          .to(sections[1], {
            scrollTrigger: {
              trigger: sections[1],
              start: '1 top',
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          })
          .to(sections[1], {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
              trigger: sections[1],
              start: 'top top',
              scrub: true,
            },
          });
      }, projects);

      return () => ctx.revert();
    }
  }, [desktopScreen.matches, sections]); -->
