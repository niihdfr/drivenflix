import React from 'react';

export default function Content() {
    const filmes = [        
        { nome: "Coraline", imagem: "https://threepennypress.org/wp-content/uploads/2017/05/1415660277866-755x1000.jpeg", link: "https://www.primevideo.com/dp/amzn1.dv.gti.fd8a2981-5e48-4c96-993f-a192e034a300?autoplay=0&ref_=atv_cf_strg_wb" },
        { nome: "La La Land", imagem: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg", link: "https://www.primevideo.com/detail/0GQK5UKAMEDC0TSWTLFVZI1Z3Z/ref=atv_sr_fle_c_Tn74RA_5_1_5?sr=1-5&pageTypeIdSource=ASIN&pageTypeId=B086R8GSG4&qid=1723679673394" },
        { nome: "My Love", imagem: "https://upload.wikimedia.org/wikipedia/pt/2/2a/My_Girl_%28filme%29.jpg", link: "https://www.primevideo.com/dp/amzn1.dv.gti.78b88337-e113-6d02-ae86-682c9eb1a69d?autoplay=0&ref_=atv_cf_strg_wb" },
        { nome: "My First Summer", imagem: "https://image.tmdb.org/t/p/original/aPtsJgiegqEZTTRI7sgxQGyjjzo.jpg", link: "https://www.primevideo.com/-/pt/detail/My-First-Summer/0Q03KRT74YEVOS1FI4EW6KP9ZW#:~:text=Prime%20Video%3A%20My%20First%20Summer" },
        { nome: "Gone Girl", imagem: "https://cdn.kobo.com/book-images/395aef2d-44e2-4f98-bb62-33d7130eabcf/1200/1200/False/gone-girl-movie-tie-in-edition-1.jpg", link: "https://www.disneyplus.com/pt-br/play/03da58ba-0430-4dc6-9782-952c932d63fe?distributionPartner=google" },
        { nome: "Gilmore Girls", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e6/Gilmore_Girls_season_1_box_set.jpg", link: "https://www.netflix.com/browse?jbv=70155618" },
        { nome: "Hill House", imagem: "https://i0.wp.com/www.nerdtrip.com.br/wp-content/uploads/2020/10/ResidenciaHillPoster.jpg?resize=203%2C300&ssl=1", link: "https://www.netflix.com/watch/80189223?source=35" },
        { nome: "Breaking Bad", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO5OaARV_y5WtT6rA6jAShjvGLK8sZCjuQLHCeluyL-mxaRY9AC2zhHCsw5ekOEe_6tg&usqp=CAU", link: "https://www.netflix.com/watch/70236416?source=35" },
        { nome: "Pulp Fiction", imagem: "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", link: "https://globoplay.globo.com/pulp-fiction-tempo-de-violencia/t/GHQw155ZdB/" },
        { nome: "The Godfather", imagem: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", link: "https://www.netflix.com/watch/60011152?source=35" },
        { nome: "Shawshank", imagem: "https://media.fstatic.com/f3BMyDgktLmDJgA32sL80t4gsRY=/210x312/smart/filters:format(webp)/media/movies/covers/2014/12/um-sonho-de-liberdade_t6434.jpg", link: "https://www.max.com/br/pt/movies/um-sonho-de-liberdade/9b4dacba-2f80-4272-aac7-bb5e2ae91343?utm_source=universal_search" },
        { nome: "Forrest Gump", imagem: "https://play-lh.googleusercontent.com/ToGy2Cue0epHBdeRkq3dntz8on4ogI1UlKLGqMvgCptTwmpMWVkIxojwVUuvIjrMIFz2UiNjW73xcuofHQ=w240-h480-rw", link: "https://www.netflix.com/watch/60000724?source=35" },
        { nome: "Batman", imagem: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", link: "https://www.max.com/br/pt/movies/batman-o-cavaleiro-das-trevas/52217243-a137-45d6-9c6a-0dfab4633034?utm_source=universal_search"},
        { nome: "Inception", imagem: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", link: "https://www.max.com/br/pt/movies/origem/14552c93-d318-4563-a00b-343df7e35d0b?utm_source=universal_search" },
        { nome: "Fight Club", imagem: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", link: "https://www.netflix.com/watch/26004747?source=35" },
        { nome: "The Matrix", imagem: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg", link: "https://www.max.com/br/pt/movies/matrix/012cacbd-5893-4379-b7a6-d3737c61d4b5?utm_source=universal_search" },
    ];
    
    return (
        <ul className="content">
            {filmes.map((filme, index) => (
                <Filme nome={filme.nome} imagem={filme.imagem} link={filme.link} key={index} />
            ))}
        </ul>
    );
}

function Filme({ imagem, nome, link }) {
    return (
        <li className="filme">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imagem} alt={nome} />
            </a>
            <p>{nome}</p>
        </li>
    );
}
