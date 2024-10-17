import { forwardRef } from "react";

const Footer = forwardRef(({ inviews, contact, scrollup }, ref) => {
  const handleScrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div ref={ref} className={contact ? "add together" : "together"}>
        <p className={inviews ? " fadeup delay" : null}>Let's work together</p>
        <br />
        <p className={inviews ? " fadeup delay1" : null}>
          {" "}
          <a href="https://www.linkedin.com/in/jutin-dikonu/">Get in touch</a>
        </p>
      </div>
      {scrollup && (
        <img
          className="scrollup"
          src="https://img.icons8.com/ios-filled/40/null/circled-up-2.png"
          alt="up"
          onClick={handleScrollClick}
        />
      )}
      <footer>
        <div>© Jutin 2024</div>

        <ul>
          <li>
            <a href="https:/www.twitter.com/jutin001">Twitter</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/jutin-dikonu/">LinkedIn</a>
          </li>
        </ul>
      </footer>
    </div>
  );
});
export default Footer;
