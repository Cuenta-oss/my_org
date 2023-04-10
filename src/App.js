import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import { MiOrg } from './components/miOrg/miOrg';
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(true);

  const changeShow = () => {
    setShowForm(!showForm);
  }
  return (
    <div className="App">
      <Header />
      {showForm ? <Form /> : <></>}
      {/* <Form /> */}
      <MiOrg changeShow={changeShow} />
    </div>
  );
}

export default App;
