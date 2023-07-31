import React from "react";

import AlexImage from "../images/about_alex.png";
import KelliImage from "../images/about_kelli.webp";

const About = () => {
  return (
    <main className="page">
      <h1 className="page__title heading-text">About Us</h1>
      <section className="about">
        <div className="about__section">
          <img
            src={AlexImage}
            alt="Alex & Kelli Jacobson with their furry friends"
            className="about__photo"
          />
          <h2 className="about__title about__title_size_small heading-text">
            Alex Jacobson CPDT-KA
          </h2>
          <p className="about__text paragraph-text">
            Alex has worked with dogs professionally since 2018 when he began
            his career as a professional dog walker. Driven by a desire to
            improve the life of dogs he began volunteering with various animal
            rescues and shelters in the Los Angeles area. During that time he
            has learned to work with dogs of varying ages/temperaments/medical
            conditions/etc. Alex has always had a strong desire to learn, which
            led him to complete the CATCH Basics Pro dog training program, where
            he graduated with distinction. Following graduation, Alex became a
            “Certified Professional Dog Trainer - Knowledge Assessed” through
            the CCPDT (the leading independent certifying organization for the
            dog training profession). This certification provides an
            independent, scientifically valid measure of his understanding of
            the field of dog training, including instruction skills, learning
            theory, ethology, equipment, and animal husbandry. Alex continues to
            look for opportunities to grow his knowledge about dogs and dog
            behavior through additional training programs, conferences, and
            reviewing the latest dog behavior research. He has compassion for
            all animals but a special place in his heart for dogs that have
            difficulty communicating their needs and need extra patience and
            understanding. Through careful assessment, data collection, and
            custom, function based training programs, Alex has learned to
            understand what dogs are trying to communicate to us through their
            behavior.
          </p>
        </div>
        <div className="about__section about__section_reversed">
          <img
            src={KelliImage}
            alt="Alex & Kelli Jacobson with their furry friends"
            className="about__photo"
          />
          <h2 className="about__title about__title_size_small heading-text">
            Kelli
          </h2>
          <p className="about__text paragraph-text">
            Kelli grew up rescuing animals of all sizes. She was known in her
            neighborhood as the animal search and rescue expert and learned to
            communicate with animals and gain their trust. She began
            volunteering at a local animal rescue where she realized how much
            her knowledge and experience could help dogs in need. Kelli has
            continued to help rehabilitate rescue dogs. When she is not actively
            working with client dogs, she is the Director of Operations for a
            Los Angeles 501c3 animal rescue. Kelli is incredibly grateful to be
            working in a field that she is passionate about and doing so
            alongside her husband, Alex.
          </p>
        </div>
        <div style={{ maxWidth: '1000px', margin: '100px auto'}}>
          <h2 className="heading-text">Continuing Education</h2>
          <ul>
            <li className="paragraph-text">CAAWT Fearful and Aggressive To Friendly (2023)</li>
            <li className="paragraph-text">Behavior Explorer - Behavior Explorer Virtual Summit (2023)</li>
            <li className="paragraph-text">
              Behavior Explorer - The Shaping Skills Workshop Part 1 & 2 (2023)
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - Go Say Hi - 1 - 2 - 3: Orchestrated greetings
              (2023)
            </li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Pressure On Pressure Off: The Hidden World
              of Negative Reinforcement (2023)
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - Thrills and Chills: Helping your dog ride the
              roller coaster of life. (2023)
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - Matchmaker, Matchmaker - Make me a match:
              Applied CARAT (2023)
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - RAT: Relationship Assessment Tool Webinar
              (2023)
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - From House of Cards to Solid Foundation:
              Practical RCT Skills for Reactive Dogs (2023)
            </li>
            <li className="paragraph-text">Suzanne Clothier - Rewards, Lures and Bribes (2023)</li>
            <li className="paragraph-text">
              Grisha Stewart - Predation Substitute Training Webinar: New Ways
              to Manage Predatory Chasing (2023)
            </li>
            <li className="paragraph-text">
              Grisha Stewart - Suzanne Clothier - Elemental Questions(TM) Dog
              Training (2023)
            </li>
            <li className="paragraph-text">
              L.E.G.S.® Applied Ethology - Family Dog Mediation® Professional
              Course (2022)
            </li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Will Work For Food: Developing and
              Nurturing Food Motivation (2022)
            </li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Dealing with the Bogeyman: Helping Reactive
              and Fearful Dogs - The Play Way! (2022)
            </li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Sound Advice: Conquering Noise Sensitivity
              (2022)
            </li>
            <li className="paragraph-text">The Lemonade Conference (2022)</li>
            <li className="paragraph-text">
              Shelter Behavior Hub - Shelter Dog Behavior Mentorship (2022)
            </li>
            <li className="paragraph-text">Aggression In Dogs Conference (2021, 2022)</li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Intra-household Dog-Dog Aggression:
              Effective Management, Safety, and Restoring Harmony
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - Wild or Worried: Understanding Arousal (2022)
            </li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Ethological Contributions to Behavior
              Problems in Dogs (2022)
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - Distractions and - SQUIRREL - Using Them in
              Training (2022)
            </li>
            <li className="paragraph-text">Suzanne Clothier - Anatomy of Attention (2022)</li>
            <li className="paragraph-text">
              Suzanne Clothier - Thresholds, Transitions and Triggers (2022)
            </li>
            <li className="paragraph-text">
              Suzanne Clothier - Auto Check-In: Easy to teach volitional
              attention shift (2022)
            </li>
            <li className="paragraph-text">CAAWT Conference (2022)</li>
            <li className="paragraph-text">CAAWT Member Conference (2022)</li>
            <li className="paragraph-text">CAAWT Intro to Behavior Series (2022)</li>
            <li className="paragraph-text">
              Grisha Stewart - Doggie Language: Panel Discussion on Lili Chin's
              book, with Sue Sternberg, Kathy Sdao, Chirag Patel, & Grisha
              Stewart (2021)
            </li>
            <li className="paragraph-text">DPFL - Every Dog, Every Day Series (2021)</li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Living with & Training a Reactive Dog
              (2020)
            </li>
            <li className="paragraph-text">
              Denise Fenzi Academy - Reducing Overarousal and Reactivity via the
              Circle Method of Leash Walking (2019)
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
