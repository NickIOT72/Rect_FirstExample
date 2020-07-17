import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) => {
        //console.log('sUBMITTING');
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
        //this.target.value = '';
        this.setState({
            [e.target.name]:''
        })
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
     }

    render() {
        //console.log(this.props);
        return (
            <form onSubmit={this.onSubmit} >
                <input name="title" type="text" placeholder="Write a Task" onChange={this.onChange} />
                <br/>
                <br/>
                <textarea name = "description" placeholder="Write a Component" onChange={this.onChange} ></textarea>
                <button type="submit">
                    Send
                </button>
            </form>
        )
    }

}