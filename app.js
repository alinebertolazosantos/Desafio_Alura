function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';

    // Itera sobre cada dado na lista de dados
    for (let dado of restaurantesBirigui) {
        // Cria uma nova div para cada resultado, formatando-a como HTML
        resultados += `<div class="item-resultado">
            <h2> ${dado.nomeRestaurante} </h2>
            <p class="descricao-meta"> Categoria: ${dado.categoria} </p>
            <p class="descricao-meta"> Telefone: ${dado.telefone} </p>
            <p class="descricao-meta"> CEP: ${dado.cep} </p>
            <p class="descricao-meta"> Endereço: ${dado.endereco} </p>
            <p class="descricao-meta"> Horário de Funcionamento: ${dado.horarioFuncionamento} </p>
        </div>`;
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}
