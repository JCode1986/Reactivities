import { observable, action } from 'mobx';
import { createContext } from 'react';
import { IActivity } from '../models/activity';
import agent from '../api/agent';


class ActivityStore {
    @observable activities: IActivity[] = [];
    @observable loadingInitial = false;

    @action loadActivities = () => {
        //MobX can mutate states unlike Redux
        this.loadingInitial = true;
        agent.Activities.list()
            .then(activities => {
                activities.forEach(activity => {
                    activity.date = activity.date.split('.')[0];
                    this.activities.push(activity);
                })
                //after activities received
            }).finally(() => this.loadingInitial = false);
        //add second parameter (empty array) to ensure useEffect runs one time only and does not continously run
        //will send component into a loop without a second parameter
    }
}

//use store inside react components by using react context API
// make sure createContext is from React
export default createContext(new ActivityStore())