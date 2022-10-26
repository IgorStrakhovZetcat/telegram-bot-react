import './ProductItem.css'
import Button from '../Button/Button'


const ProductItem = ({product, className, onAdd}) => {
    const addToCart = () => {
        onAdd(product)
    }


    return (
        <div className={'product' + className}>
            <div className="img"/>
            <div className="title"/>
            <div className="title">{product.title}</div>
            {/* <div className="description">{product.description}</div> */}
            <div className="price">
                <b>{product.cost}</b>
            </div>
            <Button className='add-btn' onClick={addToCart}>
                Add
            </Button>
        </div>
    )
}


export default ProductItem;