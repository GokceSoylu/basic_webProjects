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