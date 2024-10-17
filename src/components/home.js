import { useRef } from "react";
import Footer from "../footer";
import Homepics from "./images";
import { useIntersectionObserver } from "./intercept";
import { Link } from "react-router-dom";
import homepics from "./db.json";
import { useGoUp } from "./go-up.js";

export default function Home() {
  const myref = useRef(null);
  const newref = useRef(null);

  const inview = useIntersectionObserver(myref);
  const inviews = useIntersectionObserver(newref);

  const scrollup = useGoUp();
  // useEffect(() => {
  //   const handleLoad = () => {
  //     alert('welcome')
  //   }
  //   window.addEventListener('pageshow', handleLoad);
  //   return () => window.removeEventListener('pageshow', handleLoad);

  // })

  return (
    <div className="home">
      <div className="all" ref={myref}>
        <div className="head">
          <header className={inview ? "fadeup" : null}>
            Front-End Web Developer
          </header>
          {/* <div className={inview ? "Expertise fadeup delay" : "Expertise"}>
            <span>Expertise</span>
            <span>Branding</span>
            <span>Product</span>
            <span>Design Systems</span>
          </div> */}
        </div>

        
        <div className={inview ? "homepics fadeup delay1" : "homepics"}>
          {homepics.map((homepics) => (
            <div key={homepics.id}>
              <Link to={homepics.href}>
                <Homepics mysrc={homepics.mainsrc} name={homepics.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer inviews={inviews} ref={newref} scrollup={scrollup} />
    </div>
  );
}

// export const homepicsLoader = async () => {
//     const res = await fetch("http://localhost:8000/projects");
//     return res.json();
// }
