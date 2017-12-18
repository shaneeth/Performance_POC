import { connect } from 'react-redux'; 
import Donuts from './Donuts';
import { fetchDonuts } from './actions';

const mapStateToProps = state => {
    return {
        ...state.donuts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDonuts: () => dispatch(fetchDonuts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donuts);