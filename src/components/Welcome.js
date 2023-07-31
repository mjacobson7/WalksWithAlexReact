import React from "react";

const Welcome = () => {
  return (
    <main className="page">
      <h2 className="heading-text" style={{ textAlign: "center", marginTop: '40px' }}>
        Welcome to Walks With Alex!
      </h2>
      <section
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "0 20px",
          margin: "0 auto 100px",
          boxSizing: 'border-box'
        }}
      >
        <p className="paragraph-text">
          We are thrilled to welcome you and your dog to Walks With Alex, where
          we specialize in providing function based dog training services to
          help you build a stronger bond. We are dedicated to helping you
          achieve your relationship goals and ensure that your dog receives the
          best possible care.
        </p>
        <p className="paragraph-text">
          We understand that your time is valuable, which is why we start with a
          virtual consultation as the first step in our training process. This
          initial consultation is designed to assess your dog's current
          behaviors, and identify behaviors we can encourage, and those we would
          like to replace. During this call, we will also discuss your training
          goals and answer any questions you may have about our training
          approach.
        </p>
        <p className="paragraph-text">
          To schedule a virtual consultation, please click{" "}
          <a
            className="card__link"
            href="https://calendly.com/thegratefuldog/behavior-consultation"
            target="_blank"
          >
            this link
          </a>{" "}
          and fill out the questionnaire in order to learn more about your
          goals. To secure your appointment, we kindly ask that you make your
          payment before your virtual consultation. If payment is not received
          before the scheduled call, the appointment will need to be
          rescheduled.
        </p>
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0" }} className="paragraph-text">
            <a
              className="card__link"
              href="https://venmo.com/u/WalksWithAlex"
              target="_blank"
            >
              Venmo
            </a>
            : @Walkswithalex
          </p>
          <p style={{ margin: "0" }} className="paragraph-text">
            Zelle: info@walkswithalex.com
          </p>
        </div>
        <p className="paragraph-text">
          Please download the{" "}
          <a
            className="card__link"
            href="https://www.marcopolo.me/download/"
            target="_blank"
          >
            Marco Polo App
          </a>
          . The app makes it easy for us to stay in touch with each other,
          exchange videos of your dog's behavior, and allows us to collaborate
          effectively and efficiently.
        </p>
        <div>
          <p className="paragraph-text">
            Following the virtual consultation, you will receive the following
            within 48 hours:
          </p>
          <ul className="paragraph-text">
            <li>
              instructions for scheduling your in person training session, where
              we will assess you and your dog's progress, as well as discuss
              next steps to achieve your training goals.
            </li>
            <li>a recording of our initial consult</li>
            <li>personalized homework for you and your dog</li>
          </ul>
        </div>
        <p className="paragraph-text">
          We look forward to working with you and your dog and helping you build
          a strong, healthy, and happy relationship. Thank you for choosing
          Walks With Alex. If you have any questions or concerns, please do not
          hesitate to contact us via email, or the Volley app.
        </p>
      </section>
    </main>
  );
};

export default Welcome;
