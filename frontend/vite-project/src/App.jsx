import { useState } from 'react'
import FormMain from './form-pages/FormMain.jsx';


function App() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [chats, setChats] = useState([]);

  
  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;

    let msgs = chats;
    msgs.push({content: message, second:message2 });
    setChats(msgs);

    setMessage("");

    console.log(message);

    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="App">
      <FormMain/>
    </div>
  );
}

export default App
