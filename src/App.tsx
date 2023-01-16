import { generatePrivateKey, getPublicKey } from 'nostr-tools/keys';
import { useState } from 'react';
import './App.css';

function App() {
  const [privateKey, setPrivateKey] = useState(localStorage.getItem('privateKey') || '');
  const [publicKey, setPublicKey] = useState(privateKey ? getPublicKey(privateKey) : '');


  const handleSubmit = () => {
    localStorage.setItem('privateKey', generatePrivateKey());
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Private Key:
          <input type="text" value={privateKey} onChange={event => setPrivateKey(event.target.value)} />
        </label>
        <button type="submit">Set Private Key</button>
        <label>
          Public Key:
          <input type="text" value={publicKey} onChange={event => setPublicKey(event.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default App
