import React, { useEffect } from "react";
import { gsap } from "gsap";

function Cursor3D() {
  useEffect(() => {
    let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree;

    // Custom JS

    const body = document.querySelector("body");
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;

    body.addEventListener("mousemove", (e) => {
      clientX = e.pageX;
      clientY = e.pageY;

      request = requestAnimationFrame(updateMe);

      mouseCoords(e);
      cursor.classList.remove("hidden");
      follower.classList.remove("hidden");
    });

    function updateMe() {
      dx = clientX - cx;
      dy = clientY - cy;
      tiltx = dy / cy;
      tilty = dx / cx;
      radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
      degree = radius * 20;
      gsap.to(".col-lg-7 ", 1, {
        transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`,
      });
    }

    gsap.to(".card", { zoom: 0.98 });
    gsap.to(".l_main", { opacity: 1, duration: 0.1 });
    gsap.to(".l2_main", {
      opacity: 1,
      left: -10,
      top: 10,
      duration: 0.25,
      delay: 0.25,
    });
    gsap.to(".l3_main", {
      opacity: 1,
      left: -20,
      top: 20,
      duration: 0.25,
      delay: 0.25,
    });
    gsap.to(".card-russia", { opacity: 0.07, duration: 0.1 });
    gsap.to(".card-logo_w", { opacity: 1, duration: 0.225 });
    gsap.to(".card-chip", { opacity: 1, duration: 0.225 });
    gsap.to(".card-valid", { opacity: 1, zoom: 1, duration: 0.1, delay: 0.25 });
    gsap.to(".card-number-holder", {
      opacity: 1,
      zoom: 1,
      duration: 0.1,
      delay: 0.25,
    });

    const cursor = document.getElementById("cursor"),
      follower = document.getElementById("aura"),
      links = document.getElementsByTagName("a");

    (mouseX = 0), (mouseY = 0), (posX = 0), (posY = 0);

    function mouseCoords(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    }

    gsap.to({}, 0.01, {
      repeat: -1,

      onRepeat: () => {
        posX += (mouseX - posX) / 15;
        posY += (mouseY - posY) / 15;

        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });

        gsap.set(follower, {
          css: {
            left: posX - 24,
            top: posY - 24,
          },
        });
      },
    });

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseover", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
      });

      links[i].addEventListener("mouseout", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      });
    }

    body.addEventListener("mouseout", () => {
      cursor.classList.add("hidden");
      follower.classList.add("hidden");
    });
  }, []);
  return (
    <header className='card-header' id='cursor3d'>
      <div className='top-line'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6'>
              <a href='#' className='logo'>
                uCard <span>neo</span>
              </a>
            </div>
            <div className='col-6 text-right'>
              <a href='#' className='button'>
                Регистрация
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='content-center'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-5'>
                <a href='#' className='trylink'>
                  <i>›</i>Попробовать
                </a>
              </div>
              <div className='col-lg-7 text-center'>
                <div className='card'>
                  <img src='images/cursor3d/l_main.svg' alt='l_main' className='l_main' />
                  <img src='images/cursor3d/l2_main.svg' alt='l2_main' className='l2_main level--1' />
                  <img src='images/cursor3d/l3_main.svg' alt='l3_main' className='l3_main level--2' />
                  <img src='images/cursor3d/logo_w.svg' alt='logo_w' className='card-logo_w level-1' />
                  <img src='images/cursor3d/chip.svg' alt='chip' className='card-chip' />
                  <img
                    src='images/cursor3d/number-holder.svg'
                    alt='number-holder'
                    className='card-number-holder level-2'
                  />
                  <img src='images/cursor3d/valid.svg' alt='valid' className='card-valid level-1' />
                  <img src='images/cursor3d/russia.svg' alt='russia' className='card-russia' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='cursor'></div>
      <div id='aura'></div>

    </header>
  );
}
export default Cursor3D;
