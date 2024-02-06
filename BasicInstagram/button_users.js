//!id ye ulaşıp daha somra id kullanarak hareket etmen gerekiyor
const userNames=document.querySelector("#userNames")
const hideUsersBtn=document.querySelector("#users_hide")
const button_users=document.querySelector("#users_btn")
const btn_data_show=document.querySelector("#show_data")
const datas=document.querySelector("#datas")

btn_data_show.addEventListener("click",(event)=>{

    event.preventDefault()
    console.log("hi")
    let user_id
    const user=document.querySelector("#user_txt").value.trim()
    const input_info=document.querySelector("#data_type").value.toLowerCase().trim()
    getData("users")
    .then((data)=>{
        data.forEach(the_user=>{
            console.log("in foreach")
            if(the_user.username===user)
                user_id=the_user.id
        })
        return getData(`${input_info}?userId=${user_id}`)
    })
    .then((data)=>{
        data.forEach(itr=>addLi(itr.body,datas))
    })
})
button_users.addEventListener("click",(event)=>{
    event.preventDefault()
    getData("users")
    .then((data)=>{
        data.forEach( user => addLi(user.username,userNames));
    })
})
hideUsersBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    deleteLi()
})
function addLi(txt,e)
{
    const li=document.createElement("li")
    li.textContent=txt
    li.className="list-group-item"
    e.appendChild(li)
    
}
function deleteLi()
{
    const usersLi=document.querySelectorAll(".list-group-item")
    usersLi.forEach(user =>user.remove())
}
function getData(key){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200)
                    resolve(JSON.parse(xhr.responseText))
            } catch (error) {
                 reject(error) 
            }
        })
        xhr.open("GET",prepareURL(key))
        xhr.send()
    })
}
function prepareURL(key)
{
    return `https://jsonplaceholder.typicode.com/${key}`
}
