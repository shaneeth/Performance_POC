const ns = 'HEADER_';
let constants = {
    MENU_MAP: {
        css: 'Css',
        less: 'Less',
        sass: 'Sass',
        assets: 'Assets'
    }
};
const createConst = (value) => {
    constants[value] = ns + value;    
}
createConst('TOGGLE_MENU');
createConst('CHANGE_TITLE');

export default constants;

