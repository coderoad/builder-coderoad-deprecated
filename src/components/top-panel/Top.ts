import * as ReactDOM from 'react-dom';

const Top = {
  top: null,
  init: (): HTMLElement => {
    this.top = document.createElement('div');
    this.top.setAttribute('id', 'crb-top');
    this.top.style.height = '33px';
    this.top.style.border = 'solid 2px yellow';
    return this.top;
  },
  unmount: () => {
    ReactDOM.unmountComponentAtNode(this.root);
  }
};
export default Top;
