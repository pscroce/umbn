import React from 'react';
import SubscribeFrom from "react-mailchimp-subscribe";

//https://www.npmjs.com/package/react-mailchimp-subscribe

const formProps = {
  action: "https://prizoners.us9.list-manage.com/subscribe/post?u=d66d8c5d1ef09114cf8c27ccb&id=3c7edc9b14",
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
};

function EmailModal(props) {
  return (
    <div>
      <SubscribeFrom {...formProps} />
    </div>
  )
}

export default EmailModal;
