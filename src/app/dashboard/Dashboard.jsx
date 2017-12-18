import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/ButtonBase';
import { CircularProgress } from '@mui/Progress';
import './styles';

class Dashboard extends Component {
    constructor() {
        super()
        this.classes = ['c-red', 'c-green', 'c-purple', 'c-orange']
        this.mapTypes = {
            all: '/all',
            place: '/places',
            donut: '/donuts',
            bike: '/bikes'
        }
    }
    mapTypeToLink(type) {
        return this.mapTypes[type]        
    }        
    generateClasses(index) {
        return this.classes[index%4]
    }
    componentWillMount() {
        this.props.fetchDetails()
    }
    render() {
        const {isLoading , list} = this.props;
        return (
            <div className="dashboard">
                {isLoading && (
                    <div className="page-loading">
                        <CircularProgress className="loading" size={65} thickness={3}/>
                    </div>
                )}
                {!isLoading && (<div className="row">
                    {
                        list.map((stat, index) => {
                            return (
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                                    <Link to={this.mapTypeToLink(stat.type)}>
                                        <ButtonBase className={'stat ' + this.generateClasses(index)}>
                                            <div className="count">{stat.count}</div>
                                            <div className="title">{stat.title}</div>
                                        </ButtonBase>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>)}
            </div>
        );
    }
}

export default Dashboard;
