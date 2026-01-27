import React from "react";
import CertificateCard from "../components/CertificateCard";

const Certificates = () => {
  return (
    <div className="certificates" id="certificates">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        <CertificateCard
          certificateName={"Scrimba Fullstack Developer Path"}
          issuer={"Scrimba"}
          date={"2026"}
          description={"Completed Scrimba’s Full-Stack Developer program, a hands-on curriculum focused on building real-world web applications from frontend to backend. Gained practical experience with HTML, CSS, JavaScript, React, Next.js, Node.js, Express."}
          certificateLink={"https://scrimba.com/fullstack-path-c0fullstack;cert23wfboWopQUa6iTtSXt371Lds1nE8htyrSMv6vqn2xBo3aKJ"} // Replace with your actual certificate link
        />
      </div>
    </div>
  );
};

export default Certificates;
