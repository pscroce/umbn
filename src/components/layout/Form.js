import React from 'react';
import Radium from 'radium';

// https://formspree.io/
function Form(props) {
  return (
    <form action="https://formspree.io/pscroce@gmail.com" method="POST">
      <input type="text" name="name" />
      <input type="email" name="_replyto" />
      <input type="submit" value="Send" />
      <input type="hidden" name="_next" value="//localhost:3000/about" />
    </form>
  )
}

const styles = {

}

export default Radium(Form);
