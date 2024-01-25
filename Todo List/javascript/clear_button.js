const clear_button=document.querySelector("#clear_todo");

clear_button.addEventListener("click",event=>
{
    const todo_list_all=document.querySelectorAll(".list-group-item");
    todo_list_all.forEach(function(data,i) {
        console.log(typeof data);
        data.remove();  
    });
    localStorage.clear();
    todos=[];
    localStorage.setItem("todos",JSON.stringify(todos)); 
})