/**
 * Created by emugisha on 3/14/2018.
 */
import React from 'react';

const AddColor = ({onNewColor=f=>f})=>{
    let _title,_color;
    const submit = e=>{
        e.preventDefault();
        onNewColor(_title.value,_color.value);
        _title.value = '';
        _color.value ='#000000';
        _title.focus();
    }

    return(
        <form onSubmit={submit} className="form-top">
            <div className="form-group row">
                <label htmlFor="colorTitle" className="col-md-2 col-form-label">Color Title</label>
                <div className="col-md-3">
                    <input ref={input =>_title = input} type="text" className="form-control" id="colorTitle"  placeholder="Enter a Color Title..." required/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="color" className="col-md-2 col-form-label">Color</label>
                <div className="col-md-1">
                    <input ref={input=>_color = input} type="color" id="color"required/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <button className="btn btn-primary" >ADD</button>
                </div>
            </div>
        </form>
    );
}

export default AddColor;