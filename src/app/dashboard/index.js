import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { fetchDetails } from './actions'; 

const mapStateToProps = state => {
    return {
        ...state.dashboard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDetails: () => dispatch(fetchDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
