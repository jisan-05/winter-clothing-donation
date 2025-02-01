import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../components/DonationCampaigns/DonationCampaigns";
import HowToHelp from "../components/HowToHelp/HowToHelp";
import Dashboard from "../components/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/donationcampaigns',
            element:<DonationCampaigns></DonationCampaigns>
        },
        {
            path:'/howtohelp',
            element:<HowToHelp></HowToHelp>
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);

export default router;