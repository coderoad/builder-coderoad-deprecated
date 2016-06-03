import * as ReactDOM from 'react-dom';

const Top = {
  top: null,
  init: (): HTMLElement => {
    this.top = document.createElement('div');
    this.top.setAttribute('id', 'crb-top');
    this.top.style.height = '33px';
    this.top.hidden = true;
    return this.top;
  },
  toggle: (open?: boolean) => {
    this.top.hidden = open || !this.top.hidden;
  },
  unmount: () => {
    ReactDOM.unmountComponentAtNode(this.root);
  }
};
export default Top;