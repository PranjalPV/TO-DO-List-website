// script.js
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const dialogBox = document.getElementById("dialogBox");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogContent = document.getElementById("dialogContent");
  const content = document.querySelector(".content");
  const container = document.querySelector(".container");

  // Submenu toggle logic
  document.querySelectorAll(".sidebar > ul > li > .nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const subMenu = item.nextElementSibling;
      if (subMenu) {
        subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
      }
    });
  });

  // Update dialog box on item click
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      console.log(`Clicked on: ${target}`);
      if(target  === "home")
      {
        content.style.display = "none";
        container.style.display = "block";
      }
      // else if(target)
      // {
      //     console.log(target);
      //     content.style.display = "block";
      //     container.style.display = "none";
      //     dialogTitle.textContent = "Project 1";
      //     dialogContent.textContent = "Details about Project 1...";
      // }
      // switch (target) {
      //   case "home":;
      //     content.style.display = "none";
      //     container.style.display = "block";
      //     break;
        // case "project1":;
        //   content.style.display = "block";
        //   container.style.display = "none";
        //   dialogTitle.textContent = "Project 1";
        //   dialogContent.textContent = "Details about Project 1...";
        //   break;
        // case "project2":
        //   content.style.display = "block";
        //   container.style.display = "none";
        //   dialogTitle.textContent = "Project 2";
        //   dialogContent.textContent = "Details about Project 2...";
        //   break;
        // case "team1":
        //   content.style.display = "block";
        //   container.style.display = "none";
        //   dialogTitle.textContent = "Team 1";
        //   dialogContent.textContent = "Details about Team 1...";
        //   break;
        // case "team2":
        //   content.style.display = "block";
        //   container.style.display = "none";
        //   dialogTitle.textContent = "Team 2";
        //   dialogContent.textContent = "Details about Team 2...";
        //   break;
        // default:
          // dialogTitle.textContent = "Welcome";
          // dialogContent.textContent = "Select a project or team to see details here.";
      // }
    });
  });
});

// //////////////////////////////// add new projects and teams //////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  // Select the "Add Projects" button and the sub-menu under "My Projects"
  const addProjectButton = document.querySelector("button");
  const projectsSubMenu = document.querySelector(".sub-menu");

  // Add click event listener to the "Add Projects" button
  addProjectButton.addEventListener("click", () => {
    // Prompt the user to enter the project name
    const projectName = prompt("Enter the new project name:");

    // Validate the input
    if (projectName && projectName.trim() !== "") {
      // Create a new <li> element
      const newProjectItem = document.createElement("li");

      // Create a <span> element for the new project
      const newProjectSpan = document.createElement("span");
      newProjectSpan.classList.add("nav-item"); // Add class for styling
      newProjectSpan.dataset.target = `project-${projectName.toLowerCase().replace(/\s+/g, "-")}`; // Set data-target dynamically
      console.log(newProjectSpan.dataset.target);
      newProjectSpan.textContent = projectName; // Set the text content

       // Attach event listener to the new project item
      newProjectSpan.addEventListener("click", () => {
        const target = newProjectSpan.dataset.target;
        console.log(`Clicked on: ${target}`);
        const content = document.querySelector(".content");
        const container = document.querySelector(".container");
        content.style.display = "block";
        container.style.display = "none";
        dialogTitle.textContent = projectName; // Use the project name dynamically
        dialogContent.textContent = `Details about ${projectName}...`; // Use the project name dynamically
    });

      // Append the <span> to the <li>
      newProjectItem.appendChild(newProjectSpan);

      // Append the new <li> to the projects sub-menu
      projectsSubMenu.insertBefore(newProjectItem, addProjectButton);

      // Log success
      console.log(`Project "${projectName}" added successfully!`);
    } else {
      // Log if the input is invalid
      console.log("Project name cannot be empty.");
    }
  });
});


// -------------------------------daily tasks----------------------------------------//

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    // Add Task
    addTaskButton.addEventListener("click", () => {
      const taskValue = taskInput.value.trim();
      if (taskValue === "") {
        alert("Please enter a task!");
        return;
      }
  
      const li = document.createElement("li");
      li.textContent = taskValue;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      taskInput.value = ""; // Clear the input
    });
  });
  