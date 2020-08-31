import React from 'react';
import { Grid, List, Select } from 'semantic-ui-react';
import { IActivity } from '../../../models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

//required with typescript when passing down props
interface IProps {
    activities: IActivity[];
    //pass in signature from function of 
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
}

//React.FC<IProps> is a type; argrument is deconstructed and activies can be accessed without acessing props first
const ActivityDashboard: React.FC<IProps> = ({activities, selectActivity, selectedActivity}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                />

            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && <ActivityDetails activity={selectedActivity} />}
                <ActivityForm />
            </Grid.Column>
        </Grid>
    );
}

export default ActivityDashboard;