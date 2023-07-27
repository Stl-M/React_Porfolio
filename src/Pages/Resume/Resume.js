import data from "./data";
import Content from "./content";
import { useState } from "react";
import './Resume.css'

export default function Resume() {
  const [resumes, setResumes] = useState(data)
  return (
    <main>
      <div className="resume">

        <div className="info">
          {resumes.map((resume) => {
            return <Content key={resume.id} {...resume} />
          })}
        </div>
      </div> 
    </main>
  )
}
