const amountInput=document.querySelector("#amount")
const first_select=document.querySelector("#first-select")
const second_select=document.querySelector("#second-select")
const coverterButton=document.querySelector("#converter-button")
const converButtons=document.querySelector("#convert-button")
const resultOutput=document.querySelector("#result")

runEvents()
const currency=new Currency()
function runEvents()
{
    amountInput.addEventListener("input",exchange)
    coverterButton.addEventListener("click",exchange)
    converButtons.addEventListener("click",exchangeButtons)
}
function exchange()
{
    const amount=Number(amountInput.value.trim())
    const firstSelectValue=first_select.options[first_select.selectedIndex].textContent
    const secondSelectValue=second_select.options[second_select.selectedIndex].textContent
    currency.exchange(amount,firstSelectValue,secondSelectValue)
    .then(result=>resultOutput.value=result.toFixed(2))
}
function exchangeButtons(e)
{
    e.preventDefault()
    const first=first_select.options[first_select.selectedIndex].textContent
    const second=second_select.options[second_select.selectedIndex].textContent
    first_select.options[first_select.selectedIndex].textContent=second
    second_select.options[second_select.selectedIndex].textContent=first
    exchange()
}