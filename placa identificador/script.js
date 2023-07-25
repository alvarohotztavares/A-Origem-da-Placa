const btnConsultar = document.getElementById('btnConsultar');
const placaInput = document.getElementById('placa');
const resultadoDiv = document.getElementById('resultado');

btnConsultar.addEventListener('click', () => {
    const placa = placaInput.value.toUpperCase();
    if (placa === '') {
        resultadoDiv.textContent = 'Digite a placa do veículo.';
        return;
    }

    fetch(`https://api.placaapi.com.br/v1/consultas/${placa}`)
        .then(response => response.json())
        .then(data => {
            if (data.codigoRetorno === '0') {
                resultadoDiv.textContent = `Origem de emplacamento: ${data.estado}`;
            } else {
                resultadoDiv.textContent = 'Placa não encontrada ou inválida.';
            }
        })
        .catch(error => {
            console.error('Erro na consulta: ', error);
            resultadoDiv.textContent = 'Erro na consulta. Tente novamente mais tarde.';
        });
});