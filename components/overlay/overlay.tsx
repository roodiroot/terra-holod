import CookieBanner from "../cookie-banner";
import Modal from "./modal";
import CallWidget from "./widgets/call-widget";

const Overlay = () => {
  return (
    <>
      <Modal />
      <CallWidget />
      <CookieBanner />
    </>
  );
};

export default Overlay;
