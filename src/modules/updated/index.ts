const TUTORIAL_UPDATED = 'TUTORIAL_UPDATED';

export function tutorialUpdated(isUpdated = false) {
  return { type: TUTORIAL_UPDATED, payload: { isUpdated } };
}

export function reducer(isUpdated = false, action: Action): boolean {
  switch (action.type) {
    case TUTORIAL_UPDATED:
      return action.payload.isUpdated;
    default:
      return isUpdated;
  }
}
