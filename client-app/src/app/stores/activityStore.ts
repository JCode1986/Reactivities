import { observable } from 'mobx';
import { createContext } from 'react';

class ActivityStore {
    @observable title = 'Hello from mobx'
}

//use store inside react components by using react context API
// make sure createContext is from React
export default createContext(new ActivityStore())