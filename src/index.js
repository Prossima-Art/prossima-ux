import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import './index.css';
import Projects from './Pages/projects';
import BrbComp from './Pages/components/brbProject/brbComp';
import YupComp from './Pages/components/yupproject/yupComp';
import WizComp from './Pages/components/wizProject/wizComp';
import AwsComp from './Pages/components/awsproject/awsComp';
import DonPeComp from './Pages/components/donpeProject/donPeComp';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-WKTRFMJX'
};

TagManager.initialize(tagManagerArgs);



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Projects",
        element: <Projects />,
    },

    {
        path: "/ProjectBrb",
        element: <BrbComp />,
    },

    {
        path: "/YupComp",
        element: <YupComp />,
    },
    {
        path: "/WizComp",
        element: <WizComp />,
    },
    {
        path: "/AwsComp",
        element: <AwsComp />,
    },
    {
        path: "/DonPeComp",
        element: <DonPeComp />,
    },

    {
        path: "/*",
        element: <div>page not found, go to home:</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);



