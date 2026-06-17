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