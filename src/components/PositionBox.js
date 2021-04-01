import { Row, Col, AutoComplete, Input, DatePicker, Button, Spin, Select } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react'
import moment from 'moment';
import { DownOutlined } from '@ant-design/icons';
import axios from "axios";
import apis from '../../src/configs/apis'
const PositionBox = () => {
    const { Option } = Select;
    const [location, setLocation] = useState([])

    useEffect(() => {
        const loadData = async () => {
            const dataLocation = await getLocation()
            setLocation(dataLocation)
        }
        loadData()
    }, [])

    const getLocation = async () => {
        const res = await fetch('https://apiweb.hasonhaivan.com/api/places?')
        const data = res.json()

        return data
    }

    // 
    const styleCol = {
        padding: '4px 8px 4px 8px'
    }

    const styleRow = {
        margin: "-4px -8px 4px -8px"
    };

    /*******AutoComplete******* */
    const renderTitle = (title) => {
        return (
            <a className="d-flex align-item-center" onClick={(e) => { console.log(e.index) }}>
                <span style={{ fontSize: "16px" }}>{title}</span>
                <DownOutlined />
            </a>

        );

    };


    const renderItem = (place) => {
        return {
            value: JSON.stringify(place),
            label: (
                <div>
                    <span style={{ fontWeight: 'bold' }}>{place.name}</span>
                    <br />
                    <span style={{ fontSize: 12 }}>{place.address}</span>
                </div>
            ),
        };
    };




    const formatDataAutoComplete = (array) => {
        const arrBack = []
        array.map((locate) => {
            const places = []
            locate.places.map((place) => {
                // console.log(place)
                const item = renderItem(place)
                places.push(item)
            })
            const arr = {
                label: renderTitle(locate.name),
                options: places,
            }
            arrBack.push(arr)
        })
        return arrBack
    }

    const arrOptions = formatDataAutoComplete(location)

    const [startPoint, setStartPoint] = useState([])
    const [constStartPoint, setConstStartPoint] = useState([])
    const [endPoint, setEndPoint] = useState([])
    const [constEndPoint, setConstEndPoint] = useState([])
    const [start_value, setStartValue] = useState('')
    const [end_value, setEndValue] = useState('')
    const handleSearch = (query) => {
        if (query && query.trim().length > 3) {
            apis.searchPlaceGoogle(query).then(res => {
                let options = []
                res.data.data.map(place => {
                    let option = {}
                    option.label = null
                    option.value = JSON.stringify(place)
                    option.label = <div><span style={{ fontWeight: 'bold' }}>{place.name}</span>
                        <br /><span style={{ fontSize: 12 }}>{place.description}</span></div>
                    options.push(option)
                })
                setStartPoint(options)
                setConstStartPoint(options)
            })
        } else {
            setStartPoint(constStartPoint)
        }
        setStartValue(query)
    }

    const searchPoint = (id) => {
        apis.searchLatLongGoogle(id).then(res => {
            // searchPlacePoint(res.data.)
            searchPlacePoint(res.data.location.lat, res.data.location.lng);
        })
    }
    const searchEndPoint = (id) => {
        apis.searchLatLongGoogle(id).then(res => {
            searchPlacePoint(res.data.location.lat, res.data.location.lng);
        })
    }

    const searchPlacePoint = (lat, long) => {
        apis.searchPlacePoint(lat, long).then(res => {
            const endPoint = formatDataAutoComplete(res.data)
            setEndPoint(endPoint)
            setConstEndPoint(endPoint)
        })
    }
    const searchEndPlacePoint = (lat, long) => {
        setEndPoint(constEndPoint)
    }

    const handleSearchEndPoint = (query) => {
        if (query && query.trim().length > 3) {
            apis.searchPlaceGoogle(query).then(res => {
                let options = []
                res.data.data.map(place => {
                    let option = {}
                    option.label = null
                    option.value = JSON.stringify(place)
                    option.label = <div><span style={{ fontWeight: 'bold' }}>{place.name}</span>
                        <br /><span style={{ fontSize: 12 }}>{place.description}</span></div>
                    options.push(option)
                })
                setEndPoint(options)
            })
        } else {
            setEndPoint(constEndPoint)
        }
        setEndValue(query)
    }


    const disabledDate = ((current) => {
        // Can not select days before today and today
        return current < moment().startOf('day');
    })


    const DateTimePicker = () => (
        <DatePicker size="large" style={{ width: "100%", height: "56px", fontSize: "16px" }} defaultValue={moment()} format={'DD-MM-YYYY'} disabledDate={disabledDate} />
    )

    const searchTicket = () => {

    }

    return (
        <div style={{ position: "relative" }}>
            <Row>
                <Col xs={0} sm={0} md={24} style={{ height: "80px" }}></Col>
            </Row>
            <div style={{ position: "absolute", width: "100%", top: "-63px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ flex: 1, maxWidth: "1200px", position: "relative" }}>
                        <div className="mgS">
                            <div style={{ padding: "16px" }}>
                                <Row>
                                    <Col xs={0} sm={0} md={24}>
                                        <Row style={styleRow}>
                                            <Col style={styleCol} xs={24} sm={12} md={7}>
                                                <div style={{ fontWeight: "bold", marginBottom: 8 }}>Điểm xuất phát</div>
                                                <div style={{ position: "relative" }}>
                                                    <AutoComplete
                                                        className="main-search"
                                                        dropdownClassName="certain-category-search-dropdown"
                                                        dropdownMatchSelectWidth={{ width: "100%" }}
                                                        style={{ width: '100%', height: 56, fontSize: "16px" }}
                                                        options={startPoint.length > 0 ? startPoint : arrOptions}
                                                        onSearch={handleSearch}
                                                        placeholder="Chọn điểm xuất phát"
                                                        onSelect={(value) => {
                                                            let data = JSON.parse(value)
                                                            if (data.lat && data.lng) {
                                                                searchPlacePoint(data.lat, data.lng);
                                                                setStartValue(data.name)
                                                            } else {
                                                                searchPoint(data.id)
                                                                setStartValue(data.name)
                                                            }
                                                        }}
                                                        value={start_value}
                                                    >
                                                        <Input size="large" style={{ height: 56, paddingRight: 32, lineHeight: '56px' }} size="large" />
                                                    </AutoComplete>
                                                </div>
                                            </Col>
                                            <Col style={styleCol} xs={24} sm={12} md={7}>
                                                <div style={{ fontWeight: "bold", marginBottom: 8 }}>Điểm đến</div>
                                                <AutoComplete
                                                    className="main-search"
                                                    dropdownClassName="certain-category-search-dropdown"
                                                    dropdownMatchSelectWidth={{ width: "100%" }}
                                                    style={{ width: '100%', height: 56, fontSize: "16px" }}
                                                    options={endPoint.length > 0 ? endPoint : []}
                                                    placeholder="Chọn điểm đến"
                                                    onSearch={handleSearchEndPoint}
                                                    onSelect={(value) => {
                                                        let data = JSON.parse(value)
                                                        if (data.lat && data.lng) {
                                                            searchEndPlacePoint(data.lat, data.lng);
                                                            setEndValue(data.name)
                                                        } else {
                                                            searchEndPoint(data.id)
                                                            setEndValue(data.name)
                                                        }
                                                    }}
                                                    value={end_value}
                                                >
                                                    <Input size="large" style={{ height: 56, paddingRight: 32, lineHeight: '56px' }} size="large" />
                                                </AutoComplete>
                                            </Col>
                                            <Col style={styleCol} xs={24} sm={8} md={5}>
                                                <div style={{ fontWeight: "bold", marginBottom: 8 }}>Ngày đi</div>
                                                <DateTimePicker />
                                            </Col>
                                            <Col style={styleCol} xs={24} sm={8} md={5}>
                                                <div style={{ fontWeight: "bold", marginBottom: 8, opacity: 0 }}>Tìm chuyến</div>
                                                <Button onClick={searchTicket} style={{ width: "100%", height: "56px", backgroundColor: "#FFDD2B", borderRadius: "4px" }}><span style={{ fontSize: "24px" }}>Tìm vé</span></Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>ra
                </div>
            </div>
        </div>
    )
}

export default PositionBox
