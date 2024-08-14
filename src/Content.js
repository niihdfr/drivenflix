export default

function Content() {
    
    const filmes = [
        {nome: "Coraline", imagem: "https://threepennypress.org/wp-content/uploads/2017/05/1415660277866-755x1000.jpeg"},
        {nome: "La La Land", imagem: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"},
        {nome: "My Love", imagem: "https://upload.wikimedia.org/wikipedia/pt/2/2a/My_Girl_%28filme%29.jpg"},
        {nome: "My First Summer", imagem: "https://image.tmdb.org/t/p/original/aPtsJgiegqEZTTRI7sgxQGyjjzo.jpg"},
        {nome: "Gone Girl", imagem: "https://cdn.kobo.com/book-images/395aef2d-44e2-4f98-bb62-33d7130eabcf/1200/1200/False/gone-girl-movie-tie-in-edition-1.jpg"},
        {nome: "Gilmore Girls", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e6/Gilmore_Girls_season_1_box_set.jpg"},
        {nome: "Hill House", imagem: "https://i0.wp.com/www.nerdtrip.com.br/wp-content/uploads/2020/10/ResidenciaHillPoster.jpg?resize=203%2C300&ssl=1"},
        {nome: "Breaking Bad", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO5OaARV_y5WtT6rA6jAShjvGLK8sZCjuQLHCeluyL-mxaRY9AC2zhHCsw5ekOEe_6tg&usqp=CAU"},
        {nome: "Pulp Fiction", imagem: "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
        {nome: "The Godfather", imagem: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"},
        {nome: "Shawshank Redemption", imagem: "https://media.fstatic.com/f3BMyDgktLmDJgA32sL80t4gsRY=/210x312/smart/filters:format(webp)/media/movies/covers/2014/12/um-sonho-de-liberdade_t6434.jpg"},
        {nome: "Forrest Gump", imagem: "https://play-lh.googleusercontent.com/ToGy2Cue0epHBdeRkq3dntz8on4ogI1UlKLGqMvgCptTwmpMWVkIxojwVUuvIjrMIFz2UiNjW73xcuofHQ=w240-h480-rw"},
        {nome: "The Dark Knight", imagem: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
        {nome: "Inception", imagem: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"},
        {nome: "Fight Club", imagem: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"},
        {nome: "The Matrix", imagem: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"},
    ];
    

    return (
        <ul class="content">
                {filmes.map((filme, index) => <Filme nome={filme.nome} imagem={filme.imagem} key={index}/> )}
        </ul>
    );
}

function Filme({imagem, nome}) {
    return (
        <li class="filme">
                        <img src={imagem}></img>
                        <p>{nome}</p>
        </li>
    )
}