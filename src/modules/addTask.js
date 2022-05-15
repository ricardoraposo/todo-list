import Task from "./task"

function getDateFormat(dueDate) {
  const year = dueDate.split("-")[0]
  const month = dueDate.split("-")[1]
  const day = dueDate.split("-")[2]
  return `${day}/${month}/${year}`
}

export default function addTaskReader(titleInput, dueDateInput) {
  const title = titleInput.value
  const dueDate = getDateFormat(dueDateInput.value)
  return new Task(title, dueDate)
}
