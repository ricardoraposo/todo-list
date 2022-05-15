import addTask from "./modules/addTask"
import addUIBox from "./modules/UI/addBoxCreator"
import toggleHidden from "./modules/UI/eventListeners"

const taskList = []

// UI functions
addUIBox()

// Variables

const openAddTaskButton = document.getElementById("open-add-task")
const overlay = document.querySelector(".overlay")
const addTaskButton = document.getElementById("add-task-button")
const titleInput = document.getElementById("title-input")
const dueDateInput = document.getElementById("due-date-input")

// Event Listeners
openAddTaskButton.addEventListener("click", toggleHidden)
overlay.addEventListener("click", toggleHidden)

addTaskButton.addEventListener("click", () => {
  taskList.push(addTask(titleInput, dueDateInput))
  console.log(taskList)
})
