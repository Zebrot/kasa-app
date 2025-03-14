import '../../styles/css/collapse.css'
import { useState } from "react";
import arrow from '../../assets/arrow.svg'
function Collapse ( {title, children} ) {
    const [isOpened, setOpened] = useState(false);

    return (
        <div className='collapse'>
            <h2>
                {title}
                <img src = {arrow}/>
            </h2>
            <p>
                {children}
            </p>    
        </div>
    )
}

export default Collapse