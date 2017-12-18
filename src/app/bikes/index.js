import { connect } from 'react-redux'; 
import Bikes from './Bikes';
import { fetchBikes } from './actions';

const mapStateToProps = state => {
    return {
        ...state.bikes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBikes: () => dispatch(fetchBikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bikes);