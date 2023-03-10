import { forwardRef } from "react"

 const Footer = forwardRef(({inviews,contact},ref) => {
    return(
    <div>
        <div ref={ref} className={contact ? "add together": 'together'}>
            <p className={inviews ? (" fadeup delay"):(null)}>Let's work together</p><br/>
            <p className={inviews ? (" fadeup delay1"):(null)}> <a href="mailto:jutindikonu@icloud.com">Get in touch</a></p>
        </div>
    
        <footer >
        <div>© Jutin 2023</div>
        
        <ul>
            <li><a href="https:/www.twitter.com/jutin001">Twitter</a></li>
            <li>LinkedIn</li>
            <li> <a href="mailto:jutindikonu@icloud.com">Mail</a></li>
        </ul>
     </footer>
     </div>
    )
})
export default Footer