import Footer from "../footer";
import { useRef } from "react";
import { useIntersectionObserver } from "./intercept";
import Work from "./work";
import { useGoUp } from "./go-up";

export default function Profile() {
  const newref = useRef(null);
  const myref = useRef(null);
  const pref = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const experience1 = useRef(null);
  const place = useRef(null);

  const inview = useIntersectionObserver(myref);
  const inviews = useIntersectionObserver(newref);
  const prefinview = useIntersectionObserver(pref);
  const aboutinview = useIntersectionObserver(about);
  const experienceinview = useIntersectionObserver(experience);
  const experienceinview1 = useIntersectionObserver(experience1);
  const placeinview = useIntersectionObserver(place);
  const scrollup = useGoUp();

  return (
    <div className="profile">
      <div ref={myref}>
        <header className={inview ? "fadeup" : undefined}>
          Hey 👋🏼 I'm Jutin
        </header>
        <div className={inview ? "profilepics fadeup delay1" : "profilepics"}>
          <img src="/images/profile1.jpg" alt="" />
          <img
            className={inview ? "fadeup delay1" : undefined}
            src="/images/profile2.jpg"
            alt=""
          />
        </div>
        <div className="about">
          <span ref={about} className={aboutinview ? "fadeup" : undefined}>
            about
          </span>
          <p ref={pref} className={prefinview ? "fadeup" : undefined}>
            A frontend developer based in the Nigeria.
          </p>
        </div>

        <div className="about">
          <span
            ref={experience}
            className={experienceinview ? "fadeup" : undefined}
          >
            Experience
          </span>
          <p
            ref={experience1}
            className={experienceinview1 ? "fadeup" : undefined}
          >
            Where i have worked{" "}
          </p>
        </div>
        <div
          ref={place}
          className={placeinview ? "workparent fadeup delay1" : "workparent"}
        >
          <Work
            year={"Oct 2023 - jun 2024"}
            place={"i-Tapp"}
            work={"Frontend web Developer"}
            title={"Frontend Developer"}
          />
        </div>
      </div>

      <Footer inviews={inviews} ref={newref} scrollup={scrollup} />
    </div>
  );
}
