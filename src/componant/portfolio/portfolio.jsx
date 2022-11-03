function PagePortfolio()
{
    let projets = [{ srcImg:'./projet/transandance.jpg', srcLien:'https://github.com/Marc-EtienneBONNET/ft_Transcendance', srcAudio:'transandance.mp4'},
    { srcImg:'./projet/panier.png', srcLien:'https://github.com/Marc-EtienneBONNET/test_neoxia', srcAudio:'panier.mp4'},                
    { srcImg:'./photo/3.jpeg', srcLien:'https://github.com/Marc-EtienneBONNET', srcAudio:'moi.mp4'},]
    function createElement()
    {
        let tmp = projets.map((element) => {
            return (
                <div className="portfolioBordurProjet" >
                <div className="portfolioProjet">
                    <i class="fa-solid fa-volume-high logoSong"></i> 
                    <img  onClick={() => {window.open(element.srcLien)}} onMouseOver={() => {document.getElementById(element.srcAudio).play()}} onMouseOut={() => {document.getElementById(element.srcAudio).pause()}} className="portfolioImgProjet" src={element.srcImg}></img>
                    <audio id={element.srcAudio} src={'./audio/' + element.srcAudio} type='MP3'/>
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