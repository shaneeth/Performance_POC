import React, { Component } from 'react';
import Card from '@common/card';
import { CircularProgress } from '@mui/Progress';
import Button from '@mui/Button';
import Snackbar from '@common/snackbar';


class Bikes extends Component {
    constructor() {
        super()
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
    }
    nextPage() {
        this.props.nextPage()
    }
    previousPage() {
        this.props.previousPage();        
    }
    componentWillMount() {
        this.props.fetchBikes(this.props.currentPage)
    }
    componentWillReceiveProps(newProps) {
        if(this.props.currentPage !== newProps.currentPage) {
            this.props.fetchBikes(newProps.currentPage)            
        }
    }
    render() {
        const {isLoading, list, currentPage, maxPages} = this.props;
        return (
            <div>
                <Snackbar open={!isLoading}
                          message={`Page ${currentPage} of ${maxPages}`}/>
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
                {!isLoading && (
                    <div className="page-actions">
                        <Button dense raised color="primary" className="action" onClick={this.previousPage}>Previous</Button>
                        <Button dense raised color="primary" className="action" onClick={this.nextPage}>Next</Button>
                    </div>
                )}
            </div>
        );
    }
}

export default Bikes;