import './App.scss';
import './../../2) styles/index.scss'
import ComposantLayout from './../../1) lib_react_me/2_composantLayout/composantLayout'
import ComposantFooter from './../../1) lib_react_me/3_composantFooter/composantFooter'
import { useState } from 'react';
import PageAccueil from './../accueil/accueil';
import PageCompetance from './../competance/competance';
import PageContact from './../contact/contact';
import PageFormation from './../formation/formation';
import PageParcours from './../parcours/parcours';
import PagePortfolio from './../portfolio/portfolio';
import PagePresentation from './../presentation/presentation';



function App() {
  let page = {
    'Accueil':<PageAccueil/>,
    'Parcour':<PageParcours/>,
    'Portfolio':<PagePortfolio/>,
    'Competance':<PageCompetance/>,
    'Formation':<PageFormation/>,
    'Contact':<PageContact/>,
  };
  const [wichPage, setwichPage] = useState('Accueil');
  return (
    <div className="App">
      <div style={{height:'7vh'}}>
        <ComposantLayout logo='logoDev.jpg' listeBtn={['Formation', 'Parcour','Competance', 'Portfolio','Contact']} setwichPage={setwichPage}/>
      </div>
      <div style={{minHeight:'86vh'}}>
        {page[wichPage]}
      </div>
      <div style={{height:'7vh'}}>
        <ComposantFooter/>
      </div>
    </div>
  );
}

export default App;
