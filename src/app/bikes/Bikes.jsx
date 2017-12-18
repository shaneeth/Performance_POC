import React, { Component } from 'react';
import Card from '@common/card';
import { CircularProgress } from '@mui/Progress';


class Bikes extends Component {
    componentWillMount() {
        this.props.fetchBikes()
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
                        list.map(bike => {
                            return (
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card-wrap" key={bike.id}>
                                    <Card {...bike}/>
                                </div>
                            );
                        })
                    }
                </div>)}
            </div>
        );
    }
}

export default Bikes;