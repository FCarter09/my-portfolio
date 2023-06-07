
import '../../App.css';
import '../../index.css'

function ContactForm() {

    // JSX
    return (
        <section>
          <h1 class='page-header'>Contact me</h1>
          <form id="contact-form" >
           <div className="field">
            <label  htmlFor="name"> Phone:</label>
            <p className='contact-info'>434-547-7528</p> 
           </div>
           <div className="field">
            <label htmlFor="email">Email Address:</label>
            <p className='contact-info'>fc_vstate@yahoo.com</p> 
           </div>
           <div className="field">
            <label htmlFor="LinkedIn">My Profile:</label>
            <a className='contact-info' href='https://www.linkedin.com/in/forest-carter-375a31257/'>Visit on LinkedIn</a>  
           </div>
           
          </form>
        </section>
      );
}

    
    export default ContactForm;