const add_button=document.querySelector("#add_todo");
const todos=[];
add_button.addEventListener("click",event=>
{
    console.log(txt_todo);
    todos.push(txt_todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    new_li();//yeni li elemanı oluştuem ve buna yeni toso yu ekleme
    
})