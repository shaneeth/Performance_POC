import { connect } from 'react-redux'; 
import Bikes from './Bikes';
import { fetchBikes, nextPage, previousPage,  resetBikes } from './actions';

const mapStateToProps = state => {
    return {
        ...state.bikes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBikes: (page) => dispatch(fetchBikes(page)),
        nextPage: () => dispatch(nextPage()),
        previousPage: () => dispatch(previousPage()),
        reset: () => dispatch(resetBikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bikes);