import React, {Component} from 'react';

export default class TaskForm extends Component {

    onSubmit = (e) => {
        console.log('sUBMITTING');
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input type="text" placeholder="Write a Task"/>
                <br/>
                <br/>
                <textarea placeholder="Write a Component"></textarea>
                <button type="submit">
                    Send
                </button>
            </form>
        )
    }

}