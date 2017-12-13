import React, { Component } from 'react';
import { connect} from 'react-redux';
import { actionChangeTitle } from '../header/actions'
import headerConstants from '../header/constants';

class Examples extends Component {

    processMatchParams({ match }) {
        this.props.changeHeaderMenu(headerConstants.MENU_MAP[match.params.type]); 
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
    return {
        changeHeaderMenu: (name)=> dispatch(actionChangeTitle(name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Examples);