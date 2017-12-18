import React, { Component } from 'react';
import Card from '@common/card';
import { CircularProgress } from '@mui/Progress';


class Donuts extends Component {
    componentWillMount() {
        this.props.fetchDonuts()
    }
    render() {
        const {isLoading, list} = this.props;
        return (
            <div>
                {isLoading && (
                    <div className="page-loading">
                        <CircularProgress className="loading" size={65} thickness={3}/>
                    </div>
                )}
                {!isLoading && (
                <div className="row">
                    {
                        list.map(donut => {
                            return (
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card-wrap" key={donut.id}>
                                    <Card {...donut}/>
                                </div>
                            );
                        })
                    }
                </div>)}
            </div>
        );
    }
}

export default Donuts;