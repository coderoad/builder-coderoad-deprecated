import {TUTORIAL_CONFIG_SAVE, TUTORIAL_INFO_SAVE} from './types';

export function tutorialConfigSave(config: Tutorial.ConfigSet) {
  return (dispatch, getState) => {
    const {dir} = getState();
    dispatch({ type: TUTORIAL_CONFIG_SAVE, payload: { config, dir } });
  };
}

export function tutorialInfoSave(info: Tutorial.Info) {
  return { type: TUTORIAL_INFO_SAVE, payload: { info }};
}
