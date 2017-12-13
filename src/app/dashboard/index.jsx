import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionChangeTitle } from '../header/actions'

class Dashboard extends Component {
    componentDidMount() {
        this.props.changeHeaderMenu('Dashboard');
    }
    render() {
        return <h1>Dashboard...</h1>;
    }
}

const mapStateToProps = (state, ownProps) => {
    const { dashboard } = state;
    return {
        dashboard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeHeaderMenu: (name)=> dispatch(actionChangeTitle(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
