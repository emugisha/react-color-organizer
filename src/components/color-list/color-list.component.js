import Color from '../color/color.component';
import React from 'react'
const ColorList = ({savedColors=[],onRate=f=>f,onRemove=f=>f})=>
    <div className="container">
        <div className="row">
            {(savedColors.length === 0)?
                <div className="col-md-6 ">
                    <div className="alert alert-danger" role="alert" style={{marginTop:'20px'}}>
                        <p>No Colors Saved. Please add a color to continue</p>
                    </div>
                </div> : savedColors.map((color,i)=>
                <div className="col-md-3" key={i} style={{margin:'20px'}}>
                    <Color title={color.title} color={color.color} rating ={color.rating}
                           onRate={(rating)=>onRate(color.id,rating)} onRemove={()=>onRemove(color.id)}/>
                </div>
            )

            }

        </div>
    </div>


export default ColorList;
