import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{ overflow : 'scroll', height:'500px', 
        border : '5px solid red' }}>
        {props.children}
        </div>
    );

};

export default Scroll