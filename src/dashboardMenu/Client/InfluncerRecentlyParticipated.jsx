import React from 'react';
import { Link } from 'react-router-dom';

const InfluncerRecentlyParticipated = () => {


    const campaignData = [
        { id: 1, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 2, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 3, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 4, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
        { id: 5, name: "Holiday Music Campaign", img: "/influencer/Home/Rectangle-2.png" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {campaignData.map((campaign) => (
                <div key={campaign.id} className="p-4 border rounded-lg shadow-md">
                    <img className="w-full h-40 object-cover rounded-lg" src={campaign.img} alt={campaign.name} />
                    <h3 className="text-center mt-3 font-semibold">{campaign.name}</h3>
                    <div className='mt-5 '>
                        <Link to={`/client/influencers/influencer-activity/${campaign.id}`} className="border border-gray-600 text-gray-600 py-2 px-4 rounded-lg w-full block text-center mt-2">
                            View Activity
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default InfluncerRecentlyParticipated;
