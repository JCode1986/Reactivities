import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'
import { IActivity } from '../../models/activity';

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
          <div>
              <Header as='h2'>
                  <Icon name='users' />
                  <Header.Content>Reactivities</Header.Content>
              </Header>
              <List>
                  {activities.map((activity) => (
                      <List.Item key={activity.id}>{activity.title}</List.Item>))}
              </List>
        </div>
      );
}

export default App;
