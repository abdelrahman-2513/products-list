import React from 'react';

const Items = (props) => {
    const { items, del, inc, dec } = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return (
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price * item.quantity}</p>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                    <div className='quantity'>
                        <p className='add' onClick={() => inc(item.id)}> + </p>
                        <p className='remove' onClick={() => dec(item.id)}> - </p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Edit</p>
                <p>Quantity</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items