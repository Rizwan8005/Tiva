import React, { useEffect } from 'react'
import MainSlingleServicesDetails from '../components/MainSlingleServicesDetails/MainSlingleServicesDetails';
import SingleServiceInfo from '../components/SingleServiceInfo/SingleServiceInfo';

const SingleServicesDetailPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MainSlingleServicesDetails />
      <SingleServiceInfo />
    </div>
  );
}

export default SingleServicesDetailPage;