import React from 'react'

const Product = ({ p }) => {
    const { id, name, price, description } = p;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
            <tr style={{background:'cyan',color:'white'}}>
                <td colSpan={3}>{p.description}</td>
            </tr>
        </>
    )
}
export default Product