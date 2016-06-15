import * as ReactDOM from 'react-dom';

const Side = {
  root: null,
  init() {
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'crb');
    return this.root;
  },
  unmount() {
    ReactDOM.unmountComponentAtNode(this.root);
  }
};
export default Side;
