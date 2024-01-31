const firstCardBody=document.querySelectorAll(".card-body")[0];//hocam çok önemli bir şety söylicem bay zamanımı alıp delieten bir bug
const secondCardBody=document.querySelectorAll(".card-body")[1];//! querySelector sadece id seçer eğer clawsss yada başka bşir seçme metodu kullancxaksan Aşll eklemelisn!!!
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
        show_alert("warning","alanı bos bırakmayınız!");
    else
    {
        console.log("in else");
        addTodoUI(text);
        console.log("after addtodoUI fun");
        addStorage(text);
        console.log("after addstorage fun");
        alert("success","todo eklendi");
        console.log("after showalert fun");
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
        console.log("this=> ",e.target);
    }
}

function show_alert(type,massage)//todo lets look at here later
{
    const alert=document.createElement("div");
    div.className='alert alert-${type}';
    div.textContent=message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2000);
}
