import React from 'react';
import { Prompt } from 'react-router-dom'
import '../styles/contactPage.css';

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
            <div className="contact" >
                <form>
                    <h3>Write us a message</h3>
                    <textarea onChange={this.handleChange} value={this.state.value} placeholder="message..."></textarea>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="bottom">
                        <button onClick={this.handleSubmit}><span>Send</span></button>
                    </div>
                </form>
                <Prompt
                    when={this.state.value}
                    message="If you change the path you'll lose your message. Are you sure you want to quit?" />
            </div >

        );
    }
}

export default Contact;
