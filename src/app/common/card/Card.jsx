import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from '@mui/Card';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/Dialog';
import Button from '@mui/Button';
import Typography from '@mui/Typography';
import './styles';

class CustomCard extends Component {
    constructor() {
        super()
        this.state = {
            isDialogOpen: false
        }
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
    }
    openDialog() {
        this.setState({
            isDialogOpen: true
        })
    }
    closeDialog() {
        this.setState({
            isDialogOpen: false
        })
    }
    render() {
        const {
            title = 'Title', 
            desc = 'Description',
            imageUrl = 'assets/image.svg'
        } = this.props;
        return (
            <div>
                <Card>
                    <CardMedia 
                        className = "card-media"
                        image={imageUrl || 'assets/image.svg'} />
                    <CardContent>
                        <Typography type="headline" component="h2">
                            {title}
                        </Typography>
                        <Typography component="div" className="card-desc">
                            {desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button dense color="primary" onClick={this.openDialog}>Learn More</Button>
                    </CardActions>
                </Card>
                <Dialog open={this.state.isDialogOpen}
                        onClose={this.closeDialog}
                        onBackdropClick={this.closeDialog}
                        onEscapeKeyUp={this.closeDialog}>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{desc}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button dense color="primary" onClick={this.closeDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomCard;