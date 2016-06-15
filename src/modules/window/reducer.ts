import {WINDOW_TOGGLE, QUIT} from './types';
import {topElement} from '../../components/TopPanel';

export default function windowToggle(
  open = false, action: Action
): boolean {
  switch (action.type) {

    case QUIT:
      // TODO: deactivate
      return false;

    case WINDOW_TOGGLE:
      // toggle top panel
      if (open) {
        topElement.toggle(false);
      } else if (!open && action.payload.route === 'page') {
        topElement.toggle(true);
      }
      return !open;

    default:
      return open;
  }
}
