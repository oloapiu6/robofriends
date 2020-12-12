import React from 'react';
import Card from './Card.js';

const CardList = ({ robots, onCardClick }) => {
	const cardComponents = robots.map((user, i) => {
		return (
			<Card 
				key={i} 
				id={user.id} 
				name={user.name} 
				email={user.email}
				onClick={onCardClick}
			/>
		);
	})
	return (
	    <div className='tc'>
	    	{cardComponents}
	    </div>
	);
}

export default CardList;