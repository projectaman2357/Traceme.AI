import React from "react";
import "./Choose.css"; // Add appropriate styling here
import '../assets/live.png'

const WhyChooseAskMe = () => {
  return (
    <section className="why-choose-section">
      <h1 className="why-choose-heading">Why Choose Ask Me?</h1>
      <div className="features-container">
        {/* Feature 1 */}
        <div className="feature">
          <img
            src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&auto=format%2Ccompress&w=3840" // Replace with actual image path
            alt="Daily Live Classes"
            className="feature-image"
          />
          <h2>Daily live classes</h2>
          <p>
            Chat with educators, ask questions, answer live polls, and get your
            doubts cleared—all while the class is going on.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <img
            src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&auto=format%2Ccompress&w=1920" // Replace with actual image path
            alt="Practice and Revise"
            className="feature-image"
          />
          <h2>Practice and revise</h2>
          <p>
            Learning isn’t just limited to classes with our practice section,
            mock tests, and lecture notes shared as PDFs for your revision.
          </p>
        </div>
  {/* Feature 3 */}
  <div className="feature">
          <img
            src="data:image/jpeg;base64,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" // Replace with actual image path
            alt="Practice and Revise"
            className="feature-image"
          />
          <h2>Mock Practices</h2>
          <p>
            Practices isn’t just limited to classes with our practice section,
            mock tests, and lecture notes shared as PDFs for your revision.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature">
          <img
            src="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&auto=format%2Ccompress&w=1920" // Replace with actual image path
            alt="Learn Anytime, Anywhere"
            className="feature-image"
          />
          <h2>Learn anytime, anywhere</h2>
          <p>
            One subscription gets you access to all our live and recorded
            classes to watch from the comfort of any of your devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAskMe;
