import React from 'react';
import StarRating from '../star-rating/star-rating.component';
const Color = ({title='',color='#000000',rating=0,onRate=f=>f,onRemove=f=>f})=>
    <div className="card text-center">
        <div className="card-header">{title}
        <button onClick={onRemove} className="btn btn-sm btn-outline-danger" style={{float:'right'}}>X</button>
        </div>
        <div className="card-body" style={{backgroundColor:color,height:'100px'}}>
        </div>
        <div className="card-footer">
            <StarRating totalStars={5} starsSelected={rating}  onRate={onRate}/>
        </div>
    </div>

export default Color;
