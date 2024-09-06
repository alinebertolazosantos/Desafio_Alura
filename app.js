function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Obtém o termo de pesquisa inserido pelo usuário e o converte para minúsculas
    let campoPesquisa = document
        .getElementById('campo-pesquisa')
        .value.toLowerCase();

    // Verifica se o usuário inseriu algum termo de pesquisa
    if (!campoPesquisa) {
        // Exibe uma mensagem informativa caso o campo esteja vazio
        section.innerHTML =
            '<p>Nada encontrado. Você precisa digitar o nome de um restaurante ou a categoria do estabelecimento</p>';
        return; // Encerra a função, pois não há o que pesquisar
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';

    // Itera sobre cada restaurante no conjunto de dados
    for (let dado of restaurantesBirigui) {
        // Obtém o nome e a categoria do restaurante atual, convertendo para minúsculas para facilitar a comparação
        let nomeRestaurante = dado.nomeRestaurante.toLocaleLowerCase();
        let categoria = dado.categoria.toLocaleLowerCase();

        // Verifica se o nome do restaurante ou a categoria contém o termo de pesquisa
        if (
            nomeRestaurante.includes(campoPesquisa) ||
            categoria.includes(campoPesquisa)
        ) {
            // Cria um elemento HTML <div> para cada resultado encontrado e adiciona à string de resultados
            resultados += `<div class="item-resultado">
                <h2> ${dado.nomeRestaurante} </h2>
                <p class="descricao-meta"> Categoria: ${dado.categoria} </p>
                <p class="descricao-meta"> Telefone: ${dado.telefone} </p>
                </div>`;
        }
    }

    // Verifica se foram encontrados resultados
    if (!resultados) {
        // Exibe uma mensagem informativa caso não haja resultados
        resultados = 'Nada foi encontrado';
    }

    // Atualiza o conteúdo da seção HTML com os resultados da pesquisa
    section.innerHTML = resultados;
}
