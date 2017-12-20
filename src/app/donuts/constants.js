const ns = 'DONUTS_';
let constants = {};
const createConstants = (name) => {
    constants[name] = ns + name;
}

createConstants('REQUEST');
createConstants('RECEIVE');
createConstants('FETCH');
createConstants('NEXT_PAGE');
createConstants('RESET');

export default constants;