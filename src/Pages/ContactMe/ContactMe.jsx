// React
import React, { useEffect } from "react";
// React
// CSS
import styles from "./ContactMe.module.css";
// CSS
// Modules And Components
import { IoCallOutline } from "react-icons/io5";
import ContactCard from "./ContactCard/ContactCard";
import { me } from "../../Components/ImagesExporter/ImagesExporter";
import { AiOutlineMail } from "react-icons/ai";
// Modules And Components
const ContactMe = ({ themeColor }) => {
  useEffect(() => {
    console.log(themeColor);
  });
  const contactItems = [
    {
      name: "call",
      value: "+98 922 8135 815",
      icon: <IoCallOutline style={{ color: themeColor }} />,
    },
    {
      name: "mail",
      value: "me74242@gmail.com",
      icon: <AiOutlineMail style={{ color: themeColor }} />,
    },
    {
      name: "mail",
      value: "info@a-goodarzi.ir",
      icon: <AiOutlineMail style={{ color: themeColor }} />,
    },
  ];
  const contactMeRef = React.createRef();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      contactMeRef.current.style.opacity = 1;
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [contactMeRef]);
  return (
    <div className={styles.contactMeContainer} ref={contactMeRef}>
      <div className={styles.items}>
        {contactItems.map((item) => {
          return (
            <ContactCard key={item.value} data={item} themeColor={themeColor} />
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <img src={me} alt="my-pic" />
      </div>
    </div>
  );
};

export default ContactMe;
