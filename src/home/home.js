const movieName = document.getElementById('barra-pesquisa');
const btnGo = document.getElementById('pesquisar')
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch (`https://api.imdbapi.dev/search/titles?query=${encodeURIComponent(value)}`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        return data;
    });
    
    return result;
}

btnGo.addEventListener('click', async (event) => {
    
    event.preventDefault();
    const result = await fetchApi(movieName.value);
    
    result.titles.forEach(movie => {
    if (movie.type === "movie" && movie.primaryImage?.url) {
        const img = document.createElement('img');
        img.src = movie.primaryImage.url;
        img.alt = movie.primaryTitle;
        content.appendChild(img);
        }
    });

});