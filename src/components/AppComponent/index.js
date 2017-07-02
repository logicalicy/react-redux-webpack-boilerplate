import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import MessageContainer from 'containers/MessageContainer';
import AboutComponent from 'components/AboutComponent';
import {
    AppLink
} from './style';

const AppComponent = () => (
    <Router>
        <div>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <AppLink to="/" first>Home</AppLink>
                        <AppLink to="/about" last>About</AppLink>
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Route exact path="/" component={MessageContainer}/>
                        <Route path="/about" component={AboutComponent}/>
                    </Col>
                </Row>
            </Grid>
        </div>
    </Router>
);

export default AppComponent;
