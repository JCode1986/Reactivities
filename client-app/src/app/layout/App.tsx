import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container, Input } from 'semantic-ui-react'
import { IActivity } from '../../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

//component takes in props and state
const App = () => {
    //hook state- [array with state, and function to set state] = initial state with object type
    const [activities, setActivities] = useState<IActivity[]>([]);

    // `|` union type
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

    //function to handle selected activity; will be passed down to activity list
    //activity dashboard will act as middle man
    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.filter(a => a.id === id)[0])
    }

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
                  <ActivityDashboard
                      activities={activities}
                      selectActivity={handleSelectActivity}
                      selectedActivity={selectedActivity}
                  />
              </Container>
        </Fragment>
      );
}

export default App;
