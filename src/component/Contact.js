import React, { useState, useEffect } from 'react';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');

    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Massage', msg);
    };

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
      }, [name]);


    //   useEffect(() => {
    //     const name = JSON.parse(localStorage.getItem('name'));
    //     if (name) {
    //         setName(name);
    //     }
    //   }, []);
    
    return (
        <section className="contactWrap sectionPadding"  id='contact'>
            <div className="container">
                <div className="sectionTitleWrap textCenter titleSpace">
                    <h2>Contact Us </h2>
                </div>
                <div className="contactForm">
                    <div className="formGroup">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="formGroup fullWidth">
                        <textarea type="text" placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    </div>
                    <div className="formGroup fullWidth">
                        <button type="button" className="primaryBtn" onClick={handle}>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;