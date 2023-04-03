const Lists = document.querySelectorAll(".child");
const addButton = document.querySelectorAll(".add_btn");

// dragTodoList()
const dragTodoList = (li) => {
  Lists.forEach((ul) => {
    ul.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    ul.addEventListener("drop", (e) => {
      if (li.classList.contains("hide")) {
        e.currentTarget.append(li);
      }
    });
  });
};

// event on each "Add button"
addButton.forEach((addBtn, i) => {
  addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.setAttribute('class', 'todo-list');
    li.setAttribute("draggable", true);
    li.setAttribute("contentEditable", true);

    li.addEventListener("dragstart", () => {
      setTimeout(()=> {
        li.classList.add("hide");
      },0)
    })
  
    li.addEventListener("dragend", () => li.classList.remove("hide"))
    li.addEventListener('mouseenter', () => li.classList.add('cursor-pointer'))
    li.addEventListener('click', () => li.classList.remove('cursor-pointer'))
    
    li.addEventListener('dblclick', () => {
      let isConfirm = confirm("delete this note?");
      if(isConfirm) li.remove();
    })

    // setTimeout(()=> {
    //   let text = li.innerText.trim();
    //   if(text.length === 0) li.remove();
    // },3000)

    // li.addEventListener('input', ()=> {
    //   setTimeout(()=> {
    //     if(li.innerText.trim().length === 0) li.remove();
    //   },5000)
    // })

    Lists[i].insertAdjacentElement("afterbegin",li);
 
    dragTodoList(li);
  })
})