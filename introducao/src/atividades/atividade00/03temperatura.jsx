const Temperatura = () => {
    const kelvin = (k) => {
        let c = k * 9 //calculo exemplo
        let f = k * 8
        return {c, f}
    }

    return(
        <div>
            <h1>Kelvin para Celsius: {kelvin(100).c}</h1>
            <h1>Kelvin para Celsius: {kelvin(100).f}</h1>

        </div>
    )
        
} 