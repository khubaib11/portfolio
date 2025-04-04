import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      {/* Sections with matching IDs for react-scroll */}
      <section id="home" className='mt-30 mb-26'><Home /></section>
      <section id="about" className=' mb-16'><About /></section>
      <section id="experience" className='mb-16 '><Experience /></section>
      <section id="projects" className=' mb-10'><Projects /></section>
      <section id="courses" className='mb-26 '><Courses /></section>
      <section id="Footer" className=''><Footer /></section>
    </>
  );
}

export default App;
