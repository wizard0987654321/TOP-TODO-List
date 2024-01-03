import removeElements from "./clearDiv.js"
import displayItem from "./newItem.js"

export default function addProject(project, notes, projects) {
    
    const projectList = document.getElementById("projects");
    const newProject = document.createElement("li");
    newProject.classList.add("project");
    newProject.textContent = project;
    projectList.appendChild(newProject);
    newProject.onclick = function() {
        openProject(newProject, notes, projects);  
    }

    console.log(project);
}

function openProject(project, notes, allProjects) {
    removeElements(notes);
    let currentProject = project.textContent;
    for (const note of allProjects[currentProject]) {
        displayItem(note);
    }

    console.log(allProjects[currentProject]);
    console.log(project);
}