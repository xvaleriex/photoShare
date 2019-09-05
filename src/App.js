import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

const App = () =>
{
    return(
        <div  className='tc' style={{backgroundColor: "#fae8da"}}>
                <h1 style={{color: "#344b52"}}>ImageShare</h1>
                <SearchBox />
                <CardList robots={robots}/>
        </div>
        
    );
}

export default App;