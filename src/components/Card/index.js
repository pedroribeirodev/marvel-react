import React from 'react';
import './styles.css';

const Card = ({hero}) => {

    const imgUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
    return (
        <div className="card">
            <img src={imgUrl} alt="image" />
            <p className="title">{hero.name}</p>
            <p>{hero.description}</p>         
        </div>
    )
}

export default Card;