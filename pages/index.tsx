import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LoginForm } from "../components";

const Home: NextPage = () => {
  return <LoginForm />;
};

export default Home;
