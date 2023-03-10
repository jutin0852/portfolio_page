import { Link } from "react-router-dom";

export default function ErrorPage(){
    return(
        <div>
            <h2>page not found</h2>
            <p>Go to <Link to="/">Home</Link> </p>

        </div>
    )
}