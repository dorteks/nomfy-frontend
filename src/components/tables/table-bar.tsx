import { ArrowDownIcon } from "@chakra-ui/icons";
import React from "react";
import BaseAppBar from "../../components/appbar";
import SearchBox from "../../components/searchBox";

type Props = { children: React.ReactNode };

const TableBar = (props: Props) => {
  return (
    <BaseAppBar>
      <h1>{props.children}</h1>
      <SearchBox />
      <h2>
        Filter
        <ArrowDownIcon ml={2} />
      </h2>
    </BaseAppBar>
  );
};

export default TableBar;
