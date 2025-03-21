import '../../styles/css/collapse.css'
import { useState } from "react";
import arrow from '../../assets/arrow.svg'
function Collapse ( {title, children} ) {
    const [isOpened, setOpened] = useState(false);

    return (
        <div className={'collapse ' + (isOpened ? 'show' : '')}>
            <h2 className = 'collapse__Title' onClick={() => setOpened(!isOpened)}>
                {title}
                <img className='collapse__Title__Arrow' src = {arrow}/>
            </h2>
            <div className='collapse__Content'>
                <p>
                    {children}
                </p>    
            </div>
        </div>
    )
}

export default Collapse