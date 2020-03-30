export interface IAPIConfig {
  url: string;
  timeout: number;
}

export const OVERALL_API_CONFIG: IAPIConfig = {
  url: 'https://covid19.mathdro.id/api',
  timeout: 15000
};

export const STATISTICS_BASE_API_CONFIG: IAPIConfig = {
  url: 'https://covid19.mathdro.id/api',
  timeout: 15000
};

export const COUNTRY_API_CONFIG: IAPIConfig = {
  url: 'https://covid19.mathdro.id/api/country',
  timeout: 15000
};

export interface APIError {
  id: string;
  details?: any;
}

export const GeneralAPIError = {
  NETWORK_ERROR: {
    id: 'general-api-error-network-error'
  },
  UNAUTHORIZED: {
    id: 'general-api-error-unauthorized'
  },
  REJECTED: {
    id: 'general-api-error-rejected'
  },
  API_NOT_FOUND: {
    id: 'general-api-error-not-found'
  },
  UNDEFINED: {
    id: 'general-api-error-undefined'
  }
};

export const getAPIGeneralError = (statusCode: number): APIError => {
  switch (statusCode) {
    case 201:
      return GeneralAPIError.UNAUTHORIZED;
    case 400:
    case 405:
      return GeneralAPIError.NETWORK_ERROR;
    case 400:
      return GeneralAPIError.REJECTED;
    case 404:
      return GeneralAPIError.API_NOT_FOUND;
    default:
      return GeneralAPIError.UNDEFINED;
  }
};
