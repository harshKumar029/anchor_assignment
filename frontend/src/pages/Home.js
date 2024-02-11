import React, { useState, useEffect } from 'react';
// import { navigate } from 'gatsby'; // Assuming you're using Gatsby for navigation
import { alljobs } from '../utility/ApiService';
import Jobcard from '../components/Jobcard';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await alljobs();
      console.log("response data ", response);

      // Check if the request was successful
      if (response.status) {
        setJobs(response.data); // Assuming the response contains an array of job objects
      } else {
        alert("Failed to fetch jobs");
      }
    } catch (error) {
      console.error(error.message);
      alert("Failed to fetch jobs");
    }
  };

  return (
    <>
      <Jobcard jobs={jobs} />
      <div>Home</div>
    </>
  );
};

export default Home;
