import React, { useState, useEffect, Fragment, SyntheticEvent, useContext } from 'react';
import { Container } from 'semantic-ui-react'
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';

//component takes in props and state
const App = () => {
    //bring in activity store
    const activityStore = useContext(ActivityStore);

    //hook state- [array with state, and function to set state] = initial state with object type
    const [activities, setActivities] = useState<IActivity[]>([]);

    // state for specific activity; `|` union type
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

    // state property for edit mode; if using a boolean, no need to specify type
    const [editMode, setEditMode] = useState(false);

    //loading
    const [loading, setLoading] = useState(true);

    //submit loading
    const [submitting, setSubmitting] = useState(false);

    const [target, setTarget] = useState('');

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
        setSubmitting(true);
        agent.Activities.create(activity).then(() => {
            setActivities([...activities, activity]);
            setSelectedActivity(activity);
            setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleEditActivity = (activity: IActivity) => {
        setSubmitting(true);
        agent.Activities.update(activity).then(() => {
            setActivities([...activities.filter(a => a.id !== activity.id), activity])
            setSelectedActivity(activity);
            setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleDeleteActivity = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setSubmitting(true);
        setTarget(event.currentTarget.name)
        agent.Activities.delete(id).then(() => {
            setActivities([...activities.filter(a => a.id !== id)])
        }).then(() => setSubmitting(false))
    }

    //3 component life cycle methods in one
    //hook effect takes in a function
    useEffect(() => {
       //use activity store to access functions
        activityStore.loadActivities();
        //dependency array
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

      return (
          <Fragment>
              <NavBar openCreateForm={handleOpenCreateForm}/> 
              <Container style={{ marginTop: '7em' }}>
                  <ActivityDashboard
                      activities={activityStore.activities}
                      selectActivity={handleSelectActivity}
                      selectedActivity={selectedActivity}
                      editMode={editMode}
                      setEditMode={setEditMode}
                      setSelectedActivity={setSelectedActivity}
                      createActivity={handleCreateActivitity}
                      editActivity={handleEditActivity}
                      deleteActivity={handleDeleteActivity}
                      submitting={submitting}
                      target={target}
                  />
              </Container>
        </Fragment>
      );
}

//observer is a higher order component
//this will allow the component to observer the observable from the store
export default observer(App);
