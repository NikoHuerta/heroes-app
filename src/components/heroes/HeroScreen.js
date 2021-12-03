import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';
import { heroImages } from '../../helpers/heroImages';


// import batman from '../../assets/heroes/dc-batman.jpg'; //recurso estatico
// const heroeImages = require.context('../../assets/heroes', true); //con helpers

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo( () => getHeroesById(heroeId) , [heroeId] );

    if( !hero ){
        return  (<Navigate to="/" />);
    }

    const handleReturn = () => {
        navigate(-1);
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;
    
    // const imagePath = `../assets/heroes/${ heroeId }.jpg`; //desde public/assets
    const imagePath = heroImages(`./${ heroeId }.jpg`).default;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ imagePath }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter Ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First Appearance: </b> { first_appearance } </li>
                    { (alter_ego!==characters) && <li className="list-group-item"> <b> Characters: </b> { characters } </li> }
                </ul>

                <button className="btn btn-outline-info"
                        onClick={ handleReturn }>
                    Return
                </button>

            </div>
        </div>
    )
}
