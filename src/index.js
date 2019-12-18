document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")

  const taskInput = document.querySelector("#new-task-description")


  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskList = document.querySelector('#tasks')
    const taskItem = document.createElement('li')
    taskItem.innerText = taskInput.value

    const priorityLevel = document.querySelector("#priorityLevel")

    console.log(priorityLevel.value);

    if (priorityLevel.value === "red") {
      taskItem.className = "red"
    } else if (priorityLevel.value === "yellow"){
      taskItem.className = "yellow"
    } else if (priorityLevel.value === "green"){
      taskItem.className = "green"
    }

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    taskItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", (e) => {
      const parent = e.target.parentNode
      parent.remove()
    })


    taskList.appendChild(taskItem)
    taskForm.reset()

  })

})
