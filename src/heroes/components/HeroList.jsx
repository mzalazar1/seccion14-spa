
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";


export const HeroList = ({ publiser }) => {

    const heroes = getHeroesByPublisher(publiser);
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            <ul>
                {
                    heroes.map(hero => (
                        < HeroCard key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </ul>

        </div>
    )
}


