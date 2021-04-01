import { Row, Col } from 'antd'
import Menu from './Menu'
import { ReactComponent as QRcode } from '../../image/QRcode.svg'
import Logo from '../../image/logo.png'
import RegisterLogo from '../../image/register_info.png'
const Footer = () => {
    const menu = [
        {
            id: 1,
            title: "Về chúng tôi",
            items: [
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Giới thiệu chung"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Giá trị cốt lõi"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Sứ mệnh và tầm nhìn"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Văn hóa doanh nghiệp"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Tin tức & Sự kiện"
                }
            ]
        },
        {
            id: 2,
            title: "Hỗ trợ",
            items: [
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Hướng dẫn đặt vé"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Quản lý đặt chỗ"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Ứng dụng HAIVAN"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Câu hỏi thường gặp"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Quy định về bảo mật"
                }
            ]
        },
        {
            id: 3,
            title: "Tuyến phổ biến",
            items: [
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Hà Nội - Lào Cai"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Hà Nội - Sapa"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Bắc Ninh - Lào Cai"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Bắc Ninh - Sapa"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Hồ Chí Minh - Vũng Tàu"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Hà Nội - Điện Biên"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Hà Nội - Sơn La"
                },
                {
                    link: "chung-toi/gioi-thieu",
                    value: "Hà Nội - Hà Giang"
                }
            ]
        }
    ]
    return (
        <div style={{ zIndex: "10000" }}>
            <div className="px-3 px-xl-0" style={{ width: "100%", backgroundColor: "#EDEEEE", display: "flex", justifyContent: "center", flexDirection: "row" }}>
                <Row style={{ flex: 1, maxWidth: "1200px" }}>
                    <Col xs={0} sm={0} md={0} lg={24}>
                        <Row justify="space-between" style={{ padding: "24px 0" }}>
                            <Menu setMenu={menu} />
                            <Col>
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
                                    <QRcode />
                                    <b style={{ marginTop: "8px", fontSize: "16px" }}>Quét mã QR để tải App</b>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div>
                <div className="d-flex flex-row justify-content-center" style={{ width: "100%", backgroundColor: "rgb(51,51,51)" }}>
                    <div className="d-flex flex-row px-3 px-xl-0 flex-wrap" style={{ flex: 1, maxWidth: "1200px", color: "#99998C" }}>
                        <div className="d-flex flex-column" style={{flex: 1, padding: "16px 0"}}>
                            <img src={Logo} alt="logo" style={{width: "192px", height: "40px"}}/>
                            <div style={{marginTop: "10px"}}>Công ty TNHH Hà Sơn Hải Vân</div>
                            <div>Người đại diện trước pháp luật: ông Lê Việt Sơn</div>
                            <div>Email: info@hasonhaivan.com - Điện thoại: 02143662299</div>
                            <div>Địa chỉ: Bến xe Trung Tâm Lào Cai, Tổ 19, P. Bình Minh, Tp Lào Cai, Tỉnh Lào Cai.</div>
                            <div>Số đăng ký kinh doanh: 5300701005 do sở kế hoạch đầu tư tỉnh Lào Cai cấp lần đầu vào ngày 16/10/2015</div>
                        </div>
                        <div className="d-none d-sm-block">
                            <div className="d-flex flex-column align-items-end" style={{padding: "16px 0"}}>
                                <div>Designed by Hà Sơn Hải Vân</div>
                                <div style={{marginBottom: "8px"}}>Copyright &copy; 2020</div>
                                <img src={RegisterLogo} alt="" style={{width: "150px", height: "57px"}}/>
                            </div>
                        </div>
                        <div className="d-block d-sm-none" style={{width: "100%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
