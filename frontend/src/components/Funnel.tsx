
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FunnelChart } from 'react-funnel-pipeline';
import 'react-funnel-pipeline/dist/index.css';
import type { RootState } from '../store'
import { useSelector } from 'react-redux'

interface FunnelData {
  name: string;
  value: number;
}

const Funnel: React.FC = () => {
  const [data, setData] = useState<FunnelData[]>([
    { name: 'Enterprises', value: 0 },
    { name: 'Interest', value: 0 },
    { name: 'Lead', value: 0 },
    { name: 'Opportunity', value: 0 },
    { name: 'Sales', value: 0 },
  ]);

  const cilosFormValue = useSelector((state: RootState) => state.cilosSlice);
  
  

  useEffect(() => {
    const fetchData = async () => {
      // Make the API calls with Axios
      const enterprises = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/enterprises/`, {
        country: cilosFormValue.country,
        enterprise_type: cilosFormValue.enterprise_type,
        business_development_manager: cilosFormValue.executive                              
      });
      const interest = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/funnel/`, {
        country: cilosFormValue.country,
        enterprise_type: cilosFormValue.enterprise_type,
        business_development_manager: cilosFormValue.executive,
        status: cilosFormValue.status,
        main_stage: 'interest & lead',     //this value is hardcoded
        stage: 'interest',                 //this value is hardcoded
      });
      const lead = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/funnel/`, {
        country: cilosFormValue.country,
        enterprise_type: cilosFormValue.enterprise_type,
        business_development_manager: cilosFormValue.executive,
        status: cilosFormValue.status,
        main_stage: 'interest & lead',  //this value is hardcoded
        stage: 'lead',                  //this value is hardcoded 
      });
      const opportunity = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/funnel/`, {
        country: cilosFormValue.country,
        enterprise_type: cilosFormValue.enterprise_type,
        business_development_manager: cilosFormValue.executive,
        status: cilosFormValue.status,
        main_stage: 'opportunity',  //this value is hardcoded
        stage: '',       //this value is hardcoded
      });
      const sales = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/funnel/`, {
        country: cilosFormValue.country,
        enterprise_type: cilosFormValue.enterprise_type,
        business_development_manager: cilosFormValue.executive,
        status: cilosFormValue.status,
        main_stage: 'sales',        //this value is hardcoded
        stage: 'sales',             //this value is hardcoded
      });

      // Update the state with the new values
      setData([
        { name: 'Enterprises', value: enterprises.data.value },
        { name: 'Interest', value: interest.data.value },
        { name: 'Lead', value: lead.data.value },
        { name: 'Opportunity', value: opportunity.data.value },
        { name: 'Sales', value: sales.data.value },
      ]);
    };

    fetchData();
  }, [cilosFormValue.country, cilosFormValue.enterprise_type, cilosFormValue.executive, cilosFormValue.status]);
 
  console.log("cilos data is", cilosFormValue)
  return (
  <div>
    <i>Enterprises - Total Enterprises created. Closed Won, Closed Lost NA</i>
    <FunnelChart data={data} />
  </div>
  );
};

export default Funnel;
