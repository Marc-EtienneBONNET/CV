function PagePortfolio()
{
    let projets = [{ srcImg:'pong.jpg', srcLien:'https://google.fr', srcAudio:'pong.mp3'},
                    { srcImg:'transandance.jpg', srcLien:'https://google.fr', srcAudio:'transandance.mp3'},
                    { srcImg:'panier.png', srcLien:'https://google.fr', srcAudio:'panier.mp3'},]
    function createElement()
    {
        let tmp = projets.map((element) => {
            return (
                <div className="portfolioBordurProjet" >
                <div className="portfolioProjet">
                    <i class="fa-solid fa-volume-high logoSong"></i> 
                    <img  onClick={() => {window.open(element.srcImg)}} onMouseOver={() => {document.getElementById(element.srcAudio).play()}} onMouseOut={() => {document.getElementById(element.srcAudio).pause()}} className="portfolioImgProjet" src={'./projet/'+ element.srcImg}></img>
                    <audio id={element.srcAudio} src={'./projet/' + element.srcAudio} type='MP3'/>
                </div>
            </div>
            );
        })
        return (tmp);
    }
    
    return (
        <div className="portfolio">
            {createElement()};
        </div>
    );
}

export default PagePortfolio;