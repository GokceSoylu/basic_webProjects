let message=
`
    Welcome To Binnaz Market
    Do you Have Discount Card
`
let products=
[
    {
        productName:"milk",
        productPrice:15
    },
    {
        productName:"chocalate",
        productPrice:10
    },
    {
        productName:"tea",
        productPrice:70
    },
    {
        productName:"coffee",
        productPrice:100
    },
    {
        productName:"cake",
        productPrice:5
    }
]

let name_=prompt("enter your name please")
let surname=prompt("enter your surname please")
let result=confirm(message)
let discount=0
if(confirm("do you have additional discount"))
    discount=prompt("enter the additional discount please")
console.log("here")
const customer=new Customer(name_,surname,result,products)
console.log("here ftr")

alert(
    `
        ${customer.getName()} ${customer.getSurname()}
        amount : ${customer.calculater(discount)}
    `
)

