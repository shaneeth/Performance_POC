import React, { Component } from 'react';
import ButtonBase from '@mui/ButtonBase';

import './styles';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <ButtonBase className="stat c-orange">
                            <div className="count">20</div>
                            <div className="title">Total</div>
                        </ButtonBase>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <ButtonBase className="stat c-red">
                            <div className="count">20</div>
                            <div className="title">Total</div>
                        </ButtonBase>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <ButtonBase className="stat c-purple">
                            <div className="count">20</div>
                            <div className="title">Total</div>
                        </ButtonBase>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
