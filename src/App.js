import React from "react";
import './App.css';
import { Navbar } from './components/Navbar';
import { Presentation } from "./components/Presentation";
import { Studies } from "./components/Studies";
import { ProyectsList } from "./components/ProyectsList";
import { Project } from "./components/Project";
import { projects } from "./utils/getProjects";
import { Modal } from "./components/Modal";
import { Form } from "./components/Form";
import { PortafolioContext } from "./components/PortafolioContext";
import { Certifications } from "./components/Certifications";
import { SocialMedia } from "./components/SocialMedia";

function App() {

  // const {openModal, setOpenModal} = React.useContext(PortafolioContext);

  const [openModal, setOpenModal] = React.useState(false);
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <React.Fragment>
      
        <PortafolioContext.Provider value={{
            openModal,
            setOpenModal,
            name,
            setName,
            mail,
            setMail,
            message,
            setMessage,
        }}>
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
                sitio={project.sitio}
                repo={project.repo}
                />
              ))}
            </ProyectsList>

            {!!openModal && (
              <Modal>
                <Form />
              </Modal>
            )}

            <Certifications />
            <SocialMedia />

        </PortafolioContext.Provider>
      
    </React.Fragment>
  );
}

export default App;
