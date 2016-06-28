import store from '../../store';
import {testResult} from '../../actions';

export default function handleResult(result) {
  console.log('handleResult', result);
  return store.dispatch(testResult(result));
}
