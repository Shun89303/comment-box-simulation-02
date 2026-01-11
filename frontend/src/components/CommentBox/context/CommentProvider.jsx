import { useState } from 'react';
import { CommentContext } from './CommentContext.js';

export const CommentProvider = ({ children }) => {
  const [text, setText] = useState('');

  const handleText = (e) => {
        const value = e.target.value;
        if (!value.trim()) return;
        setText(e.target.value);
    }

  const handleComment = () => {
    console.log(text);
  };

  return (
    <CommentContext.Provider value={{ text, setText, handleComment, handleText }}>
      {children}
    </CommentContext.Provider>
  );
};