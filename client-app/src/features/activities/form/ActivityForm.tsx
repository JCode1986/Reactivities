import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    submitting: boolean;
}

const ActivityForm: React.FC<IProps> = ({
    setEditMode,
    activity: initialFormState,
    createActivity,
    editActivity,
    submitting
}) => {

    //return activity if it available, otherwise set properties to empty strings
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            };
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setActivity({ ...activity, [name]: value })
    } 

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
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' onChange={handleInputChange}
                    name='title' placeholder='Title'/>
                <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    );
}

export default ActivityForm;