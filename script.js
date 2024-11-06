document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Calculando o IMC
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        
        // Exibindo o resultado
        document.getElementById("resultado").style.display = "block";
        document.getElementById("imcValor").textContent = `Seu IMC é: ${imc.toFixed(2)}`;

        let categoria = "";

        // Determinando a categoria do IMC
        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            categoria = "Sobrepeso";
        } else if (imc >= 30 && imc < 39.9) {
            categoria = "Obesidade";
        } else {
            categoria = "Obesidade grave";
        }

        document.getElementById("categoria").textContent = `Categoria: ${categoria}`;
    } else {
        alert("Por favor, insira valores válidos para peso e altura.");
    }
});