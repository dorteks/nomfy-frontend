import React from "react";
import Header from "../../components/Header";
import CustomLayout from "../../components/CustomLayout";
import { DownloadReport } from "../../components/SearchBox";
import { Box, Text } from "@chakra-ui/react";
import BarChart, { SalesHistoryData } from "../../components/BarChart";
import DashboardCard from "../../components/dashboardCard/dashboardCard";

const Dashboard = () => {
  return (
    <CustomLayout>
      <Header title="Dashboards" subtitle="" report={<DownloadReport />} />
      <Box display="block" justifyContent="space-between" alignItems="center">
        <Box
          h="21vh"
          bg="#EEEEEE"
          mb="6px"
          borderWidth="1px"
          borderRadius="10px"
        >
          <DashboardCard />
        </Box>
        <Box
          ml="5px"
          mb="6px"
          h="47vh"
          width="99%"
          p={5}
          backgroundColor="white"
          borderColor="#D6E4E5"
          borderWidth="1px"
          borderRadius="10px"
        >
          <Box height="40px">
            <Text fontSize="16px" fontWeight="normal" p={5}>
              Sale History
            </Text>
          </Box>
          <Box height="380px" w="100%" p={1}>
            <BarChart data={SalesHistoryData} />
          </Box>
        </Box>
      </Box>
    </CustomLayout>
  );
};

export default Dashboard;
