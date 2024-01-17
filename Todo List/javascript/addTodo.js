const add_button=document.querySelector("#add_todo");
const add_text=document.querySelector("#add_text");
let index=0;
add_button.addEventListener("click",event=>
{
    let val=add_text.value;
    localStorage.setItem(index++,val);
    console.log(localStorage.getItem());//okay
})

