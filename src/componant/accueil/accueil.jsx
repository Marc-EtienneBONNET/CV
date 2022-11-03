import { useState } from "react";

const Width = 500;
const Height = 650;
const Vitesse = 0.1;

function PageAccueil()
{
    let listeImg =  ['1.jpeg', '3.jpeg']
    const [marginLeft, setMarginLeft] = useState(60);
    const [opacity, setOpacity] = useState(0);
    const [indexImg, setIndexImg] = useState(0);
    function style(){
        return ({
            width: Width + 'px',
            //height: Height + 'px',
            opacity:opacity+'%',
            marginLeft:marginLeft+'vw',
            marginTop:'16vh',
        });
    }
    function effetApparitionLeft()
    {
        
        if (marginLeft > 30 && indexImg%2 === 0)
        {
            setMarginLeft(marginLeft - Vitesse);
            if (marginLeft > 50 && opacity < 100)
                setOpacity(opacity + 1);
            else if (marginLeft < 40.1)
                setOpacity(opacity - 1 <= 0 ? -1:opacity - 1);
        }
        else if (marginLeft < 60 && indexImg%2 === 1)
        {
            setMarginLeft(marginLeft + Vitesse);
            if (marginLeft < 40 && opacity < 100)
                setOpacity(opacity + 1);
            else if (marginLeft > 49.9)
                setOpacity(opacity - 1 <= 0 ? -1:opacity - 1);
        }
        changementImg();
    }
    function changementImg()
    {
        if (opacity < 0)
        {
            if (indexImg + 1 < listeImg.length)
                setIndexImg(indexImg + 1);
            else if (indexImg + 1 >= listeImg.length)
            {
                setIndexImg(0);
            }
            setOpacity(0);
        }
    }
    setTimeout(() => {effetApparitionLeft(); }, 10);
    return (
        <div>
            <img className='imgAccueil' src={'./photo/' + listeImg[indexImg]} style={style()} alt={"" + listeImg[indexImg]}/>
        </div>
    );
}

export default PageAccueil;