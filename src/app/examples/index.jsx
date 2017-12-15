import React, { Component } from 'react';
import { connect} from 'react-redux';

class Examples extends Component {

    processMatchParams({ match }) {
        
    }

    componentWillMount() {
        this.processMatchParams(this.props);                
    }
    componentWillReceiveProps(nextProps) {
        this.processMatchParams(nextProps);
    }
    render() {
        const { match } = this.props;
        let template = null;
        switch(match.params.type) {
            case 'css':
                template = <h1 className="style-css">CSS styles...</h1>;
                break;
            case 'less':
                template = <h1 className="style-less">LESS styles...</h1>;
                break;
            case 'sass':
                template = <h1 className="style-sass">SASS styles...</h1>; 
                break;
            case 'assets':
                template = <div className="assets"><img src="assets/image.svg"/> Image from assets...</div>; 
                break;
        }
        return template;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { }
}

const mapDispatchToProps = dispatch => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Examples);