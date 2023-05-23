import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const TabSection = () => {
    const [toys, setToys] = useState([]);
    const [info, setInfo] = useState('Rock');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://toy-marketplace-server-phi.vercel.app/addToys?category=${info}`);
                const data = await response.json();
                setToys(data);
            } catch (error) {
                console.log('Error fetching toys:', error);
            }
        };

        fetchData();
    }, [info]);

    useEffect(() => {
        const fetchDefaultData = async () => {
            try {
                const response = await fetch(`https://toy-marketplace-server-phi.vercel.app/addToys?category=${info}`);
                const data = await response.json();
                setToys(data);
            } catch (error) {
                console.log('Error fetching default toys:', error);
            }
        };

        fetchDefaultData();
    }, [info]);

    const handleTabSelect = (index) => {
        if (index === 0) {
            setInfo('Rock');
        } else if (index === 1) {
            setInfo('Monster');
        } else if (index === 2) {
            setInfo('Drift');
        }
         else if (index === 3) {
            setInfo('RTF');
        }
    };

    return (
        <div className='container max-w-screen-xl mx-auto py-8'>
            <div className='my-10 mx-3 space-y-3' data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine">
                <h1 className='text-4xl font-bold text-[#004e96]'>Top RC Surface Categories</h1>
                <p>Shop trending RC surface categories visited by other RC vehicle and RC boat enthusiasts</p>
            </div>
            <Tabs onSelect={handleTabSelect}>
                <TabList className='flex lg:gap-10 gap-2 justify-center bg-gray-200 rounded-lg'>
                    <Tab className='px-6 py-3 bg-[#004e96]  rounded-lg cursor-pointer text-white font-medium'>
                        Rock Crawlers
                    </Tab>
                    <Tab className='px-6 py-3 bg-[#004e96]  rounded-lg cursor-pointer text-white font-medium'>
                        Monster Trucks
                    </Tab>
                    <Tab className='px-6 py-3 bg-[#004e96] rounded-lg cursor-pointer  text-white font-medium'>
                        Drift Cars
                    </Tab>
                    <Tab className='px-6 py-3 bg-[#004e96] rounded-lg cursor-pointer  text-white font-medium'>
                        RTF
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='grid lg:grid-cols-3 '>
                        {toys.map((toy1) => (
                            <Tab1 key={toy1._id} toy1={toy1}></Tab1>
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-2'>
                        {toys.map((toy2) => (
                            <Tab2 key={toy2._id} toy2={toy2}></Tab2>
                        ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-2'>
                        {toys.map((toy3) => (
                            <Tab3 key={toy3._id} toy3={toy3}></Tab3>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 gap-2'>
                        {toys.map((toy4) => (
                           <Tab4 key={toy4._id} toy4={toy4}></Tab4> 
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;
