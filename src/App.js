import { useState } from 'react';
import { createPortal } from 'react-dom';
import Alert from './components/Alert.js';
import Card from "./components/Card";
import Navbar from './components/Navbar.js';
let shareAlert =document.getElementById('share-alert')
export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    { 
      showModal && createPortal(
        <Alert onClose={() => setShowModal(false)} />,
        shareAlert
      )
    }
    <Navbar />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card onClick={() => setShowModal(true)} />
        <Card onClick={() => setShowModal(true)} />
        <Card onClick={() => setShowModal(true)} />
      </div>

      
    </>
  );
}
