import {testResult} from '../../actions';
import store from '../../store';

export default function handleResult(result) {
  const {msg, change} = result;
  console.log({
    msg,
    passed: change > 0,
  });
}
