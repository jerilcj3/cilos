import React from 'react';
import logo from './logo.svg';
import './App.css';
import Funnel from './components/Funnel';
import { AppShell, Navbar, Header } from '@mantine/core';
import { Grid } from '@mantine/core';
import { HeaderSimple } from './components/HeaderSimple';
import ExampleBarChart from './components/ExampleBarChart';
import CilosForm from './components/CilosForm';
import CompanyTable from './components/CompanyTable';
import ProductsTable from './components/ProductsTable';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper:{
     maxWidth: '1900px',
     margin:'0 auto' 
  }

}))

const links = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

function App() {
  const { classes } = useStyles();

  return (
    <AppShell className={classes.wrapper}
      padding="md"
      
      header={
        <Header height={60} p="xs">
          <HeaderSimple links={links} />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <CilosForm />

      <Grid>
        <Grid.Col span={4}>
          <Funnel />
        </Grid.Col>
        <Grid.Col span={8}>
          <ExampleBarChart />
        </Grid.Col>
        <Grid.Col span={6}>
          <CompanyTable />
        </Grid.Col>
        <Grid.Col span={6}>
          <ProductsTable />
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}

export default App;
