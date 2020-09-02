import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react'
import { IActivity } from '../../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';

//component takes in props and state
const App = () => {
    //hook state- [array with state, and function to set state] = initial state with object type
    const [activities, setActivities] = useState<IActivity[]>([]);

    // state for specific activity; `|` union type
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

    // state property for edit mode; if using a boolean, no need to specify type
    const [editMode, setEditMode] = useState(false);

    //function to handle selected activity; will be passed down to activity list
    //activity dashboard will act as middle man
    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.filter(a => a.id === id)[0]);
        setEditMode(false);
    }

    const handleOpenCreateForm = () => {
        setSelectedActivity(null);
        setEditMode(true);
    }

    const handleCreateActivitity = (activity: IActivity) => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
    }

    const handleEditActivity = (activity: IActivity) => {
        setActivities([...activities.filter(a => a.id !== activity.id), activity])
        setSelectedActivity(activity);
        setEditMode(false);
    }

    const handleDeleteActivity = (id: string) => {
        setActivities([...activities.filter(a => a.id !== id)])
}

    //3 component life cycle methods in one
    //hook effect takes in a function
    useEffect(() => {
            agent.Activities.list()
            .then((response) => {
                let activities: IActivity[] = [];
                response.forEach(activity => {
                    activity.date = activity.date.split('.')[0];
                    activities.push(activity);
                })
                //populates state and set state (activities)
                setActivities(activities)
            })
        //add second parameter (empty array) to ensure useEffect runs one time only and does not continously run 
        //will send component into a loop without a second parameter
    }, []);

      return (
          <Fragment>
              <NavBar openCreateForm={handleOpenCreateForm}/> 
              <Container style={{marginTop: '7em'}}>
                  <ActivityDashboard
                      activities={activities}
                      selectActivity={handleSelectActivity}
                      selectedActivity={selectedActivity}
                      editMode={editMode}
                      setEditMode={setEditMode}
                      setSelectedActivity={setSelectedActivity}
                      createActivity={handleCreateActivitity}
                      editActivity={handleEditActivity}
                      deleteActivity={handleDeleteActivity}
                  />
              </Container>
        </Fragment>
      );
}

export default App;
