import { useState } from "react";

function PageContact()
{
    const [mail, setMail] = useState({
        nom:'Kenobi',
        prenom:'Obi-Wan...',
        mail:'obi-wan.kenobi@gmail.co...',
        entreprise:'L\'ordre jedi',
        text:'Je vous ecoute ...'
    });

    function handleClickLogo(lien){
            window.open(lien);
    }

    function handleOnChange(e, type){
        let tmp = {
            ...mail,
            [e.target.name]:e.target.value 
        }
        setMail(tmp);
    }
    return (
        <div className="contact">
            <div className="borderContact">
                {/* <form className="lienContact">

                    <div className="inputForMail">
                        <input type='text' value={mail.nom} className="inputNom inputType" name='nom' onChange={(e) => {handleOnChange(e,'nom')}}/>
                        <input type='text' value={mail.prenom} className="inputNom inputType" name='prenom' onChange={(e) => {handleOnChange(e,'prenom')}}/>
                    </div>
                    <div className="inputForMail">
                        <input type='text' value={mail.entreprise} className="inputNom inputType" name='entreprise' onChange={(e) => {handleOnChange(e,'entreprise')}}/>
                        <input type='text' value={mail.mail} className="inputNom inputType" name='mail' onChange={(e) => {handleOnChange(e,'mail')}}/>
                    </div>
                    <input type='text' value={mail.text} className="inputNomContenue" name='text' onChange={(e) => {handleOnChange(e,'text')}}/>
                    <input type='button' value='Envoyez !' className="inputNomButton"/>
                </form> */}
                    <div className="apparailPhoto"></div>
                <div className="infoContact">
                    <div>
                        <h1 className="titreContact">Hâte de vous rencontrer !</h1>
                        <p className="textContact">Au travers de ces différents liens, venez découvrir ou me contacter afin de trouver votre nouveau profil.</p>
                    </div>
                    <div className="objContact">
                        <i class="fa-solid fa-phone iconContact "></i>
                        <p className="iconContactinfo">06 17 41 34 71</p>
                        <i class="fa-solid fa-envelope iconContact "></i>
                        <p className="iconContactinfo">webbonnet@gmail.com</p>
                        <i class="fa-brands fa-linkedin iconContact espaceIconneConntact" onClick={() => {handleClickLogo('https://www.linkedin.com/in/marc-etienne-bonnet-85603b226/')}}></i>
                        <i class="fa-brands fa-square-github iconContact espaceIconneConntact" onClick={() => {handleClickLogo('https://github.com/Marc-EtienneBONNET')}}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContact;