import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import useApps from "../Hooks/AppsData";
import NotFound from "./NotFound";


const Apps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('')
    // console.log(search)
    const term = search.trim().toLocaleLowerCase()
    const searchApps = apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    return (
        <div className="mt-14 md:mx-10">
            <div className="text-center mb-5">
                <h1 className="font-bold text-4xl mb-4">Our All Applications</h1>
                <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="mb-4 flex justify-between">
                <p className="font-medium">({searchApps.length})Apps Found</p>
                <label className="input">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="search"
                        placeholder="search Apps"
                    ></input>
                </label>
            </div>

            {
                searchApps.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                        {searchApps.map(app => (
                            <ProductCard
                                key={app.id}
                                app={app}
                            />
                        ))}
                    </div>
                ) : (
                    <NotFound />
                )
            }

        </div>
    );
};

export default Apps;