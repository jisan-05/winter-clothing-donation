import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../components/DonationCampaigns/DonationCampaigns";
import HowToHelp from "../components/HowToHelp/HowToHelp";
import Dashboard from "../components/Dashboard/Dashboard";
import CardDetails from "../components/DonationCard/CardDetails/CardDetails";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivetRoute from "../components/privetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch("/donation-item.json")
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
            element:<PrivetRoute>
              <Dashboard></Dashboard>
            </PrivetRoute>
        },
        {
          path:'/details/:id',
          element:<CardDetails></CardDetails>,
          loader: async ({params}) => {
            const res = await fetch(`/donation-item.json`)
            const data = await res.json();

            const singleData = data.find(d=> d.id == params.id )
            return singleData;

          }
          
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;