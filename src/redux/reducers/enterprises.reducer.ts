import { enterprisesConstant } from '../constants';

const enterprisesState = {
  enterprises: [],
  enterprisesFilter: [],
  enterprisesDetails: {},
};

const enterprises = (state = enterprisesState, action: any) => {

  const { enterprises, enterprisesFilter, enterprisesDetails } = action;

  switch (action.type) {
    case enterprisesConstant.ENTERPRISES_SET:
      return {
        ...state,
        enterprises: [...enterprises]
      };

    case enterprisesConstant.ENTERPRISES_FILTER_SET:
      return {
        ...state,
        enterprisesFilter: [...enterprisesFilter]
      };

    case enterprisesConstant.ENTERPRISES_DETAILS_SET: {
      return {
        ...state,
        enterprisesDetails: { ...enterprisesDetails }
      };
    }

    case enterprisesConstant.ENTERPRISES_FILTER_CLEAR: {
      return {
        ...state,
        enterprisesFilter: []
      };
    }

    default:
      return state;
  }
}

export default enterprises;
