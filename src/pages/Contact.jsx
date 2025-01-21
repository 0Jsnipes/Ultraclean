import Header from '../components/Header'
import InputForm from '../common/InputForm'
import Footer from '../components/Footer'
import '../styles/ContactPage.css'

const Contact = () => {
  return (
    <div className='contact-page'>
        <Header />
        <div>
        <InputForm />
        </div>
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default Contact