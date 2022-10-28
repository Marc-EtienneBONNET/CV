
function PagePresentation()
{
    
    return (
        <div className="presentation">

                <div className="borderPresentation">
                    <div className="inToPresentation">
                            <video width="320" height="240" controls src='./logo/presentation.MP4' className="videoPresentation">
                                Votre explorateur ne supporte pas la balise video.
                            </video>
                            <div className="borderObj">
                                <div className="divVideoObj"></div>
                            </div>
                    </div>
                        <div className="infoPresentation">
                            <div className="titre">
                                <h1 className="infoPresentationTitre">Bien venue !</h1>
                                <i class="fa-regular fa-face-laugh-wink smil"></i>
                            </div>
                            <p className="infoPresentationText">Un bon profile, ce n'est pas ceulement des competances, c'est aussi une atitude et un caractere qui match avec votre équipe.<br/><br/> Venez me rencontrer sur cette petite video, et assurez-vous de choisir le bon profile</p>
                        </div>
                </div>

        </div>
    );
}

export default PagePresentation;