import { Col } from 'antd'
const SubMenu = ({submenu}) => {
    return (
        <Col key={submenu.title}>
            <h3 className="Footer_category_title__3W9sP">{submenu.title}</h3>
            {submenu.items.map((i) => (
                <h4 key={i.value}>
                    <a key={i.value} className="Footer_category_content__1-l-3">
                        {i.value}
                    </a>
                </h4>
            ))}
        </Col>
    )
}

export default SubMenu
