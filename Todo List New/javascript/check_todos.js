function check_todos()
{
    if(todos==null)
        todos=[];
    else
        todos=JSON.parse(localStorage.getItem("todos"));
}