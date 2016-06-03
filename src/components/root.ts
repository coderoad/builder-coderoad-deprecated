import * as ReactDOM from 'react-dom';

const Root = {
  root: null,
  init: (): HTMLElement => {
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'crb');
    return this.root;
  },
  unmount: () => {
    ReactDOM.unmountComponentAtNode(this.root);
  }
};
export default Root;
