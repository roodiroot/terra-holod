import CookieBanner from "../cookie-banner";
import FeedbackModalAutoOpener from "./feedback-open-auto-opener";
import Modal from "./modal";
import CallWidget from "./widgets/call-widget";

const Overlay = () => {
  return (
    <>
      <Modal />
      <FeedbackModalAutoOpener delay={10_000} />
      <CallWidget />
      <CookieBanner />
    </>
  );
};

export default Overlay;
