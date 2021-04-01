import { Carousel } from 'antd'
import { Link } from 'react-router-dom'
import banner from '../image/banner.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div tab-index='-1' style={{ width: "100%", display: "inline-block" }}>
                <Link to='/'>
                    <div className='banner-url'></div>
                </Link>
            </div>
        </Carousel>
    )
}

export default Banner
