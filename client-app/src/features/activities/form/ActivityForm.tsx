import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';
import ActivityStore from '../../../app/stores/activityStore'
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';

//route params id
interface DetailsParams {
    id: string;
}

//deconstructing from route component props
const ActivityForm: React.FC<RouteComponentProps<DetailsParams>> = ({ match, history }) => {
    const activityStore = useContext(ActivityStore);
    const {
        createActivity,
        editActivity,
        submitting,
        cancelFormOpen,
        activity: initialFormState,
        loadActivity,
        clearActivity
    } = activityStore;

    const [activity, setActivity] = useState<IActivity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    //only load activity when editing an activity
    useEffect(() => {
        if (match.params.id && activity.id.length === 0) {
            loadActivity(match.params.id).then(
                () => initialFormState && setActivity(initialFormState)
            );
        }

        return () => {
            clearActivity();
        }
        //add dependencies
    }, [loadActivity, match.params.id, clearActivity, initialFormState, activity.id.length]);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            //navigate to created activity after creating
            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
        } else {
            editActivity(activity).then(() => history.push(`/activities/${activity.id}`));
        };
    };

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setActivity({ ...activity, [name]: value })
    }; 

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    onChange={handleInputChange}
                    name='title' placeholder='Title'
                    value={activity.title} />
                <Form.TextArea
                    placeholder='Description'
                    value={activity.description}
                    onChange={handleInputChange}
                    name='description' />
                <Form.Input
                    placeholder='Category'
                    value={activity.category}
                    onChange={handleInputChange}
                    name='category' />
                <Form.Input
                    type='datetime-local'
                    placeholder='Date'
                    value={activity.date}
                    onChange={handleInputChange}
                    name='date' />
                <Form.Input
                    placeholder='City'
                    value={activity.city}
                    onChange={handleInputChange}
                    name='city' />
                <Form.Input
                    placeholder='Venue'
                    value={activity.venue}
                    onChange={handleInputChange}
                    name='venue' />
                <Button
                    loading={submitting}
                    floated='right'
                    positive type='submit'
                    content='Submit'
                    onChange={handleInputChange}
                    name='title' placeholder='Title'/>
                <Button
                    onClick={cancelFormOpen}
                    floated='right' type='submit'
                    content='Cancel' />
            </Form>
        </Segment>
    );
}

export default observer(ActivityForm);