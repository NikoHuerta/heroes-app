import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroByName';

export const SearchScreen = () => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const navigate = useNavigate();
    const [{ searchString }, handleInputChange] = useForm({ searchString: q });

    const heroesFiltered = useMemo( () => getHeroesByName( q ), [q] );

    const handleSearch = (e) =>{
        e.preventDefault();
        if(searchString.trim().length <= 1){
            return ;
        }
        navigate(`?q=${ searchString }`);
    };

    return (
        <div>
            <h1> Search Screen</h1>
            <hr />

            <div className="row">
                <h4>Search Form</h4>
                <hr />
                <form onSubmit={ handleSearch }>
                    <input
                        type="text"
                        placeholder="Find Your Hero"
                        className="form-control"

                        autoComplete="off"
                        name="searchString"
                        onChange={ handleInputChange }
                        value={ searchString }

                        />
                    <button 
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div>
                <br/>
                <h4>Results</h4>
                <hr/>
                <br/>
                { 
                    (q === '') && <div className="alert alert-info">
                                    Search a Hero
                                </div>
                }

                { 
                    (q !== '' && heroesFiltered.length===0) &&  <div className="alert alert-danger">
                                                                    There is no hero with '{ q }'
                                                                </div>
                }

                <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
                    {
                        heroesFiltered.map(hero => (
                        <HeroCard key={ hero.id }
                            { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
