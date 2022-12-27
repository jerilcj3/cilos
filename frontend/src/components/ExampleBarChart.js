import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { ClassNames } from '@emotion/react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  center: {
    display: 'flex',
    justifyContent: 'center'
  },

}))

const ExampleBarChart = () => {
  const { classes } = useStyles();

  const cilosFormValue = useSelector((state) => state.cilosSlice);
  //interest

  const [
    InterestDiscoveryCallNotStartedCount,
    setInterestDiscoveryCallNotStartedCount,
  ] = useState([]);

  const [
    InterestDiscoveryCallInProgressCount,
    setInterestDiscoveryCallInProgressCount,
  ] = useState([]);

  const [
    InterestDiscoveryCallCompletedCount,
    setInterestDiscoveryCallCompletedCount,
  ] = useState([]);

  //lead
  const [
    LeadMeetingAppointmentNotProposedCount,
    setLeadMeetingAppointmentNotProposedCount,
  ] = useState([]);
  const [
    LeadMeetingAppointmentProposedCount,
    setLeadMeetingAppointmentProposedCount,
  ] = useState([]);
  const [
    LeadMeetingAppointmentConfirmedCount,
    setLeadMeetingAppointmentConfirmedCount,
  ] = useState([]);

  //bronze

  const [
    BronzeSolutioningMeetingNotStartedCount,
    setBronzeSolutioningMeetingNotStartedCount,
  ] = useState([]);
  const [
    BronzeProductIdentifiedCount,
    setBronzeProductIdentifiedCount,
  ] = useState([]);
  const [
    BronzeSolutioningMeetingInProgressCount,
    setBronzeSolutioningMeetingInProgressCount,
  ] = useState([]);
  const [
    BronzeSolutioningMeetingCompletedCount,
    setBronzeSolutioningMeetingCompletedCount,
  ] = useState([]);

  //silver
  const [
    SilverDraftProposalNotPreparedDraftMoaNotPreparedCount,
    setSilverDraftProposalNotPreparedDraftMoaNotPreparedCount,
  ] = useState([]);
  const [
    SilverSilverDraftProposalInProgressDraftMoaInProgressCount,
    setSilverSilverDraftProposalInProgressDraftMoaInProgressCount,
  ] = useState([]);
  const [
    SilverDraftProposalSubmittedDraftMoaSubmittedCount,
    setSilverDraftProposalSubmittedDraftMoaSubmittedCount,
  ] = useState([]);

  //gold

  const [
    GoldDraftProposalInReviewDraftMoaInReviewCount,
    setGoldDraftProposalInReviewDraftMoaInReviewCount,
  ] = useState([]);
  const [
    GoldFinalProposalSubmittedMoaTermsAgreedCount,
    setGoldFinalProposalSubmittedMoaTermsAgreedCount,
  ] = useState([]);

  //sales
  const [
    SalesFinalProposalInReviewCount,
    setFinalProposalInReviewCount,
  ] = useState([]);
  const [
    SalesFinalProposalCompletedCount,
    setFinalProposalCompletedCount,
  ] = useState([]);


  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //interest

      const interest_discovery_call_not_started_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'interest & lead', //this value is hardcoded
          stage: 'interest',
          status: 'discovery call not started',
        }
      );

      const interest_discovery_call_in_progress_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'interest & lead', //this value is hardcoded
          stage: 'interest',
          status: 'discovery call in progress',
        }
      );

      const interest_discovery_call_completed_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'interest & lead', //this value is hardcoded
          stage: 'interest',
          status: 'discovery call completed',
        }
      );

      //lead
      const lead_meeting_appointment_not_proposed_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'interest & lead', //this value is hardcoded
          stage: 'lead',
          status: 'meeting appointment not proposed',
        }
      );

      const lead_meeting_appointment_proposed_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'interest & lead', //this value is hardcoded
          stage: 'lead',
          status: 'meeting appointment proposed',
        }
      );

      const lead_meeting_appointment_confirmed_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'interest & lead', //this value is hardcoded
          stage: 'lead',
          status: 'meeting appointment confirmed',
        }
      );

        //bronze
        const bronze_solutioning_meeting_not_started_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'bronze',
          status: 'solutioning meeting not started',
        }
      );

  const bronze_product_identified_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'bronze',
          status: 'product identified',
        }
      );

      const bronze_solutioning_meeting_in_progress_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'bronze',
          status: 'solutioning meeting in-progress',
        }
      );

      const bronze_solutioning_meeting_completed_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'bronze',
          status: 'solutioning meeting completed',
        }

      );

      //silver

      const silver_draft_proposal_not_prepared_draft_moa_not_prepared_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'silver',
          status: 'draft proposal not prepared/ draft moa not prepared',
        }
      );

      const silver_draft_proposal_in_progress_draft_moa_in_progress_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'silver',
          status: 'draft proposal in-progress/ draft moa in-progress',
        }
      );

      const silver_draft_proposal_submitted_draft_moa_submitted_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'silver',
          status: 'draft proposal submitted/ draft moa submitted',
        }

      );

      //gold

      const gold_draft_proposal_in_review_draft_moa_in_review_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'gold',
          status: 'draft proposal in-review/ draft moa in-review',
        }
      );

      const gold_final_proposal_submitted_moa_terms_agreed_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'opportunity', //this value is hardcoded
          stage: 'gold',
          status: 'final proposal submitted / moa terms agreed',
        }
      );

      //sales
      const sales_final_proposal_in_review_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'sales', //this value is hardcoded
          stage: 'sales',
          status: 'final proposal in-review',
        }
      );

      const sales_final_proposal_completed_count = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/statuses/`,
        {
          country: cilosFormValue.country,
          enterprise_type: cilosFormValue.enterprise_type,
          business_development_manager: cilosFormValue.executive,
          form_status: cilosFormValue.status,
          main_stage: 'sales', //this value is hardcoded
          stage: 'sales',
          status: 'final proposal completed',
        }
      );
  
      //interest
      setInterestDiscoveryCallNotStartedCount(
        interest_discovery_call_not_started_count.data.value
      );

      setInterestDiscoveryCallInProgressCount(
        interest_discovery_call_in_progress_count.data.value
      );

      setInterestDiscoveryCallCompletedCount(
        interest_discovery_call_completed_count.data.value
      );

      //lead 
      setLeadMeetingAppointmentNotProposedCount(
        lead_meeting_appointment_not_proposed_count.data.value
      );
      setLeadMeetingAppointmentProposedCount(
        lead_meeting_appointment_proposed_count.data.value
      );
      setLeadMeetingAppointmentConfirmedCount(
        lead_meeting_appointment_confirmed_count.data.value
      );

      //bronze
      setBronzeSolutioningMeetingNotStartedCount(bronze_solutioning_meeting_not_started_count.data.value)
      setBronzeProductIdentifiedCount(bronze_product_identified_count.data.value)
      setBronzeSolutioningMeetingInProgressCount(bronze_solutioning_meeting_in_progress_count.data.value)
      setBronzeSolutioningMeetingCompletedCount(bronze_solutioning_meeting_completed_count.data.value)

      //silver
      setSilverDraftProposalNotPreparedDraftMoaNotPreparedCount(silver_draft_proposal_not_prepared_draft_moa_not_prepared_count.data.value)
      setSilverSilverDraftProposalInProgressDraftMoaInProgressCount(silver_draft_proposal_in_progress_draft_moa_in_progress_count.data.value)
      setSilverDraftProposalSubmittedDraftMoaSubmittedCount(silver_draft_proposal_submitted_draft_moa_submitted_count.data.value)
      setIsDataLoaded(true);

      //gold
      setGoldDraftProposalInReviewDraftMoaInReviewCount(gold_draft_proposal_in_review_draft_moa_in_review_count.data.value)
      setGoldFinalProposalSubmittedMoaTermsAgreedCount(gold_final_proposal_submitted_moa_terms_agreed_count.data.value)

      //sales
      setFinalProposalInReviewCount(sales_final_proposal_in_review_count.data.value)
      setFinalProposalCompletedCount(sales_final_proposal_completed_count.data.value)
    };
    fetchData();
  }, [
    cilosFormValue.country,
    cilosFormValue.enterprise_type,
    cilosFormValue.executive,
    cilosFormValue.status
  ]);

  const obj = [
    {
      name: 'Interest',
      'Discovery call not started': InterestDiscoveryCallNotStartedCount,
      'Discovery call in progress': InterestDiscoveryCallInProgressCount,
      'Discovery call completed': InterestDiscoveryCallCompletedCount,
    },
    {
      name: 'Lead',
      'Meeting appointment not proposed': LeadMeetingAppointmentNotProposedCount,
      'Meeting appointment proposed': LeadMeetingAppointmentProposedCount,
      'Meeting appointment confirmed': LeadMeetingAppointmentConfirmedCount,
    },

    {
      name: 'Bronze',
      'Solutioning meeting not started': BronzeSolutioningMeetingNotStartedCount,
      'Product identified': BronzeProductIdentifiedCount,
      'Solutioning meeting in-progress': BronzeSolutioningMeetingInProgressCount,
      'Solutioning meeting completed': BronzeSolutioningMeetingCompletedCount,
    },
    {
      name: 'Silver',
      'Draft proposal not prepared/ draft moa not prepared': SilverDraftProposalNotPreparedDraftMoaNotPreparedCount,
      'Draft proposal in progress/ draft moa in progress': SilverSilverDraftProposalInProgressDraftMoaInProgressCount,
      'Draft proposal submitted/ draft moa submitted': SilverDraftProposalSubmittedDraftMoaSubmittedCount,
    },
    {
      name: 'Gold',
      'Draft proposal in-review/ draft moa in-review': GoldDraftProposalInReviewDraftMoaInReviewCount,
      'Final proposal submitted/ moa terms agreed': GoldFinalProposalSubmittedMoaTermsAgreedCount,
    },
    {
      name: 'Sales',
      'Final proposal in-review': SalesFinalProposalInReviewCount,
      'Final proposal completed': SalesFinalProposalCompletedCount,
    },
  ];
  return isDataLoaded ? (
    <div>
      <i className={classes.center}>Here the count is not by unique enterprises but by opportunities. So if single enterprise has 3 products, count will be 3 </i>
      <BarChart width={1200} height={400} data={obj}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />

      {/* lead */}
      <Bar
        dataKey="Meeting appointment not proposed"
        barSize={20}
        fill="#8884d8"
      />
      <Bar dataKey="Meeting appointment proposed" barSize={10} fill="#82ca9d" />
      <Bar
        dataKey="Meeting appointment confirmed"
        barSize={10}
        fill="#82ca9d"
      />

      {/* interest */}

      <Bar dataKey="Discovery call not started" barSize={10} fill="#8884d8" />
      <Bar dataKey="Discovery call in progress" barSize={10} fill="#82ca9d" />
      <Bar dataKey="Discovery call completed" barSize={10} fill="#82ca9d" />

      {/* Bronze */}
      <Bar dataKey="Solutioning meeting not started" barSize={10} fill="#8884d8" />
      <Bar dataKey="Product identified" barSize={10} fill="#8884d8" />
      <Bar
        dataKey="Solutioning meeting in-progress"
        barSize={10}
        fill="#82ca9d"
      />
      <Bar
        dataKey="Solutioning meeting completed"
        barSize={10}
        fill="#82ca9d"
      />

      {/* silver state */}

      <Bar
        dataKey="Draft proposal not prepared/ draft moa not prepared"
        barSize={10}
        fill="#8884d8"
      />
      <Bar
        dataKey="Draft proposal in progress/ draft moa in progress"
        barSize={10}
        fill="#82ca9d"
      />

      <Bar
        dataKey="Draft proposal submitted/ draft moa submitted"
        barSize={10}
        fill="#8884d8"
      />

      {/* Gold state */}
      <Bar
        dataKey="Draft proposal in-review/ draft moa in-review"
        barSize={10}
        fill="#8884d8"
      />
      <Bar
        dataKey="Final proposal submitted/ moa terms agreed"
        barSize={10}
        fill="#82ca9d"
      />

      {/* Sales State */}

      <Bar dataKey="Final proposal in-review" barSize={10} fill="#8884d8" />
      <Bar dataKey="Final proposal completed" barSize={10} fill="#82ca9d" />
    </BarChart>
    </div>
    
  ) : (
    <div>Loading...</div>
  );
};

export default ExampleBarChart;
