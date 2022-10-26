import './ProductItem.css'
import Button from '../Button/Button'


const ProductItem = ({ product, className, onAdd }) => {
    const addToCart = () => {
        onAdd(product)
    }


    return (
        <div className={'product' + className}>
            <img className="img" src={product.img} alt={product.img} />
            <div>
                <div className="title">{product.title}</div>
                <div className="price">
                    <b>{product.cost}$</b>
                </div>
            </div>



            {/* <div className="description">{product.description}</div> */}

            <Button className='add-btn' onClick={addToCart}>
                Add
            </Button>
        </div>
    )
}


export default ProductItem;