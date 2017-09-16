import React, { Component } from 'react';
import {FormGroup
  ,ControlLabel,FormControl,Col,Checkbox,
  Button,Form,Well} from 'react-bootstrap';

// Import global CSS
import './global-styles';

import{SignInButton,MainDiv} from './Appstyle'
const formInstance = (
  <Form horizontal style={{padding:'10px'}}>
    <FormGroup controlId="formHorizontalEmail" bsSize="large">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={8}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword" bsSize="large">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={8}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup bsSize="large">
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup >
      <Col smOffset={2} sm={10}>
        <SignInButton bsStyle="primary" bsSize="large">
          Sign in
        </SignInButton>
      </Col>
    </FormGroup>
  </Form>
);

class App extends Component {
  render() {
    return (
      <MainDiv>
        <Well bsSize="large">这是我写的一个模版,看一下App 跟Appstyle 之间的联系,css 可以通过另一种方式体现.有问题可以问问我..
          如果要说进行的下一步的话,就是设置一个样板帐号,然后登陆到聊天界面(暂时我们不考虑跳转页面)
        
        </Well>
            {formInstance}
      </MainDiv>
    );
  }
}

export default App;
