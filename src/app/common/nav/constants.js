import HomeIcon from '@mIcons/Home';
import ViewListIcon from '@mIcons/ViewList';
import PlaceIcon from '@mIcons/Place';
import DonutSmall from '@mIcons/DonutSmall';
import MotorCycle from '@mIcons/MotorCycle';

let constants = {};

constants.MENUS = [{
    name: 'Dashboard',
    link: '/',
    icon: HomeIcon
}, {
    name: 'Places',
    link: '/places',
    icon: PlaceIcon
}, {
    name: 'Donuts',
    link: '/donuts',
    icon: DonutSmall
}, {
    name: 'Bikes',
    link: '/bikes',
    icon: MotorCycle
}];


export default constants;