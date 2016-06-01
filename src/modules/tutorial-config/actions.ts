import {TUTORIAL_CONFIG_SAVE} from './types';

export function tutorialConfigSave(config: Tutorial.ConfigSet) {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_CONFIG_SAVE, payload: { config, dir } });
  };
}
