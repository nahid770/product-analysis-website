import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashbord.css'

const Dashbord = () => {
    const data= [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        },
    ];
    return (
        <div >
            <h2 className='text-3xl font-light mt-5'>Wellcome To Dashbord</h2>

        <div className='chart ml-20 mt-20'>
        <div>
        <h2 className='text-2xl mb-6 '>Investment VS Sales</h2>
        <LineChart width={500} height={400} data={data}>
          <Line dataKey={'sell'}></Line>
          <XAxis dataKey='month'></XAxis>
          <YAxis></YAxis>
          <Tooltip />
          </LineChart>
        </div>

        <div className='ml-20'>
            <h2 className='text-2xl mb-6'>Investment VS Sales</h2>
        <BarChart width={600} height={400} data={data}>
        <XAxis dataKey="month"  />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sell" barSize={30} fill="#8884d8"
        />
        </BarChart>
        </div>
        </div>


        </div>
        
    );
};

export default Dashbord;