import React  from 'react'


const SearchBox = ({ searchChange }) => {
  return (
      <div className='ma3 pa2'>
        <input
          type='search'
          placeholder='Search....'
          className='pa3 bg-light-blue ba'
          onChange={ searchChange }
          />
      </div>
  );
}

export default SearchBox
