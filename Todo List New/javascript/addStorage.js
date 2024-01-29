function addStorage(text)
{
    check_todos();
    todos.push(text);
    localStorage.setItem("todos",todos);
}