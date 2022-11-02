import React from "react";
import Appbar from "./appbar";
import Body from "./body";
import Content from "./content";

type Props = { children: React.ReactNode };

const AdminLayout = ({ children }: Props) => {
  return (
    <Body>
      <Content>
        <Appbar />
        <React.Fragment>{children}</React.Fragment>
      </Content>
    </Body>
  );
};
export default AdminLayout;
