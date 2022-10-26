import './ProductItem.css'
import Button from '../Button/Button'


const ProductItem = ({ product, className, onAdd }) => {
    const addToCart = () => {
        onAdd(product)
    }


    return (
        <div className={'product'}>
            <img className="img" src={product.img} alt={product.img} />
            
                <div className="title">{product.title}  <b>{product.cost}$</b></div>
                
            



            {/* <div className="description">{product.description}</div> */}

            <Button className='add-btn' onClick={addToCart}>
                Add
            </Button>
        </div>
    )
}


export default ProductItem;