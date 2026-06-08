import { Link } from 'react-router';
import Errorimg from '../assets/error-404.png'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center m-10'>
                <img src={Errorimg} alt="" />
                <h1 className='font-semibold text-4xl'>Oops, page not found!</h1>
                <p className='text-[#627382] m-3'>The page you are looking for is not available.</p>
                <Link to='/' className='btn btn-primary'>Go Back!</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;