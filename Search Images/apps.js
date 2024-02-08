const form=document.querySelector("#form")
const search_input=document.querySelector("#search_input")
const button_wrapper=document.querySelector(".button-wrapper")
const search_button=document.querySelector("#search_btn")
const clear_button=document.querySelector("#clear_btn")
const images_wrapper=document.querySelector(".images-wrapper")

runEvents()

function runEvents()
{
    form.addEventListener("submit",search)
    clear_button.addEventListener("click",clear)
}
function search(e)
{
    e.preventDefault()
    const text=search_input.value.trim()
    images_wrapper.innerHTML=""
    fetch(`https://api.unsplash.com/search/photos?query=${text}`,
    {
        method : "GET",
        headers:{
            Authorization: "Client-ID S9ki3L62ECbdZq7mqNyYfFUGFYcsTX-ErUZfYOwA-WY"
        }
    })
    .then(responce=>responce.json())
    .then(data=>{
        Array.from(data.results).forEach(img=>addImgUI(img.urls.small))
    })
}
function addImgUI(url)
{
    const div=document.createElement("div")
    div.className="card"

    const img=document.createElement("img")
    img.src=url
    img.width="400"
    img.height="400"

    div.append(img)
    images_wrapper.append(div)
} 
function clear(e)
{
    e.preventDefault()
    search_input.value=""
    images_wrapper.innerHTML=""
}