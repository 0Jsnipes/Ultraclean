import Header from "./components/Header"
import Duties from "./components/Duties"
import Article from "./components/Article"
import Footer from "../../components/Footer"
import "./styles/RoutineCleaningStyles.css"

const RoutineCleaning = () => {
  return (
    <div className=''>
        <Header/>
        <Duties />
        <Article />
        <Footer />
    </div>
  )
}

export default RoutineCleaning