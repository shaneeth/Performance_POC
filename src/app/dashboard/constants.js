const ns = 'DASHBOARD_';
let constants = {};
const createConstants = (name) => {
    constants[name] = ns + name;
}

createConstants('REQUEST');
createConstants('RECEIVE');
createConstants('FETCH');

export default constants;