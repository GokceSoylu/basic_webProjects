class Market
{
    constructor(name,surname,haveCard,products)
    {
        this.name=name
        this.surname=surname
        this.haveCard=haveCard
        this.products=products
    }
    calculater(discount)
    {
        let amount=0
        if(this.haveCard) 
            this.products.forEach(element =>amount+=element.productPrice*(0.8-(discount*0.01)));
        else 
            this.products.forEach(element=>amount+=element.productPrice)
        console.log("in market class amount : ",amount)
        return amount
    }
    getName()
    {
        return this.name
    }
    getSurname()
    {
        return this.surname
    }
}