import { useState, useEffect } from 'react';
import { CommentContext } from './CommentContext.js';
import { useRef } from 'react';

export const CommentProvider = ({ children }) => {
  const [ text, setText ] = useState('');
  const [ image, setImage ] = useState(null);
  const [ preview, setPreview ] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments')
      if (!res.ok) throw new Error('fetch comments failed');
      const data = await res.json();
      setPreview(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchComments();
  }, [])

  const fileInputRef = useRef(null);

  const handleComment = async () => {
    setText(text.trim());

    const formData = new FormData();
    formData.append('text', text);
    if (image) formData.append('image', image);

    try {
      const res = await fetch('/api/comments/uploads', {
        method: "POST",
        body: formData
      })
      if (!res.ok) throw new Error('failed to send comment');
  
      const data = await res.json();
      console.log("Comment sent: ", data);
  
      setText('');
      setImage(null);
    } catch (error) {
      console.error(error);
    }
    fetchComments();
  };

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return ;
    setImage(file);
  }

  return (
    <CommentContext.Provider 
      value={{ 
        text, 
        setText, 
        image,
        setImage,
        handleComment, 
        fileInputRef,
        handleFileChange,
        handleUploadImage,
        preview
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};