import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faThreads, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const socialLinks = [
        { name: 'Facebook', icon: faFacebook, url: 'https://facebook.com/learningpowers' },
        { name: 'Twitter', icon: faTwitter, url: 'https://twitter.com/learningpowers' },
        { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/learningpowers' },
        { name: 'Threads', icon: faThreads, url: 'https://threads.net/learningpowers' },
        { name: 'LinkedIn', icon: faLinkedin, url: 'https://linkedin.com/company/learningpowers' },
        { name: 'YouTube', icon: faYoutube, url: 'https://youtube.com/learningpowers' }
    ];

    return (
        <div className="container">
            {/* <h1 className="page-title">Contact Us</h1> */}

            <div className="contact-section">
                <div className="social-links">
                    <h2>Connect With Us</h2>
                    <div className="social-icons">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <FontAwesomeIcon icon={social.icon} style={{ fontSize: '2rem', marginBottom: '0.5rem' }} />
                                <span>{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="address-section">
                <h2>At Location</h2>
                <div className="address-content">
                    <div className="address-info">
                        <p><strong>Manjit Singh Meel</strong></p>
                        <p>B.R.M. Memorial Public School</p>
                        <p>Near Meel Market, Shahidanwali</p>
                            <p>Fatehabad (125050) Haryana, India </p>

                    </div>
                    <div className="contact-info">
                        <p><strong>Email:</strong> msmeel21@gmail.com</p>
                        <p><strong>Phone:</strong> +91 98138 37172</p>
                        <p><strong>Working Hours:</strong></p>
                        <p>Monday - Friday, 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
