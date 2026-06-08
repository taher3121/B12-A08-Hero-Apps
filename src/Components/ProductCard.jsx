
import { Link } from 'react-router';
import dicon from '../assets/icon-downloads.png'
import ricon from '../assets/icon-ratings.png'
const ProductCard = ({ app }) => {

    const { title, companyName, downloads, ratingAvg,id } = app
    // console.log(title)


    return (
        <Link to={`/AppDetails/${id}`}>
            <div className="card bg-base-100 w-auto shadow-sm p-2">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}: {companyName}</h2>
                </div>
                <div className="flex justify-between">
                    <div className='flex justify-center items-center gap-1 bg-[#F1F5E8] px-5 py-2 rounded-xl' >
                        <img src={dicon} alt="" className='w-auto h-4' />
                        <p className='text-[#00D390] font-medium'>{downloads} M</p>
                    </div>
                    <div className='flex justify-center items-center gap-1 bg-[#FFF0E1] px-5 py-2 rounded-xl' >
                        <img src={ricon} alt="" className='w-auto h-4' />
                        <p className='text-[#FF8811]'>{ratingAvg}</p>
                    </div>

                </div>
            </div></Link>
    );
};

export default ProductCard;