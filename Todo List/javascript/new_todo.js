const add_todo_new=document.querySelector("#add_todo");
const todo_area=document.querySelector("#todo_ul");
let index_2=0;
add_todo_new.addEventListener("click",event=>
{
    
    todo_new=document.createElement("li");

    todo_h3=document.createElement("h3");
    let x=localStorage.getItem(index_2++);
    todo_h3.innerHTML=x;
    console.log("heyyo "+x);
    todo_img=document.createElement("img");
    todo_img.src="/Users/necmiyesoyla/basic_webProjects/Todo List/svgs/cross.svg";
    
    
    todo_new.appendChild(todo_h3);
    todo_new.appendChild(todo_img);
    todo_area.appendChild(todo_new);
})
