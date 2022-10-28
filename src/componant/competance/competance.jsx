import { useState } from "react";

function PageCompetance()
{
    const [opacity, setOpacity] = useState(0);
    let logos = [{src:'c.png', opacity:-0, type:'langage', index:0},
                {src:'c++.png', opacity:-10, type:'langage',index:0},
                {src:'js.png', opacity:-20, type:'langage',index:1},
                {src:'ts.png', opacity:-30, type:'langage',index:1},
                {src:'css.webp', opacity:-40, type:'langage',index:2},
                {src:'html.webp', opacity:-50, type:'langage',index:2},
                {src:'react.png', opacity:-60, type:'framwork',index:3},
                {src:'node.png', opacity:-70, type:'framwork',index:4},
                {src:'nest.webp', opacity:-80, type:'framwork',index:5},
                {src:'docker.jpg', opacity:-90, type:'framwork',index:6},
                {src:'dockercompose.png', opacity:-100, type:'framwork',index:6},
                {src:'github.png', opacity:-110, type:'framwork',index:7},
                {src:'vscode.png', opacity:-120, type:'editeTextOs',index:8},
                {src:'vim.png', opacity:-130, type:'editeTextOs',index:8},
                {src:'linux.jpeg', opacity:-140, type:'editeTextOs',index:9},
                {src:'macos.jpeg', opacity:-150, type:'editeTextOs',index:9},
                {src:'windos.png', opacity:-160, type:'editeTextOs',index:9},
                {src:'courante.png', opacity:-170, type:'langue',index:10},
                {src:'francais.png', opacity:-180, type:'langue',index:10},
                {src:'secondaire.png', opacity:-190, type:'langue',index:11},
                {src:'anglais.png', opacity:-200, type:'langue',index:11},];

    function test(){
        if (opacity < 300)
            setOpacity(opacity + 1);
    }
    function createLogo(type)
    {
        let tab = logos.map((element) => {
            if (element.type === type)
                return (<img src={'./logo/'+ element.src} key={element.src} className='imgLogo' style={{opacity:(element.opacity + opacity > 100? 100 :element.opacity + opacity < 0? 0 : element.opacity + opacity) +'%'}}/>);
        })
        return (tab);
    }
    setTimeout(test, 5);
    return (
        <div className="competances">
            <div className="gate_ver categorie">
                    {createLogo('langage')}
            </div>
            <div className="categorie">
                <div className="gate_ver categorie">
                        {createLogo('framwork')}
                </div>
            </div>
            <div className="categorie">
                <div className="gate_ver categorie">
                        {createLogo('editeTextOs')}
                </div>
            </div>
            <div className="categorie">
                <div className="gate_ver categorie">
                        {createLogo('langue')}
                </div>
            </div>
            <div className="categorie">
                <div className="gate_ver categorie">
                        {createLogo('annex')}
                </div>
            </div>
        </div>
    );
}

export default PageCompetance;