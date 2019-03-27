import React, { Component } from 'react';
import Tour from 'react-user-tour';
import './UserOnBoarding.css'

export default class UserOnBoarding extends Component {
  state = {
    isTourActive: true,
    tourStep: 0
  };

  constructor(props) {
    super(props);
    setTimeout(() => this.setState({ tourStep: 1 }), 1000)
  }

  nextStep = () => this.setState({ tourStep: this.state.tourStep + 1 });
  
  previousStep = () => this.setState({ tourStep: this.state.tourStep - 1 });

  handleCancel = () => this.setState({ isTourActive: false });

  test = <div>CLOSE</div>

  render() {
    const { isTourActive, tourStep } = this.state;

    return (
      <div id='main-tour'>
        <Tour
          active={isTourActive}
          step={tourStep}
          onNext={this.nextStep}
          onBack={this.previousStep}
          onCancel={this.handleCancel}
          closeButtonText={this.test}
          arrowColor='#dddddd'
          steps={[
            {
              step: 1,
              selector: '#logo',
              title: <div style={{ color: 'blue' }}>MyEH</div>,
              body: <div style={{ color: 'green' }}>Site's logo to go back to home page</div>,
              position: 'right'
            },
            {
              step: 2,
              selector: '#manage-coverage',
              title: <div style={{ color: 'blue' }}>Manage</div>,
              body: <div style={{ color: 'green' }}>Manage my covers</div>
            },
            {
              step: 3,
              selector: '#request-coverage',
              title: <div style={{ color: 'blue' }}>Request</div>,
              body: <div style={{ color: 'green' }}>Request my covers</div>
            },
            {
              step: 4,
              selector: '#eolis',
              title: <div style={{ color: 'blue' }}>Eolis</div>,
              body: <div style={{ color: 'green' }}>Go to Eolis</div>,
              position: 'top'
            }
          ]}
        />
      </div>
    );
  }
}
