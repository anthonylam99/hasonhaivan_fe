import React from 'react'
import { Row, Col } from 'antd'
import IconDot from '../image/icon_nine_dot.png'
import Logo from '../image/logo.png'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Header = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Hà Nội - Lào Cai
                    </a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Hà Nội - Bắc Hà
                    </a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Hà Nội - Sapa
                    </a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Lào Cai - Bắc Ninh
                    </a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Sapa - Bắc Ninh
                    </a>
                </div>
            </Menu.Item>
        </Menu>
    );

    const khamPha = (
        <Menu>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Điểm đến
                    </a>
                </div>
            </Menu.Item>
        </Menu>
    )

    const dichVu = (
        <Menu>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Xe liên tỉnh
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Hàng hóa
                    </a>
                </div>
            </Menu.Item>
        </Menu>
    )

    const chungToi = (
        <Menu>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Về HASONHAIVAN
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        An toàn &amp; chất lượng
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Phát triển bền vững
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Đánh giá của khách hàng
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Đối tác
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Tin tức
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Tuyển dụng
                    </a>
                </div>
            </Menu.Item>
        </Menu>
    )

    const taiKhoan = (
        <Menu>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Thông tin cá nhân
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Chuyến đi của tôi
                    </a>
                </div>
            </Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item>
                <div className="sub-menu">
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        Đăng xuất
                    </a>
                </div>
            </Menu.Item>
        </Menu>
    )

    return (
        <div style={{ height: "64px" }}>
            <header className='header'>
                <Row className="container" justify='center' style={{ height: '64px' }}>
                    <Row className="header-left" justify='center' align='middle'>
                        <div className="d-none d-md-block">
                            <Link to="/">
                                <img src={IconDot} alt="IconDot" />
                            </Link>
                        </div>
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                    </Row>
                    <Row className='header-right' justify='end' align='middle' style={{ flex: 1 }}>
                        <Col className='child-menu'>
                            <Dropdown className='dropdown' overlay={menu} placement="bottomRight">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Tuyến đường <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col className='child-menu'>
                            <Dropdown className='dropdown' overlay={khamPha} placement="bottomRight">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Khám phá <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col className='child-menu'>
                            <Dropdown className='dropdown' overlay={dichVu} placement="bottomRight">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Dịch vụ <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col className='child-menu'>
                            <Dropdown className='dropdown' overlay={chungToi} placement="bottomRight">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Chúng tôi <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col className='child-menu'>
                            <div className='dropdown' overlay={menu} placement="bottomRight">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Hỗ trợ
                                </a>
                            </div>
                        </Col>
                        <Col className='child-menu'>
                            <Dropdown className='dropdown' overlay={taiKhoan} placement="bottomRight">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Tài khoản <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Row>
            </header>
        </div>
    )
}

export default Header
