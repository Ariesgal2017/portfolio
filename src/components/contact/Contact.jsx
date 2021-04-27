import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  
  // const sendFormData = function() {
  //   var formData = {
  //     email: React.findDOMNode(this.refs.email).value,
  //     message: React.findDOMNode(this.refs.message).value,
  //   };

  //   var xmlhttp = new XMLHttpRequest();
  //   var _this = this;
  //   xmlhttp.onreadystatechange = function(){
  //     if(xmlhttp.readyState === 4){
  //       var response = JSON.parse(xmlhttp.responseText);
  //       if (xmlhttp.status === 200 && response.status === 'OK'){
  //         _this.setState({ type: 'success'})
  //       }
  //       else{
  //         _this.setState({ type:'error'})
  //       }
  //     }
  //   };
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('heading').scrollIntoView();
    this.setState({type: 'info', message:'sending...'}, this.sendFormData);
    setMessage(true);
    
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/pdx.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}