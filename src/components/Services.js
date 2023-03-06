import React from "react";
import walk30Image from "../images/walk30.webp";
import virtualTraining from "../images/services_virtual-training.webp";
import inPersonTraining from "../images/services_in-person-training.webp";
import trainingWalk from "../images/services_training-walk.webp";
import virtualPlusInPerson from "../images/services_virtual-plus-in-person.webp";
import daycareImage from "../images/daycare.png";
import trainingImage from "../images/training.jpeg";
import photographyImage from "../images/services_pet-photography.jpeg";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <main>
      <section className="services">
        <h2 className="services__title heading-text">Services</h2>
        <ul className="cards">
          <ServiceItem
            title="Walks"
            price="Please email to be added to waitlist"
            visibleText="A customized experience for your dog to keep them physically and"
            hiddenText={`mentally engaged. What's included: a recap of our adventure,
								action photo, and an activity report. (Additional dog: $10)`}
            image={walk30Image}
          />
          <ServiceItem
            title="Daycamp"
            price="Please email to be added to waitlist"
            visibleText="Your dog will spend the day with a customized experience"
            hiddenText={`tailored to their 
						needs and comfort level, which includes opportunities for play time with humans and other
						 dogs, mental and physical enrichment, and training using positive reinforcement and games.
						  In addition you will receive a report of their experience, photos, and on demand updates.`}
            image={daycareImage}
          />
          <ServiceItem
            title="Photography"
            price="$250"
            visibleText="A custom photoshoot in the studio or at an outdoor location with
						5-10"
            hiddenText="portraits of your pet to choose from."
            image={photographyImage}
          />
          <ServiceItem
            title="Virtual Training Session"
            price="$75"
            visibleText={[
              "A pre-assessment questionnaire to get to know you and your dog",
              "Review of video examples of your dog’s behavior",
            ]}
            hiddenText={[
              "1 hour discussion and virtual training with your dog",
              "Follow up email with a training plan and homework",
              "Package: 3 Virtual training sessions: $200",
            ]}
            image={virtualTraining}
          />
          <ServiceItem
            title="In-Person Training Session"
            price="$175"
            visibleText={[
              "A pre-assessment questionnaire to get to know you and your dog",
              "1 hour training with your dog",
            ]}
            hiddenText={[
              "Follow up email with a training plan and homework",
              "Package: 3 In person training sessions: $500",
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
            title="Virtual Training Assessment + In-Person training Session"
            price="$200"
            visibleText={[
              "A pre-assessment questionnaire to get to know you and your dog",
            ]}
            hiddenText={[
              "Review of video examples of your dog’s behavior",
              "1 hour virtual assessment",
              "Follow up email with a training plan and homework",
              "1 hour in person training session",
              "Package: 3 In person training sessions: $500",
            ]}
            image={virtualPlusInPerson}
          />
          <ServiceItem
            title="Group Classes"
            price="#TBD"
            visibleText="Coming Soon!"
            image={trainingImage}
          />
        </ul>
      </section>
    </main>
  );
};

export default Services;
