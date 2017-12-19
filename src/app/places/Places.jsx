import React, { Component } from 'react';
import Card from '@common/card';
import { CircularProgress } from '@mui/Progress';
import Snackbar from '@common/snackbar';


class Places extends Component {
    componentWillMount() {
        this.props.fetchPlaces()
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
                            list.map(place => {
                                return (
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 card-wrap" key={place.id}>
                                        <Card {...place}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                )}
                {( 
                    <Snackbar 
                        open={!isLoading}
                        message={'Loaded '+list.length+' places.'}
                    />
                )}
            </div>
        );
    }
}

export default Places;