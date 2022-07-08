import React from 'react';
import Sidebar from '../../components/Sidebar';
import Chart from '../../components/Chart';
import HeaderLandP from '../../components/HeaderLandP';
import Card from '../../components/Card';

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-row">
        <Sidebar />
        <div>
          <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 w-screen lg:w-full lg:grid-cols-4">
            <Card text={'All Organizations'} number={24} />
            <Card text={'All Trainees'} number={560} />
            <Card text={'Cohorts'} number={9} />
            <Card text={'Performance'} number={4} />
          </div>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
