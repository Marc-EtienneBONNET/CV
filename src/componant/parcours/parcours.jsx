import { useState } from "react";

function PageParcours()
{
    let events = [{lien:'https://www.lhsl.fr/', theme:['Tout','Diplôme','Événement majeur'], deb:'07/2017', titre:'Baccalauréat technologique hôtelier' , icon:'coupe'},
                    {lien:'', theme:['Tout','Expérience professionnelle'], deb:'08/2017', titre:'CDI chef de rang \" Au bureau \"', icon:''},
                    {lien:'', theme:['Tout','Experiance profetionnel'], deb:'04/2018', titre:'CDI chef de brigade \" brasserie du parc \"', icon:''},
                    {lien:'', theme:['Tout','Expérience professionnelle'], deb:'07/2020', titre:'Obtention du concours de l\'école 42 (la piscine)',  icon:'coupe'},
                    {lien:'', theme:['Tout','Événement majeur'], deb:'11/2020', titre:'Apprentissage du C', icon:''},
                    {lien:'', theme:['Tout','Événement majeur'], deb:'09/2021', titre:'Apprentissage du C++',  icon:''},
                    {lien:'', theme:['Tout','Événement majeur'], deb:'02/2022', titre:'Apprentissage des langages du web', icon:''},
                    {lien:'', theme:['Tout', 'Événement majeur'], deb:'04/2022', titre:'Début sur les framwork du web react/nest/node',  icon:''},
                    {lien:'', theme:['Tout', 'Diplôme'], deb:'08/2022', titre:'Fin du tronc centrale de 42', icon:'drapeau'},
                    {lien:'', theme:['Tout','Événement majeur','Expérience professionnelle'], deb:'09/2022', titre:'Recherche de stage', icon:'agenda'},
                    {lien:'', theme:['Tout','Événement majeur','Expérience professionnelle'], deb:'04/2023', titre:'Recherche d\'une alternance', icon:'agenda'},]
    const [theme,setTheme] = useState('Tout');

    function createEvenent(type)
    {
        let tmp = events.map((element) => {
            var css = (element.icon === ''? 'border2':'border') ;
            if (type === 1)
                css = 'borderB ';
            if (events.indexOf(element) != -1 && events.indexOf(element)%2 === type)
            {
                return (
                    <div style={{opacity:(element.theme.indexOf(theme) != -1?100:0)}}>
                        <div className={css} >
                            {element.icon ==='coupe'?<i className="fa-solid fa-trophy iconTropherParcours"></i>:<></>}
                            {element.icon ==='drapeau'? <i class="fa-regular fa-bookmark iconTropherParcours"></i>:<></>}
                            {element.icon ==='agenda'? <i class="fa-regular fa-calendar-days iconTropherParcours"></i>:<></>}                           
                            <div className={"eventInfo"+ css} key={element.deb}>
                                <p className={"dateEvent"}>{element.deb}</p>
                                <p className={"titreEvent"}>{element.titre}</p>
                            </div>
                        </div>
                    </div>
                );
            }
        })
        return (tmp);
       
    }
    function createPickEvenent(type)
    {
        var css = '';
        if (type === 1)
            css = 'B';
        let tmp = events.map((element) => {
            if (events.indexOf(element) != -1 && events.indexOf(element)%2 === type)
            {
                return (
                    <div className="event" style={{opacity:(element.theme.indexOf(theme) != -1?100:0)}}></div>
                );
            }
        })
        return (tmp);
       
    }

    function handleOnClickTheme(e)
    {
        setTheme(e.target.value);
    }
    return (
        <div className="parcours">
            <div className="theme">
                <input type='button' onClick={(e) => {handleOnClickTheme(e)}} className="btnThemeParcours" value='Tout'/>
                <input type='button' onClick={(e) => {handleOnClickTheme(e)}} className="btnThemeParcours" value='Diplôme'/>
                <input type='button' onClick={(e) => {handleOnClickTheme(e)}} className="btnThemeParcours" value='Expérience professionnelle'/>
                <input type='button' onClick={(e) => {handleOnClickTheme(e)}} className="btnThemeParcours" value='Événement majeur'/>
            </div>
            <div className="eventsAInfo">
                {createEvenent(0)}
            </div>
            <div className="eventsA">
                {createPickEvenent(0)}
            </div>
            <div className="friseChronologique"></div>
            <div className="eventsB">
                {createPickEvenent(1)}
            </div>
            <div className="eventsBInfo">
                {createEvenent(1)}
            </div>
        </div>
    );
}

export default PageParcours;