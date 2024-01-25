const delete_button=document.querySelector("#todo_ul");

delete_button.addEventListener("click",event=>
{
    if(event.target.className==="fa fa-remove")
    {
        const d_todo=event.target.parentElement;
        d_todo.remove();
        removefromStorage(d_todo.textContent);
        
    }
})