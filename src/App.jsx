import Footer from './Footer.jsx'
import Header from './Header.jsx'
import BashCard from './cards/BashCard.jsx'
import PythonCard from './cards/PythonCard.jsx'
import BurpCard from './cards/BurpCard.jsx'
import CCard from './cards/CCard.jsx'
import CPPCard from './cards/CPPCard.jsx'
import MySQLCard from './cards/MySQLCard.jsx'
import NMapCard from './cards/NMapCard.jsx'
import Line from './Line.jsx'
import pythonLogo from '../public/python-svgrepo-com.svg'
import './App.css'




function App (){
  return(
    <>
      <h1>TEST!</h1>
      <a href="https://python.org" target="_blank">
          <img src={pythonLogo} className="logo" alt="Python logo" />
      </a>

      <Header/>
      
      <BashCard/>
      <PythonCard/>
      <BurpCard/>
      <CCard/>
      <CPPCard/>
      <MySQLCard/>
      <NMapCard/>
      <Line/>
      <Footer/>
      
    </>
  )
}
export default App