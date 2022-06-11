const form = document.querySelector("#add-todo-form");
const todoList = document.querySelector("#todo-output");

const todoInput = document.querySelector("#input-todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const updateList = document.createElement("div");
  updateList.innerText = todoInput.value;
  updateList.classList.add("todo-item");
  updateList.style.background = "aqua";
  updateList.style.border = "1px solid black";
  updateList.style.marginBottom = "3px";

  todoList.appendChild(updateList);

  todoInput.value = "";

  updateList.addEventListener("click", function () {
    updateList.remove();
  });
});
