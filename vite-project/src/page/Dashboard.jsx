// frontend/src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import TransactionsTable from '../components/TransactionsTable';
import TransactionsStatistics from '../components/TransactionsStatistics';
import TransactionsBarChart from '../components/TransactionsBarChart';
import { fetchTransactions, fetchStatistics, fetchBarChartData } from '../api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await fetchTransactions();
      setTransactions(transactionsData);

      const statisticsData = await fetchStatistics();
      setStatistics(statisticsData);

      const barChartData = await fetchBarChartData();
      setBarChartData(barChartData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <TransactionsTable transactions={transactions} />
      <TransactionsStatistics statistics={statistics} />
      <TransactionsBarChart barChartData={barChartData} />
    </div>
  );
};

export default Dashboard;
