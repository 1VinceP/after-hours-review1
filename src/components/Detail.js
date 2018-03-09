import React from 'react';

/**
 * 
 */

function Detail(props) {
    return (
        <div>
            {/* This is a ternary! */}
            { props.productImg // if( props.productImg === true ) {display img, price, button}
                ? <div>
                    <img src={props.productImg} className='detailImage' />
                    <p>${props.productPrice}.00</p>
                    <button onClick={() => props.addToCart()}>Add to Cart</button>
                    </div>
                : null // else {display nothing}
            }
            
        </div>
    )
}

export default Detail;