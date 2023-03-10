import { useRef } from "react";
import Footer from "../footer";
import Homevids from "./homevids";
import Homepics from "./images";
import { useIntersectionObserver } from "./intercept";
import { Link } from "react-router-dom";
import homepics from "./db.json";

export default function Home() {
  const myref = useRef(null);
  const newref = useRef(null);

  const inview = useIntersectionObserver(myref);
  const inviews = useIntersectionObserver(newref);

  //loader function
  //    const homepics = useLoaderData()

  return (
    <div className="home">
      <div className="all" ref={myref}>
        <div className="head">
          <header className={inview ? "fadeup" : null}>
            A brand and product designer working with clients globally
          </header>
          <div className={inview ? "Expertise fadeup delay" : "Expertise"}>
            <span>Expertise</span>
            <span>Branding</span>
            <span>Product</span>
            <span>Design Systems</span>
          </div>
        </div>

        <div className="but">
          <button className={inview ? "fadeup delay2" : null}>
            {" "}
            <span>* </span> Shop
          </button>
        </div>

        <div className={inview ? "homepics fadeup delay1" : "homepics"}>
          {homepics.map((homepics) => (
            <div key={homepics.id}>
              {homepics.coming ? (
                <Homepics
                  mysrc={homepics.mainsrc}
                  name={homepics.name}
                  coming={homepics.coming}
                />
              ) : (
                <Link to={`projects/${homepics.id}`}>
                  {homepics.mainsrcvid ? (
                    <Homevids
                      mysrc={homepics.mainsrcvid}
                      name={homepics.name}
                    />
                  ) : (
                    <Homepics mysrc={homepics.mainsrc} name={homepics.name} />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer inviews={inviews} ref={newref} />
    </div>
  );
}

// export const homepicsLoader = async () => {
//     const res = await fetch("http://localhost:8000/projects");
//     return res.json();
// }
