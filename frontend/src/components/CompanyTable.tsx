import React, { useState, useEffect } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import axios from 'axios';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import {saveEnterpriseID} from '../slices/productsSlice'

type Enterprise = {
  sno: number;
  enterprise_id: number,
  name: string;
  company: string;
  products_count: number;
};

export default function CompanyTable() {
  const columns = [
    { key: 'sno', name: 'SNO' },
    { key: 'enterprise_id', name: 'Enterprise ID'},
    { key: 'company', name: 'Company' },
    { key: 'products_count', name: 'Total Products' },
    {
      key: 'select',
      name: 'Select',
      formatter: ({ row }: { row: { sno: number; selected: boolean } }) => (
        <input
          type="checkbox"
          checked={row.selected}
          onChange={() => handleSelectionChanged(row.sno)}
        />
      ),
    },
  ];

  const [rows, setRows] = useState([
    { sno: 0, company: 'xyz', products_count: 0, selected: false },
  ]);

  const cilosFormValue = useSelector((state: RootState) => state.cilosSlice);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/companies/`,
          {
            country: cilosFormValue.country,
            enterprise_type: cilosFormValue.enterprise_type,
            business_development_manager: cilosFormValue.executive,
            form_status: cilosFormValue.status,
          }
        );
        let count = 1;
        if (response.data.value) {
          setRows(
            response.data.value.map((item: Enterprise) => ({
              sno: count++,
              enterprise_id: item.enterprise_id,
              company: item.company,
              products_count: item.products_count,
              selected: false,
            }))
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [cilosFormValue.country, cilosFormValue.enterprise_type, cilosFormValue.executive, cilosFormValue.status]); // The empty array as the second argument makes the effect only run once when the component mounts

  const handleSelectionChanged = (rowId: number) => {
    const updatedRows = rows.map((row) => {
      if (row.sno === rowId) {
        return { ...row, selected: !row.selected };
      }
      return { ...row, selected: false };;
    });
    setRows(updatedRows);

    // Get the row whose checkboxes is selected
    const selectedRows:any = updatedRows.filter((row) => row.selected);
    //store the selected row in redux state
    if (selectedRows.length > 0) {
      dispatch(saveEnterpriseID(selectedRows[0].enterprise_id));}
    };

  return (
    <div>
      <h4>Enterprise Records: </h4>
      <i>
        All the below listed companies have atleast 1 product associated to them.
        Total products = (products identified + silver + gold) - (each product more than 1 in total products)
      </i>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}
