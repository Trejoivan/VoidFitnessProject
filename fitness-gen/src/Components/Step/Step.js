import './Step.css' 
import FirstImage from './FirstImage.js'
import SecondImage from './SecondImage.js'
import ThirdImage from './ThirdImage.js';
import InspireImage from './InspireImage.js'

function StepSection() {
  return (
    <section className="section-how" >
      <div className="container grid grid--2-cols grid--center-v">
        <div className="step-text-box">

          <h3 className="heading-tertiary">
          Workout Database
           
          </h3>
          <p className="step-description">
          Search for the right Workout from database containing 1300 workouts at your disposal. Find the workout that will help you hit that target, make your gym sessions consistent, and show your methods you've never seen before. Using our easy to navigate site, your could search by Target, Body Part, or Equipment you have Available.
          </p>
        </div>
        <div className="step-img-box">
          <FirstImage />
        </div>
        <div className="step-img-box">
          <ThirdImage />
        </div>
        <div className="step-text-box">
          <p className="step-number"></p>
          <h3 className="heading-tertiary">Save And Plan Workouts</h3>
          <p className="step-description">
            You must be signed in in order to fully take advantage or our "Save Workouts" Feature that allows you to plan your daily and even weekly workouts in an orderly manner. Never again will you spend hours looking up your next workout!
          </p>
        </div>

        <div className="step-text-box">
          <p className="step-number"></p>
          <h3 className="heading-tertiary">
            Share and Send your planned workouts to friends for them to easily follow along.
          </h3>
          <p className="step-description">
            Creat a profile, so you can save and plan your workouts with friends and even compare with thier plans and yours. Use our profile page to manage your target areas!
          </p>
        </div>
        <div className="step-img-box">
        <SecondImage />
        </div>
        <div className="step-img-box">
         <InspireImage />
        </div>
        <div className="step-text-box">
          <p className="step-number"></p>
          <h3 className="heading-tertiary">Inspire</h3>
          <p className="step-description">
            Through Motivational quotes, gain that extra second to read and breath before hitting your next set with aboslute power and focus!
          </p>
        </div>
      </div>
    </section>
  );
}

export default StepSection;