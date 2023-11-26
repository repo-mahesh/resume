// SpecialDisplayComponent.js
import React, { useState } from 'react';
import DictFeature from "../../Features/dict/DictFeature";
import Breadcrumb from '../../HOC/BreadCrumbs';

const SpecialDisplayComponent = ({ contentData }) => {
  const [currentSection, setCurrentSection] = useState('section1');

  const handleInteraction = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <div>
      <Breadcrumb/>
      <DictFeature />
      <div
        onMouseEnter={() => handleInteraction('section1')}
        onTouchStart={() => handleInteraction('section1')}
        style={{ cursor: 'none', marginBottom: '20px' }}
      >
        Hover/Touch to Go to Section 1 (Special Display)
      </div>
      <div
        onMouseEnter={() => handleInteraction('section2')}
        onTouchStart={() => handleInteraction('section2')}
        style={{ cursor: 'none', marginBottom: '20px' }}
      >
        Hover/Touch to Go to Section 2 (Special Display)
      </div>

      <div
        id="section1"
        style={{ display: currentSection === 'section1' ? 'block' : 'none' }}
      >
        {/* Render content dynamically from the prop */}
        <h2>{contentData.section1.title}</h2>
        <p>{contentData.section1.content}</p>
      </div>

      <div
        id="section2"
        style={{ display: currentSection === 'section2' ? 'block' : 'none' }}
      >
        {/* Render content dynamically from the prop */}
        <h2>{contentData.section2.title}</h2>
        <p>{contentData.section2.content}</p>
      </div>
    </div>
  );
};

export default SpecialDisplayComponent;
