/* eslint-disable */
import React from 'react';

const Card = ({author , url, id}) =>{
    return(
        <div style={{backgroundColor: "#F8F9F9"}} className={'dib br2 pa3 ma2 grow bw2 shadow-5'}>
            <img alt='' src={`https://picsum.photos/id/${id}/300/200?random=2`} /> 
            <div>
                <h2>{author}</h2>
                <p>{url}</p>
            </div>
        </div>
    );
}

export default Card;