import { Link } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
import './Header.css'




const Header = () => {
    const {onClose, user} = useTelegram()


    const toProductList = () => {
        <Link to={'/'}/>
    }
    const toDrinks = () => {
        
    }

    

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={toProductList}>Burgers</Button>
            <Button onClick={toDrinks}>Drinks</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;