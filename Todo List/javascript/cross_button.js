const delete_button=document.querySelector("#todo_ul");

delete_button.addEventListener("click",delete_todo);
function delete_todo(e)
{
    if(e.target.className==="fa fa-remove")
    {
        const d_todo=e.target.parentElement;
        d_todo.remove();
        removefromStorage(d_todo.textContent);
        

    }
}