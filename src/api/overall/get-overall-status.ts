import axios, { AxiosResponse } from 'axios';
import { OverallStatusAPIModel } from './../../models/overall-status';
import {
  OVERALL_API_CONFIG,
  APIError,
  GeneralAPIError,
  getAPIGeneralError
} from '../api-config';

export const getOverallStatusAPIError = {
  RESPONSE_FORMAT_ERROR: {
    id: 'get-overall-status-api-response-format-error'
  } as APIError,
  UNDEFINED: {
    id: 'get-overall-status-api-response-undefined'
  } as APIError
};

export const request = async (): Promise<OverallStatusAPIModel> => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${OVERALL_API_CONFIG.url}`
    );
    try {
      return response.data;
    } catch {
      throw getOverallStatusAPIError.RESPONSE_FORMAT_ERROR;
    }
  } catch (error) {
    if (!error.response) {
      throw GeneralAPIError.UNDEFINED;
    }
    if (!error.response.data) {
      throw getAPIGeneralError(error.response.status);
    }
    if (getOverallStatusAPIError.RESPONSE_FORMAT_ERROR) {
      throw getOverallStatusAPIError.RESPONSE_FORMAT_ERROR;
    }
    throw getOverallStatusAPIError.UNDEFINED;
  }
};
