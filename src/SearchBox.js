import React from 'react';

const SearchBox = () =>
{
    const searchBoxStyle = {
        margin: '40px',
        border: '2px solid',
        borderColor: '#587983',
        borderRadius: 10
      };
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba'
                style={searchBoxStyle}
                type='search' 
                placeholder='Search for authors...' 
            />
        </div>
    );
}

export default SearchBox;