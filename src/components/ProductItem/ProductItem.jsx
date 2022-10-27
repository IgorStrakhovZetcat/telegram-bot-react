import './ProductItem.css'
import Button from '../Button/Button'
import { useState } from 'react'


const ProductItem = ({ product, className, onAdd }) => {
    const [addOrDelete, setAddOrDelete] = useState('Add')
    const productsInCart = []
    const addToCart = () => {
    
        onAdd(product)
 
        setAddOrDelete('Delete')
    }


    return (
        <div className={'product'}>
            <img className="img" src={product.img} alt={product.img} />
            
            <div className="title">{product.title} <b>{product.cost}$</b></div>
                

            <Button className='add-btn' onClick={addToCart}>
                {addOrDelete}
            </Button>
        </div>
    )
}


export default ProductItem;