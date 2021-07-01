import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com';

import './Contact.scss'

import correio from '../../../assets/images/correio.jpg'
import {Snackbar} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

const Contact = () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(false);
    const [sending, setSending] = useState(false);
    const [name, setName] = useInput('')
    const [subject, setSubject] = useInput('')
    const [email, setEmail] = useInput('')
    const [message, setMessage] = useInput('');
    const [severity, setSeverity] = useState('');
    const [severityMessage, setSeverityMessage] = useState('');

    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);

            if (!isScriptExist) {
                let script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }

            if (isScriptExist && callback) callback();
        }

        // load the script by passing the URL
        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`, function () {
            console.log("Script loaded!");
        });
    }, []);

    useEffect(() => {
        function handleEmail() {
            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
            };
            // process.env.REACT_APP_SERVICE_ID
            // process.env.REACT_APP_TEMPLATE_ID
            // process.env.REACT_APP_USER_ID
            emailjs.send(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAIL_USER_ID,
                process.env.REACT_APP_EMAIL_TOKEN
            ).then((result) => {
                setSending(false)
                setLoading(false)
                return result.text
            }, (error) => {
                setLoading(false);
                setResponse(false);
                setSending(false);
                return error.text
            })
                .then((res) => {
                    if (res === 'OK') {
                        setSeverity('success')
                        setSeverityMessage('Message sent. I will reply as soon as possible! Thank you!')
                        handleOpen('success', 'Message sent. I will reply as soon as possible! Thank you!')
                    }
                    else {
                        setSeverity('error')
                        setSeverityMessage('An error occurred. Please try again later.')
                        handleOpen('error', 'An error occurred. Please try again later.')
                    }
                });
        }

        if (response && loading) {
            // console.log('sending email')
            handleEmail()
        }

    }, [response, setResponse]);

     function useInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return [value, handleChange];
    }

    function handleReCaptcha(token) {
        // call a backend API to verify reCAPTCHA response
        fetch('http://localhost:5000/verify', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "token": token
            })
        }).then(res => res.json())
            .then(res => {
                if (res.response === true) {
                    setResponse(true)
                    setSending(true)
                } else {
                    setLoading(false);
                    setResponse(false);
                    setSending(false);
                }
            }).catch((err) => {
            console.log(err)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(process.env.REACT_APP_SITE_KEY, {action: 'submit'})
                .then(token => {
                    handleReCaptcha(token);
                })
        });
        e.target.reset()
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    };

    const handleOpen = (severity, severityMessage) => {
        setOpen(true);
        setSeverity(severity);
        setSeverityMessage(severityMessage)
    }

    return (
        <div id="contact" className="contact">
            <div className="alertContainer">
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert variant="filled" onClose={handleClose} severity={severity}>
                        {severityMessage}
                    </Alert>
                </Snackbar>
            </div>
            <div className="container">
                <div className="left">
                    <img src={correio} alt={'correio'} title={'Mail'}/>
                </div>
                <div className="right">
                    <div className="formContainer">
                        <form onSubmit={handleSubmit}>
                            <input type={'text'} placeholder={'Name'} title={'Name'} id={'name'} name={'name'}
                                   onChange={setName}/>
                            <input type={'text'} placeholder={'Subject'} title={'Subject'} id={'subject'}
                                   name={'subject'}
                                   onChange={setSubject}/>
                            <input type={'email'} placeholder={'Email'} title={'Email'} id={'email'}
                                   name={'email'} onChange={setEmail}/>
                            <textarea placeholder={'Message'} title={'Message'} id={'message'} name={'message'}
                                      onChange={setMessage}/>
                            <div className="googlePrivacy">
                                <p>
                                    This site is protected by reCAPTCHA and the Google <span>
                                    <a href="https://policies.google.com/privacy"
                                       target="_blank"
                                       rel="noopener noreferrer">Privacy Policy</a></span> and <span>
                                    <a
                                        href="https://policies.google.com/terms" target="_blank"
                                        rel="noopener noreferrer">Terms of Service</a></span> apply.
                                </p>
                            </div>
                            <button title={'Send Message'}
                                    name={'formButton'}
                                    disabled={loading}>{loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
