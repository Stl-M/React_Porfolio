import {  Outlet } from "react-router-dom"
import '../Pages/Resume/Resume.css';

export default function ResumeLayout() {
  return (
    <div className="resume-layout">
  
        <Outlet />
    </div>

  )
}
