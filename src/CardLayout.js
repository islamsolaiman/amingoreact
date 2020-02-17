import React from 'react';

const CardLayout =(prop) => {

    const style={
        display:"flex"

    }
    return(
        <div style={style}>
            {prop.children}
        </div>
    )

}

export default CardLayout;