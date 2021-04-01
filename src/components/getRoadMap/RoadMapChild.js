import { Col } from 'antd'
import IconClock from '../../image/icon_clock.png'
const RoadMapChild = ({ road }) => {
    const linkRef = "https://cms.hasonhaivan.com/"
    const styleLink = {
        borderRadius: "4px",
        textDecoration: "none",
        color: "rgb(88,89,91)",
        position: "relative"
    }
    const styleImg = {
        width: "100%",
        height: "auto",
        borderRadius: "4px",
        objectFit: "cover"
    }
    const styleFonth2 = {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "0px"
    }
    const convertSecondToTime = (second) => {
        return (
            Math.floor(((second / 3600) % 1) * 60) + 'h' +
            Math.round(((second / 60) % 1) * 60));
    }
    return (
        <Col key={road.tuy_id} xs={24} sm={24} md={12} lg={8} style={{ padding: "8px" }}>
            <a style={styleLink} className="cardview d-flex flex-column" href={`/xe-khach/${road.slug}`}>
                <img style={styleImg} src={`${linkRef}/${road.tuy_image}`} alt="" />
                <div className="d-flex flex-column" style={{ padding: "12px 16px" }}>
                    <h2 style={styleFonth2}>{road.tuy_ten}</h2>
                    <div className="d-flex flex-row" style={{ fontSize: "16px" }}>
                        <div className="flex-fill">{road.tuy_gia_nho_nhat}</div>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <img src={IconClock} alt="Thời gian" style={{ width: "16px", height: "16px" }} />
                            <div>{convertSecondToTime(road.tuy_thoi_gian_chay)}</div>
                        </div>
                    </div>
                </div>
            </a>
        </Col>
    )
}

export default RoadMapChild
