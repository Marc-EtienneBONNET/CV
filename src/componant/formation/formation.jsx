function PageFormation()
{
    let formations = [{lien:'https://42.fr/', nom:'École 42 Paris', deb:'novembre 2020', fin:'', diplome:'Ingénieur en technologie du numérique (bac + 5)',  src:'42.jpg', text:'Ce que l’enseignement de l’informatique a de meilleur à proposer. Innovante et ouverte, la formation met l’accent sur les projets et le travail de groupe plutôt que sur l’enseignement théorique. Un concentré de nouveautés pédagogiques pour permettre aux talents de demain de se révéler. Avec 42, l’informatique ne s’apprend pas dans un amphi : les enseignements sont pratiques et reposent sur des principes de partage, de collaboration et d’entraide.À l’opposé des formations courtes, spécialisées dans un domaine ou un langage qui peut devenir obsolète en quelques mois, 42 permet d’affronter avec sérénité les changements technologiques tout au long de sa carrière. La méthode 42 repose sur “apprendre à apprendre”. C’est la capacité à s’adapter et à trouver des solutions concrètes à des problèmes posés en se basant sur les connaissances et outils actuels. '},
    {lien:'https://www.lhsl.fr/fr/', nom:'Lycée hôtelier Savoie Léman', deb:'juillet 2014', fin:'juillet 2017', diplome:'Baccalauréat technologique hôtelier',  src:'lycee.jpeg', text:'Le Baccalauréat Sciences et Technologies de l’Hôtellerie et de la Restauration (STHR) mis en place à la rentrée 2015, se fonde sur la complémentarité entre enseignement général, conforme aux objectifs communs du Lycée et enseignement technologique générant l’acquisition d’un socle de compétences et des attitudes et comportements recherchés par la profession, dans les trois champs technologiques du secteur hôtelier : Economie et Gestion Hôtelière, Sciences et Technologies Culinaires et Sciences et Technologies des Services.'}];
    function creatFromation()
    {
        let tmp = formations.map((element) => {
            return (
                <div className="borderFormation" onClick={() => {window.open(element.lien)}} key={element.nom}>
                        <div className="contenantFormation">
                            <img src={'./logo/'+ element.src} className='imgFromation'/>
                                <h1 className="titreFormation">{element.nom}</h1>
                                <p className="diplome">Diplome : {element.diplome}</p>
                                <p className="dateFormation">Debut : {element.deb}</p>
                                <p className="dateFormation">{element.fin === ''?'':' fin : ' + element.fin}</p>
                        </div>
                        <div className="leBlockTextFormation contenantFormation">
                            <p className="textFormation">{element.text}</p>
                        </div>
                </div>
            );
        })
        return (tmp);
    }
    return (
        <div className="gate_2">
            {creatFromation()}
        </div>
    );
}

export default PageFormation;