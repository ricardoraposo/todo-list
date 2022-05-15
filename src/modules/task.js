export default class Task {
  constructor(title, dueDate = none) {
    this.title = title
    this.dueDate = dueDate
  }

  getTitle() {
    return this.title
  }
  setTitle(title) {
    this.title = title
  }

  getDate() {
    return this.dueDate
  }
  setDate(dueDate) {
    this.date = dueDate
  }
  getDateUSFormat() {
    const day = this.dueDate.split("/")[0]
    const month = this.dueDate.split("/")[1]
    const year = this.dueDate.split("/")[2]
    return `${month}/${day}/${year}`
  }
}

