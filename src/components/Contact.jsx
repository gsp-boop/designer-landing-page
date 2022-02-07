import React from "react";
import "../styles/contact.css"
class Contact extends React.Component {

    
    render(){
        return (
            <div className="contact-section" id="contact-section">
                <h2 className="contact-header">Contact</h2>
                <form action="https://formsubmit.co/gsp741@hotmail.com" method="POST">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email Address" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="5" rows="5"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }

}



export default Contact;