import React from 'react';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroeId } = useParams();
    


    const hero = getHeroesById(heroeId);

    if( !hero ){
        return  (<Navigate to="/" />);
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;
    

    return (
        <div>
            <h1> Hero Screen </h1>
        </div>
    )
}
