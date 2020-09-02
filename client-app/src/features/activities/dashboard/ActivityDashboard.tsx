import React from 'react';
import { Grid } from 'semantic-ui-react';
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
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean
}

//React.FC<IProps> is a type; argrument is deconstructed and activies can be accessed without acessing props first
const ActivityDashboard: React.FC<IProps> = ({
    activities,
    selectActivity,
    selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity,
    createActivity,
    editActivity,
    deleteActivity,
    submitting
}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />

            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (
                    <ActivityDetails
                        activity={selectedActivity}
                        setEditMode={setEditMode}
                        setSelectedActivity={setSelectedActivity}
                    />
                )}
                {editMode && <ActivityForm
                    key={selectedActivity && selectedActivity.id || 0}
                    setEditMode={setEditMode}
                    activity={selectedActivity!}
                    createActivity={createActivity}
                    editActivity={editActivity}
                    submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
    );
}

export default ActivityDashboard;