import Card from '../card/card.component';
import './card-list.styles.css';

import { Monsters } from '../../App';
import { type } from 'os';

type CardListProops = {
  monsters: Monsters[]
}

const CardList = ({ monsters }:CardListProops) =>{ 
  return <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
};

export default CardList;
