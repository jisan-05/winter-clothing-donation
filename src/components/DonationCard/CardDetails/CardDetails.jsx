import React from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const singleData = useLoaderData();
    const { id, title, image, description, status, contactInfo, division } =
        singleData;
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    `url(${image})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <button className="btn btn-primary">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
