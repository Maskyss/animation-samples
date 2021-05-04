import React, { useEffect, useState } from "react";
import { TimelineMax, Power4 } from "gsap/dist/gsap";
import Circle from "../componentns/circle";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

//https://meetyourstaff.co/
export default function MettyYourStuff() {
  const [count, setcount] = useState([]);

  useEffect(() => {
    const count = innerWidth > 600 ? 20 : 8;
    setcount(count);
   
  }, []);

  useEffect(() => {
    ScrollMagicPluginGsap(ScrollMagic, gsap);

    var tl = new TimelineMax();
    const controller = new ScrollMagic.Controller();

    tl.fromTo(
      "#left",
      { x: 150 },
      {
        x: 0,
      }
    );

    const scene = new ScrollMagic.Scene({
      triggerElement: "#plunger",
      duration: "200%",
      triggerHook: "onEnter",
    })
      .setTween(tl)
      .addTo(controller);
  }, []);

  return (
    <div>
      <div id="meetyStuffBody" className="content">
        <div style={{ height: "100vh" }}></div>
        <div id="plunger">
          <picture id="left" className="split-item">
            <source
              sizes="(min-width: 768px) 100vw, 50vw"
              type="image/webp"
              srcSet="https://cdn.sanity.io/images/i5xjd6pc/production/9aaff9bb9ab413c4904898b1f4022c9bf6007308-1500x1756.jpg?w=600&amp;fm=webp&amp;q=100 600w,https://cdn.sanity.io/images/i5xjd6pc/production/9aaff9bb9ab413c4904898b1f4022c9bf6007308-1500x1756.jpg?w=1000&amp;fm=webp&amp;q=100 1000w,https://cdn.sanity.io/images/i5xjd6pc/production/9aaff9bb9ab413c4904898b1f4022c9bf6007308-1500x1756.jpg?w=1500&amp;fm=webp&amp;q=100 1500w"
            />
            <img
              alt="Blue plunger in bathroom"
              srcSet="https://cdn.sanity.io/images/i5xjd6pc/production/9aaff9bb9ab413c4904898b1f4022c9bf6007308-1500x1756.jpg?w=600&amp;q=100 600w,https://cdn.sanity.io/images/i5xjd6pc/production/9aaff9bb9ab413c4904898b1f4022c9bf6007308-1500x1756.jpg?w=1000&amp;q=100 1000w,https://cdn.sanity.io/images/i5xjd6pc/production/9aaff9bb9ab413c4904898b1f4022c9bf6007308-1500x1756.jpg?w=1500&amp;q=100 1500w"
              src="https://cdn.sanity.io/images/i5xjd6pc/production/9aaff9bb9ab413c4904898b1f4022c9bf6007308-1500x1756.jpg?w=1500&amp;q=100"
            />
          </picture>
          <div id="right" className="split-item">
            <h4>Our First Staff</h4>
            <h2>
              <span>The Plunger</span>
            </h2>
            <p>
              {`Our first item is the plunger. In part, to pay homage to our
                founder Charlie's grandfather, who was a career plumber, and in
                part because it's the perfect way to introduce what Staff is all
                about - changing the way we view and interact with common items
                throughout the house.`}
            </p>
            <a href="/products/the-plunger" className="btn">
              Shop
            </a>
          </div>
        </div>

        <div id="bubblesContainer">
          {[...Array(count * 10)].map((_, i) => {
            return <Circle key={i} />;
          })}
        </div>
        <img
          style={{ width: "100%" }}
          src="https://cdn.sanity.io/images/i5xjd6pc/production/80a52a68896ba5639cf01036cc6419a1e21b5f4d-2200x1494.jpg?w=1800&fm=webp&q=100"
        />
      </div>
    </div>
  );
}
