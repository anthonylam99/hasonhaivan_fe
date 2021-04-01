import SubMenu from './SubMenu'
const Menu = ({setMenu}) => {
    return (
        <>
            {setMenu.map((submenu) => (
                <SubMenu key={submenu.id} submenu={submenu} />
            )
            )}
        </>
    )
}

export default Menu
