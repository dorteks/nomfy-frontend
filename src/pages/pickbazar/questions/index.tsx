import { Box } from "@chakra-ui/react";
import CustomLayout from "../../../components/CustomLayout";
import Header from "../../../components/Header";
import EditQuestions from "./edit";

const Questions = () => {
  return (
    <CustomLayout>
      <Header title="Questions" subtitle="" report={""} />
      <EditQuestions />
    </CustomLayout>
  );
};

export default Questions;
