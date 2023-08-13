import React from "react";
import ServiceItem from "./ServiceItem";

import addOnInPerson from "../images/add-on-in-person.webp";
import daycamp from "../images/daycamp.webp";
import groupClass from "../images/group-class.webp";
import inPersonTraining from "../images/in-person-training.webp";
import trainingWalk from "../images/training-walk.webp";
import photography from "../images/photography.webp";
// import victor from "../images/victor.webp";
import virtualTraining from "../images/virtual-training.webp";
import walks from "../images/walks.webp";

const Services = () => {
  return (
    <main>
      <section className="services">
        <h2 className="services__title heading-text">Services</h2>
        <ul className="cards">
          <ServiceItem
            title="Virtual Training Session"
            price="$75"
            visibleText={[
              "A pre-assessment questionnaire to learn more about you and your dog's goals",
              "Review of video examples of your dog’s behavior",
            ]}
            hiddenText={[
              "1 hour discussion and virtual training with your dog",
              "A detailed training program customized specifically for your dog",
              "1 week of continued support via phone/email",
            ]}
            image={virtualTraining}
          />
          {/* <ServiceItem
            title="3 Virtual Training Sessions"
            price="$200"
            visibleText={[
              "A pre-assessment questionnaire to learn more about you and your dog's goals",
              "Review of video examples of your dog’s behavior",
              "1 hour discussion and virtual training with your dog",
              "A detailed training program customized specifically for your dog",
            ]}
            hiddenText={["6 weeks of continued support via phone/email"]}
            image={virtualTraining}
          /> */}
          <ServiceItem
            title="Virtual Training Assessment + In-Person training Session"
            price="$250"
            visibleText={[
              "Virtual Assessment",
              [
                "Review of video examples of your dog’s behavior",
                "1 hour discussion and virtual training with your dog",
                "A detailed training program customized specifically for your dog",
              ],
            ]}
            hiddenText={[
              "In-person",
              [
                "60-90 minute session",
                "Assess your progress so far",
                "Fine tune your custom training program",
                "Intensive hands-on guidance to ensure you are able to enact your training program",
                "A digital folder containing handouts, videos, progress reports, and homework",
                "3 weeks of continued support via phone/email",
              ],
            ]}
            image={addOnInPerson}
          />
          <ServiceItem
            title="In-Person Training Session"
            price="$150"
            visibleText={[
              "60-90 minute session",
              "Assess your progress so far",
              "Fine tune your custom training program",
            ]}
            hiddenText={[
              "Intensive hands-on guidance to ensure you are able to enact your training program",
              "A digital folder containing handouts, videos, progress reports, and homework",
              "2 weeks of continued support via phone/email",
            ]}
            image={inPersonTraining}
          />
          <ServiceItem
            title="Training Walk"
            price="$100"
            visibleText={[
              "Work on loose leash walking",
              "Training tools to work on skills necessary for an enjoyable walk for you and your dog",
            ]}
            hiddenText={[
              "Follow up email with homework",
              "Packages: 3 Training walks $240, 5 Training walks $300",
            ]}
            image={trainingWalk}
          />
          <ServiceItem
            title="Group Classes"
            price="#TBD"
            visibleText="Coming Soon!"
            image={groupClass}
          />
          <ServiceItem
            title="Walks"
            price="Please email to be added to waitlist"
            visibleText="A customized experience for your dog to keep them physically and"
            hiddenText={`mentally engaged. What's included: a recap of our adventure,
								action photo, and an activity report. (Additional dog: $10)`}
            image={walks}
          />
          <ServiceItem
            title="Daycamp"
            price="Please email to be added to waitlist"
            visibleText="Your dog will spend the day with a customized experience"
            hiddenText={`tailored to their 
						needs and comfort level, which includes opportunities for play time with humans and other
						 dogs, mental and physical enrichment, and training using positive reinforcement and games.
						  In addition you will receive a report of their experience, photos, and on demand updates.`}
            image={daycamp}
          />
          <ServiceItem
            title="Photography"
            price="$250"
            visibleText="A custom photoshoot in the studio or at an outdoor location with
						5-10"
            hiddenText="portraits of your pet to choose from."
            image={photography}
          />
        </ul>
      </section>
    </main>
  );
};

export default Services;
