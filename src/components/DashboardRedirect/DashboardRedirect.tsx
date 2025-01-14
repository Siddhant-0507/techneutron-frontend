import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const DashboardRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      navigate('/')
    }
    
  }, []);

  return null;
};

export default DashboardRedirect;
