function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        I am open to learning opportunities, collaboration, and frontend
        development projects. Feel free to contact me through the links below.
      </p>

      <div className="contact-links">
        <a href="https://github.com/AbdalazizHweidi" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="mailto:abdalazizhweidi@gmail.com">
          Email Me
        </a>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;