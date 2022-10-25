import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    /* TODO */
    const color = props.color;

    return (
        // ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            <div className="post" style={{backgroundColor: color, height: 500, width: 484}}></div>
            <div className="caption" style={{color: 'black', height: 30, width: 480, fontsize: 8}}>{color}</div>
        </div>
    );
}

export default Block;