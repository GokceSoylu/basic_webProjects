//elementleri seçelim
const todo_add=document.querySelector("add_button");
const todo_text=document.querySelector("#todo_add");
const todo_ul=document.querySelector("#todo_ul");
const card_body2=document.querySelectorAll(".card-body")[1];
const card_body1=document.querySelectorAll(".card-body")[0];
const clear_button=document.querySelector("#clear_button");
const search_todo=document.querySelectorAll("#search_todo");

let todos=[];

runEvents();

runEvents()
{
    todo_add.addEventListener("submit",addTodo);
    card_body2.addEventListener("click",deleteTodo);
    clear_button.addEventListener("click",clearAllTodos);
    search_todo.addEventListener("keyup",searchTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
}

//Addind todo method
function addTodo()
{
    const text=todo_text.value.trim();
    addTodoUI(text);
    addTodoStorage(text);
    showAlert("success","todo added");
    todo_text.value="";
}

function addTodoUI(text)
{
    li=document.createElement("li");
    li.className="list-group-item";
    
    a=document.createElement("a");
    a.href="#";

    i=document.createElement("i");
    i.className="fa fa-remove";
    i.textContent=text;

    a.appendChild(i);
    li.appendChild(a);
    todo_ul.appendChild(li);
}

function addTodoStorage(text)
{
    checkStorage();
    todos.push(text);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkStorage()
{
    if(todos===null)
        todos=[];
    else
    {
        todos=JSON.parse(localStorage.getItem("todos"),",");
    }
}

function showAlert(type,message)
{
    div=createElement("div");
    div.className=`alert alert-${type}`;
    card_body1.appendChild(div);
    setTimeout(function()
    {
        div.remove();
    },1000);
}

function deleteTodo(e)
{
    if(e.target.className==="fa fa-remove")
    {
        const delet=e.target.parent.parent;
        delet.remove();
        deleteFromStoragge(delet.textContent);
        showAlert("success","todo deleted succesfully");
    }
}

function deleteFromStoragge(text)
{
    todos.forEach(function(item,itr)
    {
        if(item===text)
        {
            todos.splice(item,1);
            localStorage.setItem("todos",JSON.stringify(todos));
        }
    })
}

function clearAllTodos()
{
    const list_todo=document.querySelector("#todo_ul");
    list_todo.forEach(function(item,itr)
    {
        item.remove();
        deleteFromStoragge(item.textContent);
    })

}

function pageLoaded()
{
    checkStorage();
    todos.forEach(function(item,itr)
    {
        addTodoUI(item);
    });
}

function searchTodo()
{
    const text=search_todo.value.ToLowerCase().trim();
    checkStorage();
    todos.forEach(function(item,itr)
    {
        if(item.textContent.ToLowerCase().includes(text))
        {
            item.setAttribute("style","block");
        }
        else
            item.setAttribute("style","none !important");
    });
    
}
