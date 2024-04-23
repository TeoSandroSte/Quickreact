import { ProvaContext } from "@/store/ProvaContext";
import { useContext, useEffect, useState } from "react";

const Footer = () => {
  console.log("carico Footer");

  const { state } = useContext(ProvaContext);

  return <span>{state}</span>;
};

export default Footer;
