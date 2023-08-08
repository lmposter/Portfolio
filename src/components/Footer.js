import React, { useEffect, useRef } from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    fetchLocationData();
  }, []);

  const fetchLocationData = () => {
    fetch("https://geolocation-db.com/json/")
      .then((response) => response.json())
      .then((location) => {
        const ipElement = document.createElement("span");
        ipElement.id = "ip";
        ipElement.textContent = `Your IP: ${location.IPv4}`;
        containerRef.current.appendChild(ipElement);

        const locationElement = document.createElement("span");
        locationElement.id = "location";
        locationElement.textContent = ` ‎ Location: ${location.city}, ${location.state}`;
        containerRef.current.appendChild(locationElement);
      });
  };

  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; mahechen.com</span> 
        <div className="flex items-center lg:py-2" ref={containerRef}></div>
        <span>Welcome to my corner of the internet!</span>
      </Layout>
    </footer>
  );
};

export default Footer;
