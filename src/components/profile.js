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
            A freelance designer based in the Nigeria. I combine my experience
            in product and brand to solve problems, tell stories, and create
            compelling experiences.
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
            year={"2017 - present"}
            place={"OH.STUDIO"}
            work={"Freelance Designer"}
            title={"Freelance"}
          />
          <Work
            year={"2021 - present"}
            place={"Friendly Studios"}
            work={"Lead product Design"}
            title={"Freelance"}
          />
          <Work
            year={"2022"}
            place={"R/GA"}
            work={"Senior Visual Developer"}
            title={"Freelance"}
          />
          <Work
            year={"2021"}
            place={"R/GA"}
            work={"Senior Visual Developer"}
            title={"Freelance"}
          />
        </div>
      </div>

      <Footer inviews={inviews} ref={newref} scrollup={scrollup} />
    </div>
  );
}
