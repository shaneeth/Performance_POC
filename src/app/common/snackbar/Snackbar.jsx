import React, { Component } from 'react';
import Snackbar from '@mui/Snackbar';


class CustomSnackBar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            ...props
        } 
        this.handleClose = this.handleClose.bind(this)
    }
    componentWillReceiveProps(newProps){
        this.setState({
            ...newProps
        });
    }
    handleClose(a, b) {
        this.setState({
            open: false
        });        
    }
    render() {
        return (
            <Snackbar 
                anchorOrigin = {{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                autoHideDuration = {3000}
                onRequestClose = {this.handleClose}
                {...this.state}
            />
        );
    }
}

export default CustomSnackBar;