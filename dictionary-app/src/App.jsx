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
}