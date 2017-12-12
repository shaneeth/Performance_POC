import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Bundle from '@utility/Bundle.js';
import './styles.css';
import './styles.less';
import './styles.sass';

import LazyLoad from '@lazy!./LazyLoad';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enable: false
        };
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                enable: true
            });
        }, 5000);
    }
    render() {
        return (
            <div>
                <h1>Normal...</h1>
                <h1 className="style-css">Style CSS...</h1>
                <h1 className="style-less">Style LESS...</h1>
                <h1 className="style-sass">Style SASS...</h1>
                <div className="assets">
                    <img src="assets/image.svg" />
                    Image from assets...
                </div>
                <RaisedButton label="Material UI" primary={true}/>
                {
                    this.state.enable&&(
                        <Bundle load={LazyLoad}>
                            {(LazyLoad)=><LazyLoad />}
                        </Bundle>
                    )
                }    
            </div>
        );
    }
}

export default App;