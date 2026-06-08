import { useParams } from "react-router";
import useApps from "../Hooks/AppsData";
import dwn from '../assets/icon-downloads.png'
import rate from '../assets/icon-ratings.png'
import rev from '../assets/icon-review.png'
const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()

    const app = apps.find(a => a.id === Number(id))

    if (loading) return <p>Loading......</p>

    const { title, companyName, description, size, reviews, ratingAvg, downloads } = app

    return (
        <div className="m-10">
            <div className="flex items-center justify-baseline gap-15">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="card-title">{title}</h2>
                        <p>Developedby <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</span></p>
                    </div>
                    <div className="flex gap-5 border-t-1 border-gray-300 pt-3">
                        <div>
                            <img src={dwn} alt="" className="h-5 w-auto"/>
                            <p className="font-medium">Downloads</p>
                            <p className="font-bold text-xl">{downloads}M</p>
                        </div>
                        <div>
                            <img src={rate} alt="" className="h-5 w-auto"/>
                            <p className="font-medium">Avarage Ratings</p>
                            <p className="font-bold text-xl">{ratingAvg}</p>
                        </div>
                        <div>
                            <img src={rev} alt="" className="h-5 w-auto"/>
                            <p className="font-medium">Total Reviews</p>
                            <p className="font-bold text-xl">{reviews}K</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn bg-green-600 text-white">Install Now ({size}MB)</button>
                    </div>
                </div>
            </div>

            <h1 className="font-semibold text-lg">Description</h1>
            <p>{description}</p>
        </div>
    );
};

export default AppDetails;