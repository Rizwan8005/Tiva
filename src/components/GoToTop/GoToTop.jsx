import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const GoToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Layout>
      {isVisible && (
        <div className="fixed bottom-10 right-10">
          <div
            className="animate-bounce w-10 h-10 bg-primary rounded-full text-mainWhite flex justify-center items-center cursor-pointer"
            onClick={GoToTopHandler}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </div>
      )}
    </Layout>
  );
};
export default GoToTop