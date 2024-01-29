function addTodo()
{
    const text=document.querySelector("#add_input").value.trim();

    if(text==null || text=="")
        show_alert("warning","alanı buş bırakmayınız!");
    else
    {
        addTodoUI(text);
        addStorage(text);
        alert("success","todo eklendi");
    }

}