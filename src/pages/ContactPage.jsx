import React from 'react';
import { Prompt } from 'react-router-dom'
import '../styles/contactPage.css';

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

class Contact extends React.Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <ScrollIntoViewIfNeeded options={{
                block: 'nearest',
                behavior: 'smooth'
            }}>
                <div className="contact" >
                    <form>
                        <h3 style={{ padding: 12 }}>Write us a message: </h3>
                        <textarea onChange={this.handleChange} value={this.state.value}></textarea>
                        <button onClick={this.handleSubmit}><span>Send</span></button>
                    </form>
                    <Prompt
                        when={this.state.value}
                        message="If you change the path you'll lose your message. Are you sure you want to quit?" />
                </div >
            </ScrollIntoViewIfNeeded>
        );
    }
}

export default Contact;
