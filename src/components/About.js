import React, { Component } from 'react'
import bathroom from '../bathroom.jpg';
import table from '../table.jpeg';
import magasins from '../magasins.jpg';

class About extends Component {
    render() {
        return (

            <div class="about">
                <div class="card header">
                    <div class="card-body">
                        <h4>A propos</h4>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 texte">
                            <p>
                            Pink mango est l’entreprise pionnière du groupe ADEO, n°1 sur le marché européen et 3e acteur mondial sur le marché de l'amélioration de l'habitat.

ADEO, une présence internationale
Adeo compte 121 000 collaborateurs et a réalisé 23,1 milliards d’euros de chiffre d’affaires en 2018.

Le groupe constitue une fédération d’entreprises parmi lesquelles Weldom, Bricoman, Zodiô, Kbane ainsi que des entités digitales : Tikamoon, Lightonline… Présentes dans 15 pays (France, Espagne, Portugal, Italie, Grèce/Chypre, Russie, Ukraine, Pologne, Roumanie, Brésil, Chine, Afrique du Sud, Vietnam, Kazakhstan et Côte d’Ivoire), elles partagent les mêmes valeurs autour d’un socle commun : « être utile aux habitants du monde. »
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 texte">
                            Large choix de meubles
                            <img src={table} alt="..." class="img-thumbnail texte" ></img>
                        </div>
                        <div class="col-sm-4 texte">
                            Aménagement de vos chambres/salles
                            <img src={bathroom} alt="..." class="img-thumbnail texte"></img>
                        </div>
                        <div class="col-sm-4 texte">
                            Magasins disponibles partout
                            <img src={magasins} alt="..." class="img-thumbnail texte"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;