import { Box, Grid, GridItem } from "@chakra-ui/react";
import TemplateCard from "./templateCard";
import { CiDollar } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

const DashboardCard = () => {
  return (
    <Box display="flex" justifySelf="space-between" alignContent="center">
      <Grid templateColumns="repeat(4, 1fr)" gap={10} p={1} mr="10px">
        <GridItem>
          <TemplateCard
            title="Total Revenue"
            subtitle="(Last 30 days)"
            icon={<BsCurrencyDollar size="28px" color="green" />}
            value="$0.00"
          />
        </GridItem>
        <GridItem>
          <TemplateCard
            title="Total Order"
            subtitle="(Last 30 days)"
            icon={<MdAddShoppingCart size="28px" color="red" />}
            value="0"
          />
        </GridItem>{" "}
        <GridItem>
          <TemplateCard
            title="Todays Revenue"
            icon={<CiDollar size="28px" color="yellow" />}
            value="$0.00"
          />
        </GridItem>{" "}
        <GridItem>
          <TemplateCard
            title="Total Shops"
            icon={<HiOutlineBuildingStorefront size="28px" color="blue" />}
            value="10"
          />
        </GridItem>{" "}
      </Grid>
    </Box>
  );
};

export default DashboardCard;
