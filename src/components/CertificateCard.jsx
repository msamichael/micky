import React from "react";

const CertificateCard = ({ certificateName, issuer, date, description, certificateLink }) => {
  return (
    <div className="certificate-card">
      <div className="certificate-header">
        <div className="certificate-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
        </div>
        <div className="certificate-info">
          <h3>{certificateName}</h3>
          <p className="certificate-issuer">{issuer}</p>
          <p className="certificate-date">{date}</p>
        </div>
      </div>
      <p className="certificate-description">{description}</p>
      {certificateLink && certificateLink !== "#" && (
        <a 
          href={certificateLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="certificate-link"
        >
          View Certificate →
        </a>
      )}
    </div>
  );
};

export default CertificateCard;
