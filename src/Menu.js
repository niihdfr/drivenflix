export default

function Menu() {

    const array = [
        {texto:"Home", img: "https://www.seekpng.com/png/full/40-404392_news-subnav-indicator-house-flat-icon-white.png", link: "./home.html"},
        {texto: "Favorites", img : "https://www.seekpng.com/png/full/978-9785412_white-heart-transparent-background-heart-icon-white.png", link: "./favotits.html"},
        {texto:"Contact", img: "https://www.seekpng.com/png/full/133-1335726_white-envelope-icon-png-envelope-icon-white-png.png",link :"./contact.html"}];

    return (
        <ul class="menu">
                {array.map( ({texto, img, link}) => <MenuItem texto= {texto} img = {img} link = {link}/>)}
        </ul>
    );
} 

function MenuItem({img, texto, link}) {
  
    return (
        <li>
            <img src={img} alt=""/>
            <a href={link}>{texto}</a>
        </li>
    )
}