import { loadingConstant } from '../constants';

const loading = (state = {}, action: any) => {

  const id = action.id

  switch (action.type) {
    case loadingConstant.START_LOADING:
      return {
        ...state,
        [id]: {
          isLoading: true,
          message: action.message
        }
      }
      
    case loadingConstant.STOP_LOADING:
      const newState = Object.keys(state).filter(key => {
        return key !== id
      })
      return { ...newState }

    default:
      return state
  }
}

export default loading;
