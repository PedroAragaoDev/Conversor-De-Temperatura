    
     function converterTemperatura(valor, origem, destino){
                
            let valorEmCelsius;    
        
            if (origem === "Celsius"){
                valorEmCelsius = valor
            }

            if(origem === "Fahrenheit"){
                valorEmCelsius = (valor - 32) * 5/9;
            }

            if(origem === "Kelvin"){
                valorEmCelsius = valor - 273.15
            }

            let valorFinal;

            if(destino === "Celsius"){
                valorFinal = valorEmCelsius
            }

            if (destino === "Fahrenheit") {
                valorFinal = (valorEmCelsius * 9/5) + 32;
            }

            if(destino === "Kelvin"){
                valorFinal = valorEmCelsius + 273.15;
            }

            return valorFinal;
        }
           function atualizarConversao() {
             const valor = Number(document.querySelector("#temperaturaInicial").value);
             const origem = document.querySelector("#temperaturaOrigem").value;
             const destino = document.querySelector("#temperaturaFinal").value;
             const resultado = document.querySelector("#temperaturaConvertida");
            
                if (document.querySelector("#temperaturaInicial").value === "") {
                    resultado.value = "";
                    return;}
                            

    resultado.value = converterTemperatura(valor, origem, destino);
}

document.querySelector("#temperaturaInicial").addEventListener('input', atualizarConversao);
document.querySelector("#temperaturaOrigem").addEventListener('change', atualizarConversao);
document.querySelector("#temperaturaFinal").addEventListener('change', atualizarConversao);

