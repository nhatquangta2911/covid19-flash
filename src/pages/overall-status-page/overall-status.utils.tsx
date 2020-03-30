import { OverallStatusAPIModel } from '../../models/overall-status';

export const convertToOverallDisplayData = (
  data: any
): OverallStatusAPIModel => {
  return {
    confirmed: data?.confirmed?.value,
    recovered: data?.recovered?.value,
    deaths: data?.deaths?.value,
    lastUpdate: data?.lastUpdate
  } as OverallStatusAPIModel;
};
