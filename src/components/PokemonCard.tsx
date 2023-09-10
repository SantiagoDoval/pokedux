import {StarOutlined} from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

const PokemonCard = ({name,img,abilities}:any) => {
  return (
    <Card
        title={name}
        cover={<img src={img.front_default} alt="Ditto" />}
        extra={<StarOutlined/>}>
            <Meta description={abilities.map((item:any)=>(item.ability.name)).join(', ')} />
    </Card>
  )
}

export default PokemonCard