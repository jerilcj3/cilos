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

const links = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

function App() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={800} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
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
