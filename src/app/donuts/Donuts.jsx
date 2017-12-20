import React, { Component } from 'react';
import Card from '@common/card';
import { CircularProgress } from '@mui/Progress';
import Button from '@mui/Button';
import Snackbar from '@common/snackbar';


class Donuts extends Component {
    constructor() {
        super()
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore() {
        this.props.fetchDonuts(this.props.nextPage)
    }
    componentWillMount() {
        this.props.fetchDonuts(this.props.nextPage)
    }
    componentWillUnmount() {
        this.props.reset()
    }
    render() {
        const {isLoading, list, nextPage, maxPages, loadedCount} = this.props;
        return (
            <div>
                {(
                    <Snackbar 
                        open={!isLoading}
                        message={`${loadedCount} donuts.`}
                    />                   
                )}
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
                </div>
                {!isLoading && (nextPage <= maxPages) && (
                    <div className="load-more">
                        <Button dense onClick={this.loadMore}>Load More</Button>
                    </div>
                )}
                
                {isLoading && (
                    <div className="page-loading">
                        <CircularProgress className="loading" size={65} thickness={3}/>
                    </div>
                )}          
            </div>
        );
    }
}

export default Donuts;