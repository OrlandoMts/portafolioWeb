import React from "react";
import './App.css';
import { Navbar } from './components/Navbar';
import { Presentation } from "./components/Presentation";
import { Studies } from "./components/Studies";
import { ProyectsList } from "./components/ProyectsList";
import { Project } from "./components/Project";
import { projects } from "./utils/getProjects"

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Presentation />
      <Studies />
      <ProyectsList>
        {projects.map(project => (
          <Project 
          key={project.title}
          img={project.img}
          title={project.title}
          desc={project.desc}
          link={project.link}
          />
        ))}
      </ProyectsList>
    </React.Fragment>
  );
}

export default App;
