/**
 * Created by emugisha on 3/24/2018.
 */
import React from 'react';
import Star from '../star/star.component';

const StarRating = ({totalStars = 5,starsSelected=0,onRate=f=>f})=>
    <div>
        <div className="row text-center">
            <div className="col-md-12">
            {[...Array(totalStars)].map((n,i)=>
                <Star key={i} selected={i<starsSelected} onClick={()=>onRate(i+1)} />
            )}</div>
        </div>
        <div className="row text-center">
            <div className="col-md-12">{starsSelected} of {totalStars}
            </div>
        </div>
    </div>


    export default StarRating;