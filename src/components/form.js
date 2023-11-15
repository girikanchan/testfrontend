import React from 'react';
import './form.css'; // Assuming your stylesheet is in the same directory

const Form = () => {
  return (
    <div className="testimonials">
      {/* CARD 1 START */}
      <div className="card">
        <div className="layer"></div>
        <div className="cardheading">
          <h3>Hours of Operation</h3>
        </div>
        <div className='timming'>
          <h3>MON - FRI</h3>
          <h4>9:00am - 1:00pm</h4>
          <h4>4:00pm - 10:30pm</h4>
          <hr></hr>
          <h3>SAT</h3>
          <h4>3:00pm - 10:30pm</h4>
          <hr></hr> 
          <h3>SUN</h3>  
          <h4>We are closed</h4>
        </div>
        <div className="cardf-button">
          <button>MAKE A RESERVATION</button>
        </div>
      </div>
      {/* CARD 1 END */}

      {/* CARD 2 START */}
      <div className="card">
        <div className="layer"></div>
        <div className="cardheading">
          <h3>Drop Us a Line</h3>
          <p>Don't be shy. Let us know if you have any<br />questions!</p>
        </div>
        <div className="cardsf-button">
          <button>CONTACT US</button>
        </div>

        <div className="nheading">
          <h3>Our Newsletter</h3> 
          <p>Dialogue is an essential part of any script</p>  
        </div>      
        <div className='form'>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <button>CONTACT US</button>
          </form>
        </div>
      </div>
      {/* CARD 2 END */}
    </div>
  );
};

export default Form;
