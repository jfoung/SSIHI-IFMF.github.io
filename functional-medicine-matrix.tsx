import React, { useState } from 'react';

const matrixCategories = [
  { id: 'assimilation', name: 'Assimilation' },
  { id: 'defense', name: 'Defense and Repair' },
  { id: 'energy', name: 'Energy Production' },
  { id: 'biotransformation', name: 'Biotransformation' },
  { id: 'communication', name: 'Communication' },
  { id: 'transport', name: 'Transport' },
  { id: 'structural', name: 'Structural Integrity' },
];

const concepts = [
  { id: 'c1', content: 'Digestion and absorption of nutrients', correctCategory: 'assimilation' },
  { id: 'c2', content: 'Immune system function and inflammation', correctCategory: 'defense' },
  { id: 'c3', content: 'Mitochondrial function and ATP production', correctCategory: 'energy' },
  { id: 'c4', content: 'Detoxification processes', correctCategory: 'biotransformation' },
  { id: 'c5', content: 'Hormone and neurotransmitter balance', correctCategory: 'communication' },
  { id: 'c6', content: 'Cardiovascular and lymphatic systems', correctCategory: 'transport' },
  { id: 'c7', content: 'Musculoskeletal and cellular membrane health', correctCategory: 'structural' },
  { id: 'c8', content: 'Gut microbiome balance', correctCategory: 'assimilation' },
  { id: 'c9', content: 'Oxidative stress management', correctCategory: 'defense' },
  { id: 'c10', content: 'Nutrient utilization for cellular function', correctCategory: 'energy' },
  { id: 'c11', content: 'Elimination of toxins and metabolic waste', correctCategory: 'biotransformation' },
  { id: 'c12', content: 'Cellular signaling pathways', correctCategory: 'communication' },
  { id: 'c13', content: 'Nutrient and oxygen delivery to tissues', correctCategory: 'transport' },
  { id: 'c14', content: 'Connective tissue and extracellular matrix', correctCategory: 'structural' },
];

const FunctionalMedicineMatrixMatcher = () => {
  const [selectedCategories, setSelectedCategories] = useState({});
  const [feedback, setFeedback] = useState('');

  const handleSelectCategory = (conceptId, categoryId) => {
    setSelectedCategories(prev => ({...prev, [conceptId]: categoryId}));
  };

  const checkAnswers = () => {
    let correct = 0;
    let feedbackText = '';

    concepts.forEach(concept => {
      const selectedCategory = selectedCategories[concept.id];
      if (selectedCategory === concept.correctCategory) {
        correct++;
        feedbackText += `Correct: "${concept.content}" belongs to the ${matrixCategories.find(c => c.id === concept.correctCategory).name} category.\n`;
      } else {
        feedbackText += `Incorrect: "${concept.content}" belongs to the ${matrixCategories.find(c => c.id === concept.correctCategory).name} category, not ${selectedCategory ? matrixCategories.find(c => c.id === selectedCategory).name : 'unselected'}.\n`;
      }
    });

    setFeedback(`You got ${correct} out of ${concepts.length} correct.\n\n${feedbackText}`);
  };

  return (
    <div style={{padding: '1rem', fontFamily: 'Arial, sans-serif'}}>
      <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Functional Medicine Matrix Matcher</h2>
      <p style={{marginBottom: '1rem'}}>Match each concept to its correct category in the Functional Medicine Matrix.</p>
      
      {concepts.map(concept => (
        <div key={concept.id} style={{marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f8f8f8'}}>
          <p style={{marginBottom: '0.5rem'}}>{concept.content}</p>
          <select 
            value={selectedCategories[concept.id] || ''} 
            onChange={(e) => handleSelectCategory(concept.id, e.target.value)}
            style={{width: '100%', padding: '0.25rem', borderRadius: '4px'}}
          >
            <option value="">Select a category</option>
            {matrixCategories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      ))}
      
      <button onClick={checkAnswers} style={{marginTop: '1rem', backgroundColor: '#4CAF50', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer'}}>
        Check Answers
      </button>
      
      {feedback && (
        <div style={{marginTop: '1rem', padding: '1rem', backgroundColor: '#e8f5e9', borderRadius: '4px', whiteSpace: 'pre-wrap', lineHeight: '1.5'}}>
          {feedback}
        </div>
      )}
      
      <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: '#e3f2fd', borderRadius: '4px'}}>
        <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Functional Medicine Matrix Categories:</h3>
        <ul style={{listStyleType: 'disc', paddingLeft: '1.5rem'}}>
          {matrixCategories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FunctionalMedicineMatrixMatcher;
