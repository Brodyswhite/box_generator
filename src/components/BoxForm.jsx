import React,{useContext} from 'react';
import BoxContext from '../contexts/BoxContext';

const BoxForm = props => {

    const {color,setColor,boxen,setBoxen} = useContext(BoxContext);

    const handlesSubmit = (e) => {
        e.preventDefault();
        setBoxen(banana => [...banana,color])
        setColor("");
    }
    return(
        <form className="col-5 mx-auto" onSubmit={handlesSubmit} >
            <div className="form-group">
                <label htmlFor="color">Color:</label>
                <input 
                    type="text" 
                    className="form-control"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                    />
            </div>
            <input type="submit" value="Add Box" className="btn btn-warning outline-primary"/>
        </form>
    )
}

export default BoxForm;