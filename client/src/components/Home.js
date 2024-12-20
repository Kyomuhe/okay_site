import React from "react";
import { Link } from "react-router-dom";
import dep1 from "./images/dep1.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faSmile, faHeartbeat, faBalanceScale, faShieldAlt, faSadCry } from "@fortawesome/free-solid-svg-icons";
import dep18 from"./images/dep.PNG";




const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
          <h1 className="text-3xl font-serif text-gray-800">It's Okay <span className="text-gray-500">App</span></h1>
          <nav className="flex gap-4">
            <Link
              to="/signup"
              className="text-gray-700 hover:text-mint-500 px-3 py-2 rounded transition"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="text-gray-700 hover:text-mint-500 px-3 py-2 rounded transition"
            >
              Sign In
            </Link>
            <Link
              to="/read"
              className="text-gray-700 hover:text-mint-500 px-3 py-2 rounded transition"
            >
              Read Stories
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content with Background Image */}
      <main
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white shadow-md mx-6 my-8 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${dep1})` }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Find Support and Connection
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Your Companion for Life's Ups and Downs
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We understand that life can be tough. Here at <em>It's Okay App</em>, you'll find a community of people who care and are ready to listen.
          </p>
          <Link
            to="/read"
            className="inline-block px-6 py-3 bg-mint-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-mint-600 transition transform hover:-translate-y-1"
          >
            Read Stories
          </Link>
        </div>
      </main>

      {/* Additional Content Sections */}
      <section className="px-6 py-12 bg-cover bg-center"
      style={{
      backgroundColor:'white',
      backgroundSize: "cover",
      }}>
        <div className="bg-gray-900 bg-opacity-80 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is Mental Illness?</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Mental illness refers to a wide range of mental health conditions that affect mood, thinking, and behavior. Examples include depression, anxiety disorders, schizophrenia, eating disorders, and addictive behaviors.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            It is important to understand that mental illness is common and affects people of all ages, backgrounds, and walks of life. Recognizing the signs and seeking help early can significantly improve outcomes.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            <FontAwesomeIcon icon={faBrain} className="text-mint-500 mr-2" />
            Types of Mental Disorders
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              <FontAwesomeIcon icon={faSmile} className="text-mint-500 mr-2" />
              <strong>Depression:</strong> Persistent feelings of sadness and loss of interest in activities.
            </li>
            <li>
              <FontAwesomeIcon icon={faHeartbeat} className="text-mint-500 mr-2" />
              <strong>Anxiety Disorders:</strong> Excessive fear or worry that disrupts daily activities.
            </li>
            <li>
              <FontAwesomeIcon icon={faBalanceScale} className="text-mint-500 mr-2" />
              <strong>Bipolar Disorder:</strong> Extreme mood swings, including emotional highs (mania) and lows (depression).
            </li>
            <li>
              <FontAwesomeIcon icon={faShieldAlt} className="text-mint-500 mr-2" />
              <strong>Schizophrenia:</strong> A severe mental disorder characterized by distorted thinking, perceptions, and emotions.
            </li>
            <li>
              <FontAwesomeIcon icon={faSadCry} className="text-mint-500 mr-2" />
              <strong>Post-Traumatic Stress Disorder (PTSD):</strong> A condition triggered by experiencing or witnessing a traumatic event.
            </li>
          </ul>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center my-8 bg-white">
  <img
    src={dep18}
    alt="Description of dep18"
    className="max-w-full h-auto mb-8"
    style={{
      maskImage: "radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%)",
      WebkitMaskImage: "radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%)"
    }}
  />
</div>


      <section className="px-6 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Cures and Treatments</h2>
          <p className="text-lg text-gray-700 mb-4">
            While not all mental illnesses can be cured, many can be effectively managed. Treatment options include:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li><strong>Therapy:</strong> Talking therapies, such as cognitive-behavioral therapy (CBT) or counseling, can help manage symptoms.</li>
            <li><strong>Medication:</strong> Prescribed medications can help correct chemical imbalances in the brain.</li>
            <li><strong>Lifestyle Changes:</strong> Regular exercise, a healthy diet, and sufficient sleep can contribute to better mental health.</li>
            <li><strong>Support Groups:</strong> Connecting with others who face similar challenges can provide comfort and understanding.</li>
          </ul>
          <p className="text-lg text-gray-700">
            Always seek professional guidance to find the best treatment plan for your needs.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Awareness and Support</h2>
          <p className="text-lg text-gray-700 mb-4">
            Raising awareness about mental health is crucial for reducing stigma and encouraging individuals to seek help. Here are some ways we can promote mental health awareness:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Participating in mental health awareness campaigns.</li>
            <li>Sharing accurate information to dispel myths about mental illness.</li>
            <li>Encouraging open conversations about mental health in communities and workplaces.</li>
          </ul>
          <p className="text-lg text-gray-700">
            Together, we can create a supportive environment where everyone feels valued and understood.
          </p>
        </div>
      </section>
      <section className="px-6 py-12 bg-gray-100">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Mental Health Tips</h2>
    <p className="text-lg text-gray-700 mb-4">
      Taking proactive steps can help improve and maintain mental health. Here are some tips:
    </p>
    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li>Practice mindfulness or meditation to reduce stress.</li>
      <li>Engage in regular physical activity to boost mood.</li>
      <li>Maintain a balanced diet and prioritize sleep.</li>
      <li>Stay connected with friends and loved ones.</li>
      <li>Set realistic goals and celebrate small achievements.</li>
    </ul>
    <p className="text-lg text-gray-700">
      Remember, small changes can lead to significant improvements in your mental health.
    </p>
  </div>
</section>
<section className="px-6 py-12 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Supporting a Loved One</h2>
    <p className="text-lg text-gray-700 mb-4">
      Supporting someone with mental illness can be challenging but deeply rewarding. Here are some tips:
    </p>
    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li>Listen without judgment and show empathy.</li>
      <li>Encourage them to seek professional help.</li>
      <li>Educate yourself about their condition to understand their experiences.</li>
      <li>Offer practical help, such as accompanying them to appointments.</li>
      <li>Take care of your own mental health to stay supportive.</li>
    </ul>
  </div>
</section>
<section className="px-6 py-12 bg-gray-100">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Recognizing the Signs</h2>
    <p className="text-lg text-gray-700 mb-4">
      Early recognition of mental illness can make a significant difference in treatment and recovery. Common signs include:
    </p>
    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li>Withdrawal from friends and family.</li>
      <li>Significant changes in sleep or eating patterns.</li>
      <li>Prolonged feelings of sadness or hopelessness.</li>
      <li>Unexplained physical ailments or lack of energy.</li>
      <li>Difficulty concentrating or making decisions.</li>
    </ul>
    <p className="text-lg text-gray-700">
      If you notice these signs in yourself or someone you care about, consider seeking professional help.
    </p>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-50 text-center py-4 text-sm text-gray-600 border-t border-gray-300">
        © 2024 It's Okay App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
