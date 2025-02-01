import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";

const Home = () => {
    const donationDatas = useLoaderData()
    return (
        <div>
              <Banner></Banner>

                <h2 className="text-4xl text-center my-14">Available Cloth</h2>

             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto">
             {
                donationDatas.map(donationData => <DonationCard key={donationData.id} donationData={donationData}></DonationCard>)
              }
                     
            </div>     
            
        </div>
    );
};

export default Home;