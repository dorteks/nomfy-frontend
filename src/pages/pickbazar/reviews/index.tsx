import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditReviews from "./edit";

const Reviews = () => {
  return (
    <CustomLayout>
      <Header title="Reviews" subtitle="" report={""} />
      <EditReviews />
    </CustomLayout>
  );
};

export default Reviews;
