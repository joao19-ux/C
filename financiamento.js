
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário
    const form = document.querySelector("form");

    // Adiciona um evento de escuta para o botão de submissão
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtém os valores de entrada do formulário
        const valorVeiculo = parseFloat(document.getElementById("valor").value);
        const entrada = parseFloat(document.getElementById("entrada").value);
        const numeroParcelas = parseInt(document.getElementById("parcelas").value);

        // Verifica se os valores estão corretos
        if (isNaN(valorVeiculo) || isNaN(entrada) || isNaN(numeroParcelas) || entrada >= valorVeiculo) {
            alert("Por favor, insira valores válidos. A entrada deve ser menor que o valor do veículo.");
            return;
        }

        // Calcula o valor financiado
        const valorFinanciado = valorVeiculo - entrada;

        // Define a taxa de juros anual fixa (10% para este exemplo)
        const taxaJurosAnual = 0.10;

        // Calcula a taxa de juros mensal
        const taxaJurosMensal = Math.pow(1 + taxaJurosAnual, 1 / 12) - 1;

        // Fórmula para cálculo de financiamento com juros compostos
        const valorParcela = valorFinanciado * (taxaJurosMensal * Math.pow(1 + taxaJurosMensal, numeroParcelas)) / (Math.pow(1 + taxaJurosMensal, numeroParcelas) - 1);

        // Exibe o valor da parcela
        alert(`O valor da parcela é: R$ ${valorParcela.toFixed(3)}`);
    });
});