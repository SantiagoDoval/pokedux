import { StarOutlined,StarFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions'

const FavoriteButton = ({isFavorite,pokemonID}:{isFavorite:boolean,pokemonID:number}) => {
    
    const distpatch=useDispatch();

    const icon= isFavorite ?(<StarFilled />): (<StarOutlined />);

    const handleFavorite=()=>{
        distpatch(setFavorite(pokemonID))
    }

    return (
        <Button onClick={handleFavorite}>{icon}</Button>
    )
}

export default FavoriteButton