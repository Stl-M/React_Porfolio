import { NavLink, Outlet } from "react-router-dom";
import './Projects.css';


export default function ProjectsLayout() {
  return (
    <div className="projects-layout">
        <h2>Portfolio Projects</h2>
        <p>I am going to showcase a few projects here that touch on different areas of Programming. </p>
       

        <nav className="navbar">
            <NavLink to="erates">Exchange Rates</NavLink>
            <NavLink to="shoppinglist">Shopping List</NavLink>
            <NavLink to="tictactoe">Tic Tac Toe</NavLink>
            
        </nav>


        <Outlet />
    </div>

  )
}
