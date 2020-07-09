import React from "react";
const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13639.268692921789!2d34.26340258022461!3d31.28115199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd938c8a0a1b99%3A0xeff8cd4e991d0834!2sPaltel!5e0!3m2!1sar!2s!4v1578827778804!5m2!1sar!2s"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Loction</div>
      </div>
    </div>
  );
};

export default Location;
