import React from "react";
import Beer from "./Components/Beer/Beer";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const App = () => {
  return (
    <div className="container">
       <MessengerCustomerChat
    pageId="100202745252345"
    appId="564263663154134"
    htmlRef="<REF_STRING>"
  />,
      <Beer></Beer>
    </div>
  );
};

export default App;
