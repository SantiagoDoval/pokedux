
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import FavoriteButton from './FavoriteButton'

const PokemonCard = ({name,img,abilities,pokemonID,favorite}:any) => {
  return (
    <Card
        // bodyStyle={{`background-color:{favorite ? ('transparent'):('#00ffff')`}}}
        headStyle={{'background-color':favorite ? ('#00ffff'):('transparent')}}
        title={name}
        cover={<img src={img.front_default} alt="Ditto" />}
        extra={<FavoriteButton isFavorite={favorite} pokemonID={pokemonID} />}>
            <Meta description={abilities.map((item:any)=>(item.ability.name)).join(', ')} />
    </Card>
  )
}

export default PokemonCard