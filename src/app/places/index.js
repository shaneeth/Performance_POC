import { connect } from 'react-redux';
import Places from './Places';
import { fetchPlaces } from './actions';

const mapStateToProps = state => {
    return {
        ...state.places
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaces: () => dispatch(fetchPlaces())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);