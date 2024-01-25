const the_list=document.querySelector("#todo_ul");

function new_li()
{
    const txt_todo=value_addTxt.value.trim();
    const li=document.createElement("li");
    const h3=document.createElement("h3");
    const img=document.createElement("img");
    
    h3.innerHTML=txt_todo;
    img.src="/Users/necmiyesoyla/basic_webProjects/Todo List/svgs/cross.svg";
    
    li.appendChild(img);
    li.appendChild(h3);
    the_list.appendChild(li);
}//😂😂 amk böyle hatanıııınn 
// eğer belli bilinen bir tag koyacaksan tırnak içinde yazarız ama bizim oluşturduğumuz
//bir değişkeni atayacakasak o zaman tırnak kullanılmaz 


