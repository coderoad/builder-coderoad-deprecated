import store from '../../store';
import {testResult} from '../../actions';

export default function handleResult(result) {
  const {msg, change} = result;
  console.log({
    msg,
    passed: change > 0,
  });
}
