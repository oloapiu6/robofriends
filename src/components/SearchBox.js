import React from 'react';

const SearchBox = ({searchChange, searchField}) => {
	return (
		<div className='pa3 tc'>
			<input 
				className='input-reset ba b--black-20 pa2 mb2' 
				type='search' 
				placeholder='search robots'
				value = {searchField}
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;