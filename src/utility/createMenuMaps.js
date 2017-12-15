const createMenuMaps = (menus) => {
    let menuMaps = {};
    menus.map((menu) => {
        menuMaps[menu.link] = menu;
    })
    return menuMaps
}

export default createMenuMaps;