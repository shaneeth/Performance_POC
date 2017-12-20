import { connect } from 'react-redux'; 
import Donuts from './Donuts';
import { fetchDonuts, resetDonuts} from './actions';

const mapStateToProps = state => {
    return {
        ...state.donuts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDonuts: (page) => dispatch(fetchDonuts(page)),
        reset: () => dispatch(resetDonuts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donuts);