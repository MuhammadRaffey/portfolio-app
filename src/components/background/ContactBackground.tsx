import React from "react";

const ContactBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-75">
      <video
        className="h-full w-full object-cover"
        autoPlay={true}
        loop
        playsInline={true}
        muted
        preload="auto"
      >
        <source src="/contact.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-bg-dark via-bg-dark/80 to-transparent" />
    </div>
  );
};

export default ContactBackground;
