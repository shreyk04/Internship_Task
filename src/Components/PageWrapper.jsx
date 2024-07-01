import React, { useEffect } from "react";

function PageWrapper({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return children;
}

export default PageWrapper;
