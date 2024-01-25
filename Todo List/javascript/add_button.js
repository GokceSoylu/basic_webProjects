const value_addTxt=document.querySelector("#add_text");
 //burada txt_todo değerinin tipi stirng. zaten bizim böyle aldığımız değişkenlerin tipi string olur 
//hmm ayrıca bunlar tek dosya altında olduğu için public gibi düşün dosyalar arası değilşkenler kullanılabilir 
const add_button=document.querySelector("#add_todo");

let todos=[];
add_button.addEventListener("click",event=>
{
    const txt_todo=value_addTxt.value.trim();//hocam neden içeride çalışıoda dılarıda çalışmıyo
    console.log(txt_todo);
    todos.push(txt_todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    new_li();//yeni li elemanı oluştuem ve buna yeni toso yu ekleme
    
})