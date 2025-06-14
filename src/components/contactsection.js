import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './ContactSection.css';

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nwwau51',         // Replace with your actual service ID
        'template_i8tbxln',        // Replace with your actual template ID
        form.current,
        'tyGKzzoLcZ-B64XQo'        // Replace with your user/public key
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message sent successfully!',
            timer: 2000,
            showConfirmButton: false,
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Failed to send!',
            text: error.text,
          });
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title" data-aos="fade-down">Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <h3>Let's Get in Touch</h3>
            <p>Feel free to reach out! I'm happy to connect and will respond as soon as I can.</p>

            <div className="info-item">
              <i className="fas fa-user"></i>
              <div>
                <strong>Name</strong>
                <p>Venkata Satya Siva Nagendrakumar Reddy</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Address</strong>
                <p>5055 Von Scheele Dr. #711, TX-78229</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <p>venkatasatyasiva.reddy@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form" data-aos="fade-left">
            <h3>Message Me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder="Your Name" required />
              <input type="email" name="email_sender" placeholder="Your Email" required />
              <input type="text" name="subject_sender" placeholder="Subject" required />
              <textarea name="message_sender" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
