import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';
import { heroImages } from '../../helpers/heroImages';

// const heroeImages = require.context('../../assets/heroes', true);


export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const imagePath = heroImages(`./${ id }.jpg`).default;

    return (
    <>  
        <Link to={`../hero/${id}`} className="my-card">
        <img    src={ imagePath } 
                className="img img-responsive animate__animated animate__fadeIn" 
                alt={ superhero }
        />
        <div className="profile-name">{ superhero }</div>
        <div className="profile-position">{ alter_ego }</div>
        <div className="profile-overview">
            <div className="profile-overview">
                <div className="row">
                    <div className="col-ms-4">
                        <h3>{ publisher }</h3>
                        <p>Primera Aparación: <br/>{ first_appearance }</p>
                        {
                            (alter_ego!==characters) && <p>{ characters }</p>
                        }
                    </div>
                </div>
            </div>
       </div>
       </Link>
    </>
    )
}
