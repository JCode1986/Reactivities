import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

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
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/activities' component={ActivityDashboard} />
                  <Route path='/activities/:id' component={ActivityDetails} />
                  <Route path='/createActivity' component={ActivityForm} />
              </Container>
        </Fragment>
      );
}

//observer is a higher order component
//this will allow the component to observe the observable from the store
export default observer(App);
