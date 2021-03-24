import { enterprisesConstant } from '../constants';

const enterprisesRequest = () => ({
  type: enterprisesConstant.ENTERPRISE_REQUEST,
});

const enterprisesRequestFilter = (enterpriseType: string, name: string) => ({
  type: enterprisesConstant.ENTERPRISES_FILTER_REQUEST,
  enterpriseType,
  name
});

const enterprisesClearFilter = () => ({
  type: enterprisesConstant.ENTERPRISES_FILTER_CLEAR,
});

const enterprisesRequestDetails = (id: string) => ({
  type: enterprisesConstant.ENTERPRISES_DETAILS_REQUEST,
  id
});

export const enterprisesAction = {
  enterprisesRequest,
  enterprisesRequestFilter,
  enterprisesClearFilter,
  enterprisesRequestDetails
};
