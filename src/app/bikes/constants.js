const ns = 'BIKES_';
let constants = {};
const createConstants = (name) => {
    constants[name] = ns + name;
}

createConstants('REQUEST');
createConstants('RECEIVE');
createConstants('FETCH');
createConstants('RESET');
createConstants('NEXT_PAGE');
createConstants('PREVIOUS_PAGE');

export default constants;