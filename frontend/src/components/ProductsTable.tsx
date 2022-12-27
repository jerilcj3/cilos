import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import type { RootState } from '../store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { productsSlice } from '../slices/productsSlice';

interface ProductData {
  product: string;
  no_of_pax: number;
  total_value: number;
  forecast_no_of_pax: number;
  forecast_value: number;
}

export default function ProductsTable() {
  const cilosFormValue = useSelector((state: RootState) => state.cilosSlice);

  const enterprise = useSelector((state: RootState) => state.productsSlice);

  const [data, setData] = useState<ProductData[]>([
    {
      product: 'Digital Fluency',
      no_of_pax: 30,
      total_value: 2000,
      forecast_no_of_pax: 20,
      forecast_value: 2000,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      // Make the API calls with Axios
      const products = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/`, {
        enterprise_id: enterprise.enterprise_id,
        executive: cilosFormValue.executive,
        status: cilosFormValue.status,
      });

      const { value: productData } = products.data;

      setData(
        productData.map((product: any) => ({
          product: product.product,
          no_of_pax: product.no_of_pax,
          total_value: product.total_value,
          forecast_no_of_pax: product.forecast_no_of_pax,
          forecast_value: product.forecast_value,
        }))
      );
    };
    fetchData();
  }, [
    enterprise.enterprise_id,
    cilosFormValue.executive,
    cilosFormValue.status,
  ]);

  console.log('data is', data);
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'product', name: 'Product' },
    { key: 'no_of_pax', name: 'No of Pax' },
    { key: 'total_value', name: 'Total Value' },
    { key: 'forecast_no_of_pax', name: 'Forecast No of Pax' },
    { key: 'forecast_value', name: 'Forecast Value' },
  ];

  return (
    <div>
      <h4>Product Records</h4>
      <i>List of products attached to the selected enterprise</i>
      <DataGrid columns={columns} rows={data} />
    </div>
  );
}
