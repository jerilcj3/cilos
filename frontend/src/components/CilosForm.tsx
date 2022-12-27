import 'react-app-polyfill/ie11';
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Flex, Grid } from '@mantine/core';
import { createStyles } from '@mantine/core';
import axios from 'axios';
import DatePickerField from './DatePickerField';
import type { RootState } from '../store';

import { useSelector, useDispatch } from 'react-redux';
import { cilosSlice, saveFormValues } from '../slices/cilosSlice';

const useStyles = createStyles((theme, _params, getRef) => ({
  heading: {
    textAlign: 'center',
  },

  fieldCommon: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    border: 0,
  },
  button: {
    marginTop: '10px',
    marginBottom: '30px',
    padding: '15px',
    width: '100%',
    backgroundColor: '#97005d',
    borderRadius: '10px',
    border: 0,
    cursor: 'pointer',
  },
  fieldsWrapper: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
}));

interface Values {
  country: string;
  enterprise_type: string;
  executive: string;
  status: string;
  //from_date: Date;
  //to_date: Date;
}

type Country = {
  country: string;
};

type EnterpriseType = {
  enterprise_type: string;
};

type Executive = {
  created_by: string;
};

const countries: Country[] = [
  { country: 'egypt' },
  { country: 'united-states' },
  { country: 'sri-lanka' },
];

const enterpriseTypes: EnterpriseType[] = [
  { enterprise_type: '(ent) info-comm sme' },
  { enterprise_type: '(ent) large enterprise' },
  { enterprise_type: 'ua' },
];

const Executives: Executive[] = [{ created_by: 'test' }];

const CilosForm = () => {
  const dispatch = useDispatch();

  const { classes } = useStyles();

  const [countries, setCountries] = useState<Country[]>([]);
  const [enterpriseTypes, setEnterpriseTypes] = useState<EnterpriseType[]>([]);
  const [executives, setExecutives] = useState<Executive[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const countries = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/countries/`
        );
        const enterpriseTypes = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/enterprise_types/`
        );

        const executives = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/executives/`
        );

        setCountries(countries.data as Country[]);
        setEnterpriseTypes(enterpriseTypes.data as EnterpriseType[]);
        setExecutives(executives.data as Executive[]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={classes.heading}>CILOS FLOW</h2>
      <p>
        <i>This pipeline is for Enterprise Data Flow</i>
      </p>
      <Formik
        initialValues={{
          country: '',
          enterprise_type: '',
          executive: '',
          status: '',
          //from_date: new Date(2021, 9, 11),
          //to_date: new Date(2021, 9, 11),
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          dispatch(saveFormValues(values));
        }}
      >
        <Form>
          <Grid>
            <Grid.Col span={4}>
              <div className={classes.fieldsWrapper}>
                <label htmlFor="country">Country</label>
                <Field
                  as="select"
                  name="country"
                  className={classes.fieldCommon}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.country}>
                      {country.country}
                    </option>
                  ))}
                </Field>
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div className={classes.fieldsWrapper}>
                <label htmlFor="enterprise_type">Enterprise Type</label>
                <Field
                  as="select"
                  name="enterprise_type"
                  className={classes.fieldCommon}
                >
                  {enterpriseTypes.map((enterpriseType, index) => (
                    <option key={index} value={enterpriseType.enterprise_type}>
                      {enterpriseType.enterprise_type}
                    </option>
                  ))}
                </Field>
              </div>
            </Grid.Col>

            <Grid.Col span={4}>
              <div className={classes.fieldsWrapper}>
                <label htmlFor="executive">Executive</label>
                <Field
                  as="select"
                  name="executive"
                  className={classes.fieldCommon}
                >
                  <option value="none">none</option>
                  {executives.map((executive, index) => (
                    <option key={index} value={executive.created_by}>
                      {executive.created_by}
                    </option>
                  ))}
                </Field>
              </div>
            </Grid.Col>

            <Grid.Col span={4}>
              <div className={classes.fieldsWrapper}>
                <label htmlFor="status">Status</label>
                <Field
                  as="select"
                  name="status"
                  className={classes.fieldCommon}
                >
                  <option value="Closed Lost">Closed Lost</option>
                  <option value="Closed Won">Closed Won</option>
                  <option value="Active">Active</option>
                </Field>
              </div>
            </Grid.Col>

           {/*  <Grid.Col span={4}>
              <div className={classes.fieldsWrapper}>
                <label htmlFor="from_date">From Date</label>
                <DatePickerField
                  name="from_date"
                  className={classes.fieldCommon}
                />
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div className={classes.fieldsWrapper}>
                <label htmlFor="to_date">To Date</label>
                <DatePickerField
                  name="to_date"
                  className={classes.fieldCommon}
                />
              </div>
            </Grid.Col> */}
            <Grid.Col span={12}>
              <button type="submit" className={classes.button}>
                SUBMIT
              </button>
            </Grid.Col>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default CilosForm;
