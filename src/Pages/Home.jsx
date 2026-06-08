import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useApps from "../Hooks/AppsData";

const Home = () => {

    const { apps } = useApps()

    const featureApps = apps.slice(0, 8)

    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-bold mt-10">We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">Productive</span> Apps</h1>

            </div>

            <div className="flex flex-col items-center mb-10">
                <div>
                    <p className="text-center text-[#627382] mt-5 mb-10">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more <br />
                        exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>

                <div className="text-center">
                    <h1 className="text-4xl font-semibold">Trending Apps</h1>
                    <p className="text-[#627382] mt-3">Explore All Trending Apps on the Market developed by us</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-10 ">
                    {
                        featureApps.map(app => <ProductCard key={app.id} app={app}></ProductCard>)
                    }
                </div>

                <Link to='/Apps' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Show ALL</Link>

            </div>
        </div>
    );
};

export default Home;