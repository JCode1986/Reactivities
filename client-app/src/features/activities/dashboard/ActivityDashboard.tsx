import React, { SyntheticEvent, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore'

//required with typescript when passing down props
interface IProps {
    deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: boolean;
    target: string
}

//React.FC<IProps> is a type; argrument is deconstructed and activies can be accessed without acessing props first
const ActivityDashboard: React.FC<IProps> = ({
    deleteActivity,
    submitting,
    target
}) => {
    //bring in store
    const activityStore = useContext(ActivityStore);
    const { editMode, selectedActivity } = activityStore;
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                    target={target}
                />

            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (<ActivityDetails />)}
                {editMode && <ActivityForm
                    key={selectedActivity && selectedActivity.id || 0}
                    activity={selectedActivity!}
                />}
            </Grid.Column>
        </Grid>
    );
}

export default observer(ActivityDashboard);