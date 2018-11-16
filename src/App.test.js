import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import sinon from 'sinon';


describe("Testing the home page",() => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Check if the app main page exist', () => {
      //Setup

      //Exercise
      const appWrapper = shallow(<App/>)
      const picture = appWrapper.find({className:'App-logo'});

      expect(picture).toHaveLength(1);
      //Assert
    });

});

