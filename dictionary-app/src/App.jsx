//------------step-01: import and state setup----------------

import useState from 'react';

export default function App() {

  //what the user is typing right now
  const [word,setWord] = useState('')

  //data we get back from the api
  const [result,setResult] = useState(null)

  //true if we are waiting for the api to respond
  const [loading,setLoading] = useState(false)

  //a message to show if something goes wrong
  const [error,setError] = useState('')
}


//------------step-02: search function----------------

//this function run when the user clicks the search button
const searchWord = async () => {

  //if the user hasn't typed anything, do nothing
  if (!word.trim()) return;

  //clear previous results and show loading state
  setResult(null);
  setError('');
  setLoading(true);

  try {
    //build the api url with the word the user typed
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    //send request and wait for response
    const response = await fetch(url);

    //if word not found, the api returns 404 status
    if (!response.ok) {
      throw new Error('Word not found. Try another word.');
    }

    //convert the response to javascript object(json)
    const data = await response.json();

    //store the result in state
    setResult(data[0]);
  }catch(err){
    //if something goes wrong, show an error message
    setError(err.message)
  }
}