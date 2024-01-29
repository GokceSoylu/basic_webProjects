const firstCardBody=document.querySelector(".card-body")[0];
const secondCardBody=document.querySelector(".card-body")[1];
const add_form=document.querySelector("#add_form");
const todoList=document.querySelector("#todo_list");
let todos=[];

runEvents();


function runEvents()
{
    add_form.addEventListener("submit",addTodo);//hocam burada direkt parentez koymaman onemli eğer direkt parentez koyarsan event geçekleşmese dahi function çalışır
    secondCardBody.addEventListener("click",removeUI);
}

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
    check_todos();
    todos.push(text);
    localStorage.setItem("todos",todos);
}

function check_todos()
{
    if(todos==null)
        todos=[];
    else
        todos=JSON.parse(localStorage.getItem("todos"));
}

function removeUI(e)
{
    if(e.target.className=="fa fa-remove")
    {
        console.log("this=> ",e.target);
    }
}

function show_alert(type,massage)
{
    const alert=document.createElement("div");
    div.className='alert alert-${type}';
    div.textContent=message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2000);
}
