import React from 'react';
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
                    <textarea onChange={this.handleChange} value={this.state.value} placeholder="message"></textarea>
                    <button onClick={this.handleSubmit}>Send</button>
                </form>
            </div>

        );
    }
}

export default Contact;
