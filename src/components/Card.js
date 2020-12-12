import React from 'react';

const Card = ({name, email, id, onClick}) => {
	return (
		<div className='dib' id={name} onClick={onClick}>
			<div id={name} className='bg-light-green br3 pa3 ma2 grow bw2 shadow-5'>
				<img id={name} alt='robots' src={`https://robohash.org/${id}?200x200`} />
				<div id={name}>
					<h2 id={name}>{name}</h2>
					<p id={name}>j{email}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;