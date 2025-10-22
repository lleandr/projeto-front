const movieName = document.getElementById('barra-pesquisa');
const btnGo = document.getElementById('pesquisar')
const content = document.getElementById('content');
const image = document.getElementById('img');
const limite = 21
const itensHome = document.getElementById('itens-home');

const fetchApi = (value) => {
    const result = fetch (`https://api.imdbapi.dev/search/titles?query=${encodeURIComponent(value)}&limit=${limite}`)
    .then((res)=> {
        return res;
    })
    return result;
}
btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(movieName.value);

    if (result.ok){
        itensHome.style.display = 'none';
        result.json().then((obras) => {
            let filmes = obras.titles.filter((titulo) => titulo.type === 'movie' && titulo.primaryImage?.url)
            let filmes_element = filmes.map((filme) => {
                let elemento = document.createElement('img')
                elemento.src = filme.primaryImage.url
                elemento.alt = filme.primaryTitle
                return elemento
            })
            content.innerHTML = ''
            filmes_element.forEach(elemento => {
                content.append(elemento)
            });
        });
    }
});

