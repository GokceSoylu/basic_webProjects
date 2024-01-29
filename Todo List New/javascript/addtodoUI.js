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