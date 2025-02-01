import { Link } from "react-router-dom";

const DonationCard = ({ donationData }) => {
    const { id, title, image, description, status, contactInfo, division } =
        donationData;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    className="h-44 w-full object-cover"
                    alt="title"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    {
                        status === "Active" ? <button className="badge text-white bg-green-600">{status}</button> : <button className="badge text-white bg-amber-600">{status}</button>
                    }
                </h2>
                <p>
                    {
                        description
                    }
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{contactInfo}</div>
                    <div className="badge badge-outline">{division}</div>
                </div>

                <Link className="btn btn-info my-3" to={`/details/${id}`}>Show Details</Link>
            </div>
        </div>
    );
};

export default DonationCard;
