export default function addUIBox() {
  const body = document.body
  const overlay = document.createElement("div")
  overlay.classList.add("overlay")
  overlay.classList.add("hidden")
  body.appendChild(overlay)

  const addTaskBox = document.createElement("div")
  addTaskBox.classList.add("add-task-form")
  addTaskBox.innerHTML = `
      <form id="form" class="hidden" action="#">
        <div>
          <label for="title-input">Title</label>
          <input type="text" id="title-input">
        </div>
        <div>
          <label for="due-date-input">Date</label>
          <input type="date" id="due-date-input">
        </div>
        <button id="add-task-button" type="reset">Add todo</button>
      </form>

`
  addTaskBox.classList.add("hidden")
  body.appendChild(addTaskBox)
}

