import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";


function Scroll1() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray("img");
    const loader = document.querySelector(".loader--text");
    const updateProgress = (instance) =>
      (loader.textContent = `${Math.round((instance.progressedCount * 100) / images.length)}%`);

    const showDemo = () => {
      document.body.style.overflow = "auto";
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

      gsap.utils.toArray("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper");
        const [x, xEnd] = index % 2 ? ["100%", (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      });
    };

    imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
  }, []);
  return (
    <div className='demo-wrapper' id='scroll1'>
      <div className='loader df aic jcc'>
        <div>
          <h1>Loading</h1>
          <h2 className='loader--text'>0%</h2>
        </div>
      </div>
      <header className='df aic jcc'>
        <div>
          <h1>ScrollTrigger</h1>
          <h2>demo</h2>
        </div>
      </header>
      <section className='demo-text'>
        <div className='wrapper text'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
      <section className='demo-gallery'>
        <ul className='wrapper'>
          <li>
            <img height='50px' src='https://source.unsplash.com/random' width='100%' />
          </li>{" "}
          <li>
            <img height='50px' src='https://source.unsplash.com/random' width='100%' />
          </li>
        </ul>
      </section>

      <section className='demo-gallery'>
        <ul className='wrapper'>
          <li>
            <img height='50px' src='https://source.unsplash.com/random' width='100%' />
          </li>{" "}
          <li>
            <img height='50px' src='https://source.unsplash.com/random' width='100%' />
          </li>
        </ul>
      </section>
      <section className='demo-gallery'>
        <ul className='wrapper'>
          <li>
            <img height='50px' src='https://source.unsplash.com/random' width='100%' />
          </li>{" "}
          <li>
            <img height='50px' src='https://source.unsplash.com/random' width='100%' />
          </li>
        </ul>
      </section>

      <section className='demo-text'>
        <div className='wrapper text'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      </section>
    </div>
  );
}
export default Scroll1;
