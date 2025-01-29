import React from "react";
import { Sidebar2 } from "./UI/Sidebar";
import { Dashboard } from "./UI/dashboard";


export const HeroHeader13 = () => {
    return (
        <>

            <div className='w-full h-[80vh] relative rounded-4xl overflow-hidden  shadow-2xl'>

                <Sidebar2 />
                <Dashboard />
            </div>

        </>
    );
};
