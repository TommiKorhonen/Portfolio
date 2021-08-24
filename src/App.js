import './App.css';
import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header/Header';
import Main from './components/MainSection/Main';



function App() {
  const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isOpen])
  return (
    <>
    <Navbar toggle={toggle} isOpen={isOpen}/>
    <Header />
    <Main />
    
    </>
  );
}

export default App;
