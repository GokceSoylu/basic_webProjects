const add_button=document.querySelector("#add_todo");
const add_text=document.querySelector("#add_text");
const arr_todo=[];
let val;
let index=0;

//arraya eklemeli alırkende arraydan almalıyı
add_text.addEventListener("keyup",event=>
{
    val=event.target.value;
})
add_button.addEventListener("click",event=>
{
    localStorage.setItem(index++,val);
    arr_todo.push(val);
})