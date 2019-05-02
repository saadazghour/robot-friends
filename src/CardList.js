import React from 'react'
import Card from './Card'



const CardList = ({ robots }) => {
    const Card_Array = robots.map((item, index) => {
        // return console.log(index);
        return (
            <Card
                key={ index }
                id={ robots[index].id }
                name={ robots[index].name }
                email={ robots[index].email }
            />
        );
    })
  return (
    <div>
        { Card_Array }
    </div>
  );
}

export default CardList

