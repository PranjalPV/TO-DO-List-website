// script.js
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
  