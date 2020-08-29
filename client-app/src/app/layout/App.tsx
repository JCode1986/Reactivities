import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IActivity } from '../../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

//component takes in props and state
const App = () => {
    //hook state- [array with state, and function to set state] = initial state with object type
    const [activities, setActivities] = useState<IActivity[]>([]);

    //3 component life cycle methods in one
    //hook effect takes in a function
    useEffect(() => {
        //get activities
        axios.get<IActivity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                //populates state and set state (activities)
                setActivities(response.data)
            })
        //add second parameter (empty array) to ensure useEffect runs one time only and does not continously run 
        //will send component into a loop without a second parameter
    }, []);

      return (
          <Fragment>
              <NavBar /> 
              <Container style={{marginTop: '7em'}}>
                  <ActivityDashboard activities={activities} />
              </Container>
        </Fragment>
      );
}

export default App;
