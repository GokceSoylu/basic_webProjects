//aldığım text değerini data iel kıyaslarım
const search_todo=document.querySelector("#search_todo");
search_todo.addEventListener("keyup",event=>
{
    const allTodo=document.querySelectorAll(".list-group-item");
    const text=event.target.value.toLowerCase().trim();
    allTodo.forEach( function(element) {
        if(element.textContent.toLowerCase().trim().includes(text))
            element.setAttribute("style","display:block");
        else
            element.setAttribute("style","display:none !important");
    });
})