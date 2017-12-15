import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.dashboard
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
