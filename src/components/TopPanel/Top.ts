import * as ReactDOM from 'react-dom';

const Top = {
  top: null,
  init() {
    this.top = document.createElement('div');
    this.top.setAttribute('id', 'crb-top');
    this.top.style.height = '33px';
    Top.toggle(false);
    return this.top;
  },
  toggle(open?: boolean) {
    this.top.hidden = !open;
  },
  unmount() {
    ReactDOM.unmountComponentAtNode(this.root);
  }
};
export default Top;
