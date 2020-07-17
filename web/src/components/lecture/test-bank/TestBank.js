import React from "react";
import TestBankTable from "./components/TestBankTable";
import Header from "./components/Header";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH_USER } from "../../../graphql/user";

function TestBank() {
  const { loading, subscribeToMore, data, refetch } = useQuery(GET_AUTH_USER);
  
  if (loading) {
    return <div>...</div>;
  }

  return (
    <>
      <Header />
      <TestBankTable />
    </>
  );
}

export default TestBank;
