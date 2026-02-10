import CookieBanner from "../cookie-banner";
import FeedbackModalAutoOpener from "./feedback-open-auto-opener";
import Modal from "./modal";
import CallWidget from "./widgets/call-widget";

const Overlay = () => {
  return (
    <>
      <Modal />
      <FeedbackModalAutoOpener />
      <CallWidget />
      <CookieBanner />
    </>
  );
};

export default Overlay;
