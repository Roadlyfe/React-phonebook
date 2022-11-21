import { useState } from 'react';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry].sort((a, b) => a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
    )
    );
  };

  return (
    <div className="App">
      <h1 className='glow'>Phone Book App</h1>
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <DisplayEntries entries={entries} />
    </div>
  );
}

function EntryForm({addEntryToPhoneBook}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ firstName, lastName, phoneNumber })

    //reset imput fields to empty string
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input__div'>
        <input className='input'
          type='text' name='firstName' id='firstName' placeholder='First Name' value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        <input className='input'
          type='text' name='lastName' id='lastName' placeholder='Last Name' value={lastName}
          onChange={(e) => setLastName(e.target.value)} />
        <input className='input'
          type='text' name='phoneNumber' id='phoneNumber' placeholder='Phone Number' value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} />
        <button className='submit__button' type='submit'>Submit</button>
      </div>
    </form>
  )
}

function DisplayEntries({ entries }) {
  return (
    <table>
      <thead>
        <tr>
          <th className='tableHeader'>First Name</th>
          <th className='tableHeader'>Last Name</th>
          <th className='tableHeader'>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr>
            <td className='td'>{entry.firstName}</td>
            <td className='td'>{entry.lastName}</td>
            <td className='td'>{entry.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App;
