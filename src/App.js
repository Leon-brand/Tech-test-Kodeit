import './index.css'
import { useState } from 'react';
import Navbar from  './components/Navbar';
import Sidebar from './components/Sidebar';
import Form from  './components/Form';
import Modal from './components/Modal';

function App() {

  const [modalData, setModalData] = useState(null);

  const handleFormSubmit = (data) => {
    setModalData(data);
  }

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Form onFormSubmit={handleFormSubmit} />
      </div>
      {modalData && <Modal data={modalData} />}
    </div>
  );
}

export default App;
