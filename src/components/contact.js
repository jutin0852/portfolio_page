import Footer from "../footer";
import { useRef } from "react";
import { useIntersectionObserver } from "./intercept";


export default function Contact(){
    const newref = useRef(null);

    const inviews = useIntersectionObserver(newref);
    return(
        <div>
            <Footer contact={true} inviews={inviews} ref={newref}/>
        </div>
    )
}