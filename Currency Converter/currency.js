class Currency{
    constructor()
    {
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JCLa7HUtVkFGfPnCqEs2ALeqZEenRF1zTDKAfnUC&base_currency="
    }
    async exchange(amount, firstValue, secondValue)
    {
        const data= await (await fetch(`${this.url}${firstValue}`)).json()
        const result=data.data[secondValue]*amount
        return result
    }
}