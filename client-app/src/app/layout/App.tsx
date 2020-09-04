import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';

//component takes in props and state
const App = () => {
    //bring in activity store
    const activityStore = useContext(ActivityStore);

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
              <NavBar /> 
              <Container style={{ marginTop: '7em' }}>
                  <ActivityDashboard />
              </Container>
        </Fragment>
      );
}

//observer is a higher order component
//this will allow the component to observer the observable from the store
export default observer(App);
