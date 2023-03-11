import React, { useRef } from "react";
import { useIntersectionObserver } from "./intercept";

import { useParams } from "react-router-dom";
import Footer from "../footer";
import projects from "./db.json";

export default function Projectdetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  const myref = useRef(null);
  const newref = useRef(null);

  const inview = useIntersectionObserver(myref);
  const inviews = useIntersectionObserver(newref);

  return (
    <div className="project">
      <div className="head" ref={myref}>
        <header className={inview ? "fadeup" : null}>{project.header}</header>
        <div className={inview ? "pname fadeup delay" : "pname"}>
          <p>{project?.name}</p>
        </div>
      </div>
      <div className="gallery">
        <img className="firstimg" src={project?.bigimg} alt="" />
        <div className={project?.img18 ? null : "none"}>
          <video
            src={project?.img18}
            autoPlay
            loop
            muted
            className="firstimg"
          />
        </div>

        <div className="role">
          <div>
            <p>Client</p>
            <p>{project?.name}</p>
          </div>
          <div className={project?.studio ? "" : "none"}>
            <p>Studio</p>
            <p>{project?.studio}</p>
          </div>
          <div>
            <p>Role</p>
            <p>{project?.role}</p>
          </div>
          <div>
            <p>Focus</p>
            <p>{project?.focus}</p>
          </div>
        </div>
        <img className="firstimg" src={project?.img15} alt="" />
        {project?.img15 && (
          <section>
            <p>Overview</p>
            <p>{project?.overview}</p>
          </section>
        )}

        <div className="imgcontain">
          <img
            className={project?.img19 ? "imgs" : "img"}
            src={project?.img2}
            alt=""
          />
          <img
            className={project?.img19 ? "imgs" : "img"}
            src={project?.img3}
            alt=""
          />
          <img
            className={project?.img19 ? "imgs" : "img"}
            src={project?.img19}
            alt=""
          />

          <div className={project?.mainsrcvid1 ? "container" : "none"}>
            <video src={project?.mainsrcvid1} autoPlay loop playsInline muted alt="ff" />
          </div>
        </div>

        {project?.img15 ? null : (
          <section>
            <p>Overview</p>
            <p>{project?.overview}</p>
          </section>
        )}
        <img className="firstimg" src={project?.img4} alt="" />
        <img className="firstimg" src={project?.img16} alt="" />

        <div className="imgcontain">
          <div className={project?.img18 ? "ringvid" : "none"}>
            <video src={project?.img18} autoPlay loop muted className=" ring" />
          </div>
          <img className="img" src={project?.img5} alt="" />
          <img className="img" src={project?.img6} alt="" />
          <div className={project?.mainsrcvid1 ? "container" : "none"}>
            <video src={project?.mainsrcvid1} autoPlay loop playsInline muted alt="ff" />
          </div>
        </div>
        <img className="firstimg" src={project?.img7} alt="" />
        <img className="firstimg" src={project?.img8} alt="" />
        <img className="firstimg" src={project?.img9} alt="" />
        <div className="imgcontain">
          <img className="img" src={project?.img13} alt="" />
          <img className="img" src={project?.img14} alt="" />
        </div>
        <img className="firstimg" src={project?.img10} alt="" />
        <div className="imgcontain">
          <img className="img" src={project?.img11} alt="" />
          <img className="img" src={project?.img12} alt="" />
          <div className={project?.vid1 ? "container" : "none"}>
            <video src={project?.vid1} autoPlay loop playsInline muted alt="ff" />
          </div>
        </div>
        <img className="firstimg" src={project?.img17} alt="" />
        <div className={project?.lastvid ? "vidround" : "none"}>
          <video
            src={project?.lastvid}
            autoPlay
            loop
            muted
            className="firstimg"
          />
        </div>
      </div>
      <Footer inviews={inviews} ref={newref} />
    </div>
  );
}

// export const projectLoader = async ({params}) => {
//     const { id } = params
//  const res = await fetch(`http://localhost:8000/projects/${id}`)
//  return res.json()
// }
