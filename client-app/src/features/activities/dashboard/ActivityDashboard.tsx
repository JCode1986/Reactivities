import React, { useEffect, useContext} from 'react';
import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const ActivityDashboard: React.FC = () => {
    //bring in activity store
    const activityStore = useContext(ActivityStore);
    //3 component life cycle methods in one
    //hook effect takes in a function
    useEffect(() => {
        //use activity store to access functions
        activityStore.loadActivities();
        //dependency array
    }, [activityStore]);

    if (activityStore.loadingInitial)
        return <LoadingComponent content='Loading activities...' />;
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />

            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    );
}

export default observer(ActivityDashboard);