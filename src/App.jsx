import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleAddStartProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...projectsState.projects, newProject],
      };
    });
  };

  console.log(projectsState);

  let content;
  if (projectsState.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAdd={handleAddStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAdd={handleAddStartProject} />
      {content}
    </main>
  );
}

export default App;
