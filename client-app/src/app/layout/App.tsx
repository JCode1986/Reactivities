import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App: React.FC<RouteComponentProps> = ({ location }) => {
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
              <Route exact path='/' component={HomePage} />
              <Route path={'/(.+)'}
                  render={() => (
                  <Fragment>
                  <NavBar /> 
                  <Container style={{ marginTop: '7em' }}>
                      <Route exact path='/activities' component={ActivityDashboard} />
                      <Route path='/activities/:id' component={ActivityDetails} />
                      <Route
                          //whenever location key changes when creating or updating activity, component will re-initialize 
                          key={location.key}
                          path={['/createActivity', '/manage/:id']}
                          component={ActivityForm}
                      />
                      </Container>
                  </Fragment>
              )} 
           />
        </Fragment>
      );
}

//observer is a higher order component
//this will allow the component to observe the observable from the store
//App component will have now access to location properties
export default withRouter(observer(App));
