import React from 'react';

const SearchBox = ({searchfield , searchchange}) => {
	return( 
		<div  className = "pa2">
		<input 
		 type='search'
		  placeholder='robots'
		  className="pa3 ba b--green bg-lightest-blue"
		  onChange = { searchchange }
		   />
		</div>
		);
}
export default SearchBox;