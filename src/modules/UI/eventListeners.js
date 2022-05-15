export default function toggleHidden() {
  const overlay = document.querySelector(".overlay")
  const taskForm = document.querySelector(".add-task-form")
  const form = document.getElementById("form")
  overlay.classList.toggle("hidden")
  taskForm.classList.toggle("hidden")
  form.classList.toggle("hidden")
}

