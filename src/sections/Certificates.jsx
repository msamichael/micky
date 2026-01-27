import React from "react";
import CertificateCard from "../components/CertificateCard";

const Certificates = () => {
  return (
    <div className="certificates" id="certificates">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        <CertificateCard
          certificateName={"Scrimba Certificate"}
          issuer={"Scrimba"}
          date={"2026"}
          description={"Completed comprehensive web development course covering modern JavaScript, React, and frontend development best practices."}
          certificateLink={"#"} // Replace with your actual certificate link
        />
      </div>
    </div>
  );
};

export default Certificates;
