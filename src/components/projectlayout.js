import { Link, Outlet } from "react-router-dom";

export default function Productlayout(){
    return(
        <div>
            <div className="close">
              <Link to="/"> <i className="material-icons closebutton" style={{fontSize:"20px"}}>close</i></Link>
            </div>
            <Outlet />
        </div>
    )
}