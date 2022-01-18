import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Move from "./Move/Move";


const Moves = ({ allMove }) => {
    
    return(
        <div className="card-scroll">
            <div class="card-grid">
                {allMove.map(move=> (
                    <div key={move.name}>
                        <Move move={move}/>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Moves;