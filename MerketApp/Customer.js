class Customer extends Market
{
    constructor(name,surname,haveCard,products)
    {
        super(name,surname,haveCard,products)
    }

    calculater(discount)
    {
        console.log("in calculater Customer class\ndiscount : ",discount)
        console.log("amount : ",super.calculater(discount))
        return super.calculater(discount)
    }
}