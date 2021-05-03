import {SET_USER_PROFILE_FOR_TRAINING, GET_USER_PROFILE_FOR_TRAINING} from './constants';

export function setUserProfileForTraining (data) {
    return {
        type: SET_USER_PROFILE_FOR_TRAINING,
        payload: data
    }
}


export function getUserProfileForTraining () {
  return {
      type:GET_USER_PROFILE_FOR_TRAINING,
  }
}

