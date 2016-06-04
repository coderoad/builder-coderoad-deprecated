import {WINDOW_TOGGLE} from './types';
import Top from '../../components/TopPanel/Top';

export default function windowToggle(
  open = false, action: Action
): boolean {
  switch (action.type) {

    case WINDOW_TOGGLE:
      // toggle top panel
      if (open) {
        Top.toggle(false);
      } else if (!open && action.payload.route === 'page') {
        Top.toggle(true);
      }
      return !open;

    default:
      return open;
  }
}
