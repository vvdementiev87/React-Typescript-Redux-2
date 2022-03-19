import { Layout } from "antd";
import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./App.css";
import { useAction } from "./hooks/useActions";
import { Iuser } from "./models/IUser";

const App: React.FC = () => {
  const { setUser, setIsAuth } = useAction();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as Iuser);
      setIsAuth(true);
    }
  }, []);
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
