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
      switch (target) {
        case "home":;
          content.style.display = "none";
          container.style.display = "block";
          break;
        case "project1":;
          content.style.display = "block";
          container.style.display = "none";
          dialogTitle.textContent = "Project 1";
          dialogContent.textContent = "Details about Project 1...";
          break;
        case "project2":
          content.style.display = "block";
          container.style.display = "none";
          dialogTitle.textContent = "Project 2";
          dialogContent.textContent = "Details about Project 2...";
          break;
        case "team1":
          content.style.display = "block";
          container.style.display = "none";
          dialogTitle.textContent = "Team 1";
          dialogContent.textContent = "Details about Team 1...";
          break;
        case "team2":
          content.style.display = "block";
          container.style.display = "none";
          dialogTitle.textContent = "Team 2";
          dialogContent.textContent = "Details about Team 2...";
          break;
        default:
          // dialogTitle.textContent = "Welcome";
          // dialogContent.textContent = "Select a project or team to see details here.";
      }
    });
  });
});

// //////////////////////////////// add new projects and teams //////////////////////////////////


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
  