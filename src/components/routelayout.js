import { NavLink, Outlet } from "react-router-dom";

export default function RouteLayout(){
    return(
        <div>
            <header className="header">
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="profile" >Profile</NavLink>
                    <NavLink to="contact" >Contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}