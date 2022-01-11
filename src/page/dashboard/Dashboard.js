import React from "react";
import Displaybookinglist from "../../component/displaylist/Displaybookinglist";
import Layout from "../layout/Layout";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Displaybookinglist />
     </Layout>
    </div>
  );
};

export default Dashboard;
