"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic";
import { animatePanel } from "./panel-animation";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement[]>([]);
  const columnWrapRef = useRef<HTMLDivElement[]>([]);

  const pushColumnsRef = (el: HTMLDivElement) => columnsRef.current.push(el);
  const pushColumnWrapRef = (el: HTMLDivElement) =>
    columnWrapRef.current.push(el);

  useIsomorphicLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: true,
        },
      });

      timeline.add(
        animatePanel({
          target: columnsRef,
          triggerTarget: showcaseRef,
          endTarget: columnWrapRef,
        })
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <main>
      <section className="section section--intro">
        <h2 className="section__title">
          Charlotte <br /> LaRue
        </h2>
        <p className="section__text">
          We think having capacity to choose gives us freedom. Choice is the
          very denial of freedom.
        </p>
        <p className="section__text section__text--alt">
          <span>Discover</span>
          <svg
            className="section__arrow"
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
          >
            <path
              vectorEffect="non-scaling-stroke"
              d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
            ></path>
          </svg>
          <span>Scroll</span>
        </p>
      </section>

      <section className="section section--columns" ref={sectionRef}>
        <div className="columns" ref={pushColumnsRef}>
          <div className="column-wrap" ref={pushColumnWrapRef}>
            <div className="column">
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url('/images/7.avif')" }}
                ></div>
              </div>
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/2.avif)" }}
                ></div>
              </div>
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/20.avif)" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="column-wrap" ref={pushColumnWrapRef}>
            <div className="column">
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/6.avif)" }}
                ></div>
              </div>
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/4.avif)" }}
                ></div>
              </div>
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/5.avif)" }}
                ></div>
              </div>
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/22.avif)" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="column-wrap" ref={pushColumnWrapRef}>
            <div className="column">
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/3.avif)" }}
                ></div>
              </div>
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/1.avif)" }}
                ></div>
              </div>
              <div className="column__item">
                <div
                  className="column__item-img"
                  style={{ backgroundImage: "url(/images/21.avif)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--showcase"
        ref={showcaseRef}
      ></section>
    </main>
  );
}
