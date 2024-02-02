//elementleri seçelim
const todo_add=document.querySelector("#todo_in");//?
const todo_text=document.querySelector("#todo_add");
const todo_ul=document.querySelector("#todo_ul");
const card_body2=document.querySelectorAll(".card-body")[1];
const card_body1=document.querySelectorAll(".card-body")[0];
const clear_button=document.querySelector("#clear_button");
const search_todo=document.querySelector("#search_todo");

let todos=[];

runEvents();

function runEvents()
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
    let text=todo_text.value.trim();
    if(text==null || text=="")
        showAlert("warning","please enter todo");
    else
    {
        addTodoUI(text);
        addTodoStorage(text);
        showAlert("success","todo added");
        todo_text.value="";
    }
}

function addTodoUI(text)
{
    const li=document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent=text;

    const a=document.createElement("a");
    a.href="#";
    a.className="delete item";

    const i=document.createElement("i");
    i.className="fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todo_ul.appendChild(li);
}

function addTodoStorage(text)
{
    todos.push(text);
    localStorage.setItem("todos",todos);
}

function checkStorage()
{
    if(localStorage.getItem("todos")===null)
        todos=[];
    else
    {
        todos=(localStorage.getItem("todos")).split(",");
    }
}

function showAlert(type,message)
{
    div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;
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
        const delet=e.target.parentElement.parentElement;
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
            todos.splice(item,1);
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function clearAllTodos()
{
    const list_todo=document.querySelectorAll(".list-group-item");
    list_todo.forEach(function(item,itr)
    {   
        deleteFromStoragge(item.textContent);
        item.remove();
    });
    todos=[];
    localStorage.setItem("todos",JSON.stringify(todos));
    showAlert("success","all todos are cleaned");

}

function pageLoaded()
{
    checkStorage();
    todos.forEach(function(item,itr)
    {
        if(item!=[])
            addTodoUI(item);
    });
}

function searchTodo()
{
    const text=search_todo.value.toLowerCase().trim();//anlılk değer
    const allTodo=document.querySelectorAll(".list-group-item");//all todo
    checkStorage();
    allTodo.forEach(function(item,itr)
    {
        if(item.textContent.toLowerCase().includes(text))
        {
            item.setAttribute("style","display:block");
        }
        else
            item.setAttribute("style","display:none !important");
    });
    
}
