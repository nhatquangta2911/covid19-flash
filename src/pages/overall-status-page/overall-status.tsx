import { IOverallStatusPageProps } from './overall-status.props';
import React from 'react';
import { Statistic } from 'semantic-ui-react';
import { OverallStatusAPIModel } from '../../models/overall-status';
import { OverallAPI } from '../../api/overall/index';
import { Page } from '../page';
import { convertToOverallDisplayData } from './overall-status.utils';

export class OverallStatusPage extends React.PureComponent<
  IOverallStatusPageProps,
  {}
> {
  state = {
    overallStatusData: {} as OverallStatusAPIModel
  };

  componentDidMount = async () => {
    await this.fetchOverallStatusData();
  };

  render() {
    const { overallStatusData } = this.state;
    return (
      <Page>
        <Statistic.Group>
          <Statistic color='violet'>
            <Statistic.Value>{overallStatusData?.confirmed}</Statistic.Value>
            <Statistic.Label>Confirmed</Statistic.Label>
          </Statistic>
          <Statistic color='green'>
            <Statistic.Value>{overallStatusData?.recovered}</Statistic.Value>
            <Statistic.Label>Recovered</Statistic.Label>
          </Statistic>
          <Statistic color='red'>
            <Statistic.Value>{overallStatusData?.deaths}</Statistic.Value>
            <Statistic.Label>Deaths</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Page>
    );
  }

  fetchOverallStatusData = async () => {
    try {
      let data = await OverallAPI.getOverallStatus.request();
      const overallData = convertToOverallDisplayData(data);
      console.log(overallData);
      this.setState({
        overallStatusData: overallData
      });
    } catch (error) {
      console.log(error);
    }
  };
}
