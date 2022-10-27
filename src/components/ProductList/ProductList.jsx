import { useCallback, useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css'
import {useTelegram} from '../../hooks/useTelegram'
import b1 from '../Images/Burgers/b1.jpg'
import b2 from '../Images/Burgers/b2.jpg'
import b3 from '../Images/Burgers/b3.jpg'
import b4 from '../Images/Burgers/b4.jpg'
import b5 from '../Images/Burgers/b5.jpg'


const products = [
    {id: '1', title: 'Burger1', cost: 20, img: b1},
    {id: '2', title: 'Burger2', cost: 15, img: b2},
    {id: '3', title: 'Burger3', cost: 24, img: b3},
    {id: '4', title: 'French fries', cost: 30, img: b4},
    {id: '8', title: 'Rustic potatoes', cost: 10, img: b5},
    {id: '5', title: 'Coca-Cola', cost: 50, img: b1},
    {id: '6', title: 'Sprite', cost: 60, img: b1},
    // {id: '7', title: 'Джинсы 4', price: 5500},
    
]

const getTotalCost = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.cost
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg, queryId} = useTelegram()


    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalCost: getTotalCost(addedItems),
            queryId
        }
        fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [addedItems, queryId])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])



    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy ${getTotalCost(newItems)}$`
            })
        }
    }

    return (
        <div className='list'>
            {products.map(item => (
                <ProductItem product={item} onAdd={onAdd} className='item'/>
            ))}
        </div>
    )
}

export default ProductList;

