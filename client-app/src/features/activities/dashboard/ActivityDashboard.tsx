import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { IActivity } from '../../../models/activity';
import ActivityList from './ActivityList';

//required with typescript when passing down props
interface IProps {
    activities: IActivity[]
}

//React.FC<IProps> is a type; argrument is deconstructed and activies can be accessed without acessing props first
const ActivityDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities}/>
                {/*                <List>
                    {activities.map((activity) => (
                       <List.Item key={activity.id}>{activity.title}</List.Item>))}
                </List>*/}

            </Grid.Column>
        </Grid>
    );
}

export default ActivityDashboard;