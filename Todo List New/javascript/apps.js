const firstCardBody=document.querySelectorAll(".card-body")[0];//hocam çok önemli bir şety söylicem bay zamanımı alıp delieten bir bug
const secondCardBody=document.querySelectorAll(".card-body")[1];//! querySelector sadece id seçer eğer clawsss yada başka bşir seçme metodu kullancxaksan Aşll eklemelisn!!!
const add_form=document.querySelector("#add_form");
const todoList=document.querySelector("#todo_list");
const clearTodo=document.querySelector("#clear_button");


let todos=[];

runEvents();


function runEvents()
{
    add_form.addEventListener("submit",addTodo);//hocam burada direkt parentez koymaman onemli eğer direkt parentez koyarsan event geçekleşmese dahi function çalışır
    document.addEventListener("DOMContentLoaded",page_load);
    secondCardBody.addEventListener("click",removeUI);
    clearTodo.addEventListener("click",clear_todo);
    
}

function page_load()
{
    check_todo();
    todos.forEach(function(item,itr)
    {
        addTodoUI(item);
    });
}

function check_todo()
{
    if(localStorage.getItem("todos")===null) //localStorage.getItem("sth")= string
         todos=[];
    else
        todos=localStorage.getItem("todos").split(",");
    console.log("try",typeof todos);
}

function addTodo() 
{
    let text=document.querySelector("#add_input").value.trim();
    if(text==null || text=="")
        show_alert("warning","alanı bos bırakmayınız!");
    else
    {
        addTodoUI(text);
        addStorage(text);
        show_alert("success","todo eklendi");
        document.querySelector("#add_input").value="";
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
    i.className="fa fa-remove";//yahu bu fa fa-remove ne
    //neden svg faln çarpı eklemeek için img kullanmadı?
    //hocam teknoloji gelişti. bu eklediğin class çarpıyı endisi oluşturuyor yaa
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
}

function addStorage(text)
{
    todos.push(text);
    localStorage.setItem("todos",todos);
}

function removeUI(e)
{
    if(e.target.className=="fa fa-remove")
    {
        const deleteTodo=e.target.parentElement.parentElement;
        deleteTodo.remove();
        removeStorage(deleteTodo);
        show_alert("success","todo deleted")
    }
}

function removeStorage(deleteTodo)
{
    todos.forEach(function(item,i)
    {
        if(item===deleteTodo.textContent)
            todos.splice(i,1);
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function clear_todo()
{   
    let todo_list=document.querySelectorAll(".list-group-item");
    todo_list.forEach(function(item,itr)
    {
        removeStorage(item.textContent);
        item.remove();
    })
    todos=[];
    localStorage.setItem("todos",JSON.stringify(todos));
    show_alert("success","todos cleaned");
}

function show_alert(type,message)//todo lets look at here later
{
    const div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2000);
}
