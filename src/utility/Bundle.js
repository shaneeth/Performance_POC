import { Component } from 'react';

class Bundle extends Component {
  constructor(props) {
    super(props);

    this.state = {
        mod: null
    };
    this.__mounted = false;
  }

  componentWillMount() {
    this.__mounted = true;
    this.load(this.props);
  }

  componentWillUnmount() {
    this.__mounted = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load({ load }) {
    if (!this.__mounted) {
      return;
    }

    this.setState({
      mod: null
    });

    const loaded = mod => {
      if (!this.__mounted) {
        return;
      }

      this.setState({ mod: mod.default ? mod.default : mod });
    };

    load(loaded);
  }

  render() {
    return this.state.mod&&this.props.children(this.state.mod)||null;
  }
}

export default Bundle;