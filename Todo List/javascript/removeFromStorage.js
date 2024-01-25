function removefromStorage(delete_todo)
{
   todos.forEach(function(data,i)
   {
    if(delete_todo===data)
        todos.splice(i,1);
   })
   localStorage.setItem("todos",JSON.stringify(todos));
}