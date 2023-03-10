import { useEffect,useState } from "react";

export function useIntersectionObserver(myref){

    const [inview , setInview] = useState(false);

    useEffect(() => {
        const mycurrent = myref.current;
        const observer = new IntersectionObserver((entries) =>{
            const [entry] = entries;
            if(entry.isIntersecting){
                setInview(true);
            }
        },{
            root:null,
            rootMargin:'0px',
            threshold:0
         })
         if(myref.current) observer.observe(myref.current);

         return () => {
            if(mycurrent) {observer.unobserve(mycurrent)} 
         }
    },[myref])
    return inview;
}