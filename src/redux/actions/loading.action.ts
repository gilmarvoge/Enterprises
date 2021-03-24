import { loadingConstant } from '../constants';

const startLoading = (id: string, message: string) => ({
  type: loadingConstant.START_LOADING,
  id,
  message
});

const stopLoading = (id: string) => ({
  type: loadingConstant.STOP_LOADING,
  id
});

export const loadingAction = {
  startLoading,
  stopLoading,
};
