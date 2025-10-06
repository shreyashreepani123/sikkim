import React from "react";
import "../styles/teachings.css";

const Teachings = () => {
  return (
    <div className="teachings-page">
      {/* Page Title */}
      <h1 className="teachings-title">Buddha Teachings</h1>

      {/* Hero Section */}
      <div className="teachings-hero">
        <img src="/images/buddha.jpg" alt="Lord Buddha" className="buddha-img" />
        <p>
          The story of Siddhartha Gautama, the Buddha, and his timeless teachings.
        </p>
      </div>

      {/* Section 1: Life of Buddha */}
      <div className="section-card scrollable">
        <h2>The Life of Siddhartha Gautama (The Buddha)</h2>
        <p>
          Siddhartha Gautama was born in Lumbini, present-day Nepal, into the royal
          Shakya clan. Despite a life of luxury, he was troubled by the realities of
          aging, sickness, and death—discoveries known as the Four Sights. At age 29,
          he renounced palace life to seek truth, practicing asceticism and meditation.
          After six years, he realized that extreme deprivation was futile. Under the
          Bodhi Tree at Bodh Gaya, he attained Enlightenment, becoming the Buddha at
          age 35. For the next 45 years, he traveled across India, teaching all people
          regardless of caste or status. At 80, he entered Parinirvana in Kushinagar,
          leaving a legacy of wisdom and compassion.
        </p>
      </div>

      {/* Section 2: Three Universal Characteristics */}
      <div className="section-card scrollable">
        <h2>The Three Universal Characteristics</h2>
        <ul>
          <li>
            <span className="highlight">Anicca (Impermanence):</span> All things are
            transient and ever-changing.
          </li>
          <li>
            <span className="highlight">Dukkha (Suffering):</span> Existence is marked
            by dissatisfaction and struggle.
          </li>
          <li>
            <span className="highlight">Anatta (No-Self):</span> There is no permanent,
            unchanging essence within beings.
          </li>
        </ul>
      </div>

      {/* Section 3: Four Noble Truths */}
      <div className="section-card scrollable">
        <h2>The Four Noble Truths</h2>
        <ol>
          <li>
            <span className="highlight">Dukkha:</span> Life is inherently unsatisfactory,
            marked by birth, aging, sickness, and death.
          </li>
          <li>
            <span className="highlight">Samudaya:</span> The cause of suffering is craving
            (taṇhā), rooted in ignorance.
          </li>
          <li>
            <span className="highlight">Nirodha:</span> Suffering can cease with the
            elimination of craving, leading to Nirvana.
          </li>
          <li>
            <span className="highlight">Magga:</span> The Eightfold Path provides the way
            to liberation.
          </li>
        </ol>
      </div>

      {/* Section 4: Noble Eightfold Path */}
      <div className="section-card scrollable">
        <h2>The Noble Eightfold Path</h2>
        <p>
          The Middle Way, avoiding extremes of indulgence and asceticism, is expressed
          through eight interdependent practices:
        </p>
        <ul>
          <li><strong>Right View</strong> – Understanding the Four Noble Truths.</li>
          <li><strong>Right Intention</strong> – Cultivating thoughts of kindness and renunciation.</li>
          <li><strong>Right Speech</strong> – Truthful, harmonious communication.</li>
          <li><strong>Right Action</strong> – Ethical conduct, avoiding harm and dishonesty.</li>
          <li><strong>Right Livelihood</strong> – Earning a living without causing harm.</li>
          <li><strong>Right Effort</strong> – Nurturing wholesome states of mind.</li>
          <li><strong>Right Mindfulness</strong> – Awareness of body, feelings, and mind.</li>
          <li><strong>Right Concentration</strong> – Deep meditation leading to insight.</li>
        </ul>
      </div>

      {/* Section 5: Other Teachings */}
      <div className="section-card scrollable">
        <h2>Other Key Teachings</h2>
        <ul>
          <li><strong>Karma:</strong> Actions have consequences that shape future experience.</li>
          <li><strong>Samsara:</strong> The cycle of rebirth, driven by craving and ignorance.</li>
          <li><strong>The Three Jewels:</strong> The Buddha, Dharma, and Sangha as refuges.</li>
          <li>
            <strong>The Five Precepts:</strong> Abstaining from killing, stealing, sexual misconduct,
            false speech, and intoxicants.
          </li>
        </ul>
        <p>
          The ultimate goal of practice is Nirvana: freedom from greed, hatred, and delusion,
          and the realization of peace and liberation.
        </p>
      </div>
    </div>
  );
};

export default Teachings;
