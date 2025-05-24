import React from "react";

interface GoogleMapProps {
  width?: string;
  height?: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  width = "600",
  height = "450",
  className = "",
}) => {
  return (
    <div className={className}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1219562885735!2d80.35350629999999!3d5.977939999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae11300d1a390af%3A0x2455d69028da7bc1!2sPetals!5e0!3m2!1sen!2slk!4v1748096346166!5m2!1sen!2slk"
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Petals Restaurant Location"
      />
    </div>
  );
};

export default GoogleMap;
