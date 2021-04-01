import RoadMapParent from './getRoadMap/RoadMapParent'
import IconPhone1 from '../image/icon_phone1.png'
import IconPhone2 from '../image/icon_phone3.png'
import IconPhone3 from '../image/icon_phone2.png'
import { Row, Col } from 'antd'
import { useState, useEffect } from 'react'


const ThreeImage = () => {
    const [roads, setRoad] = useState([])


    const styleCol = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "40px"
    }
    const styleFont = {
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "28px",
        textAlign: "center",
        marginTop: "16px"
    }
    const styleImgDiv = {
        fontSize: "16px",
        textAlign: "center",
        marginTop: "4px"
    }


    const fetchRoadData = async () => {
        const res = await fetch('https://cms.hasonhaivan.com/api/homeWayRoads')
        const data = res.json()
        return data
    }

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchRoadData()
            setRoad(data)
        }
        loadData()
    }, [])

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ flex: 1, maxWidth: "1200px" }}>
                <Row justify="center">
                    <Col style={styleCol} xs={24} sm={24} md={12} lg={8}>
                        <img style={{ width: "64px", height: "64px" }} src={IconPhone1} alt="IconDot" />
                        <h3 style={styleFont}>Đặt vé dễ dàng</h3>
                        <div className="px-3 px-md-0" style={styleImgDiv}>
                            Thao tác đơn giản, đặt vé giữ chỗ <br />
                            nhanh chóng chỉ 30s
                        </div>
                    </Col>
                    <Col style={styleCol} xs={24} sm={24} md={12} lg={8}>
                        <img style={{ width: "64px", height: "64px" }} src={IconPhone2} alt="IconDot" />
                        <h3 style={styleFont}>Đa dạng dịch vụ</h3>
                        <div className="px-3 px-md-0" style={styleImgDiv}>
                            Hạng thấp đến cao, vé nào cũng có. <br /> Dòng xe đa dạng phục vụ mọi nhu cầu
                        </div>
                    </Col>
                    <Col style={styleCol} xs={24} sm={24} md={12} lg={8}>
                        <img style={{ width: "64px", height: "64px" }} src={IconPhone3} alt="IconDot" />
                        <h3 style={styleFont}>Phục vụ chu đáo</h3>
                        <div className="px-3 px-md-0" style={styleImgDiv}>
                            Dịch vụ chuyên nghiệp, <br /> phục vụ chu đáo, nhân sự tận tâm.
                        </div>
                    </Col>
                </Row>

                <div style={{ width: "100%", maxWidth: "1200px", height: '2px', backgroundColor: "rgba(0,0,0,0.1)", marginTop: "32px" }}></div>
                <div className="px-3 px-xl-0" style={{ marginTop: "40px", fontWeight: "bold", marginBottom: "32px", fontSize: "24px" }}>Các tuyến phổ biến</div>
                <div className="px-3 px-xl-0" style={{ marginBottom: "48px" }}>
                    <Row style={{ margin: "-8px -8px 8px -8px" }}>
                        {roads && <RoadMapParent roads={roads} />}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ThreeImage
