(async () => {
    try {
        const data = await fetch("https://rest.coinapi.io/v1/exchanges", {
            headers: {
              "X-CoinAPI-Key": "",
            },
          });
        let con = 0
        const response = await data.json()
        response.every(element => {
            if (con > 15){
                return false
            }
            con += 1
            console.log(element.name, element.volume_1hrs_usd, element.volume_1day_usd)
            return true 
        });
    } catch (error) {
        console.log(error)
    }
    
    //exchanges.then(data => data.json()).then(data => console.log(data))
})()
