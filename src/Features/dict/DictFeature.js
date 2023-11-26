// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightedWord, fetchMeaning } from './wordSlice';

const DictFeature = () => {
  const dispatch = useDispatch();
  const highlightedWord = useSelector((state) => state.word.highlightedWord);
  const meaning = useSelector((state) => state.word.meaning);
  const status = useSelector((state) => state.word.status);

  
  
  const handleMeaningButtonClick1 = () => {
    dispatch(setHighlightedWord(window.getSelection().toString()))
  };

  useEffect(() => {
    if (highlightedWord) {
      dispatch(fetchMeaning(highlightedWord));
    }
  },[highlightedWord,dispatch]);
  

  return (
    <div className='edTech'>
      <div className='selectedWord'>Selected Word: {highlightedWord}</div>
      <div className='meaning'>Meaning: {status === 'loading' ? 'Loading...' : meaning}</div>
      <button className='b-getMeaning' onClick={handleMeaningButtonClick1}>
      Get Meaning
      </button>
    </div>
  );
};

export default DictFeature;
