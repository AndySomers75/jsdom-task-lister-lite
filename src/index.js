document.addEventListener("DOMContentLoaded", () => {
  // your code here

const newtaskform = document.getElementById("create-task-form");
const newtaskdescription = document.getElementById("new-task-description");

const taskUl = document.getElementById("tasks");

newtaskform.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskLi = document.createElement('Li');
  const deletebutton = document.createElement('button');
  const updatebutton = document.createElement('button');
  const spantext = document.createElement('span');

  spantext.innerHTML = newtaskdescription.value;
  taskUl.append(taskLi);
  deletebutton.innerHTML = 'X';
  updatebutton.innerHTML = 'update';

  taskLi.append(spantext);
  taskLi.append(deletebutton);
  taskLi.accessKey(updatebutton);

  updatebutton.addEventListener(`click`, (event) => {
    spantext.innerHTML = newtaskdescription.value;
    e.target.reset();
    })
    deletebutton.addEventListener(`click`, (event) =>{
      taskLi.remove();
    })
    e.target.reset();
  });
});
