import {StarOutlined} from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

const PokemonCard = ({name,url}:{name:string,url:string}) => {
  return (
    <Card
        title={name}
        cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt="Ditto" />}
        extra={<StarOutlined/>}>
            <Meta description="Water" />
    </Card>
  )
}

export default PokemonCard