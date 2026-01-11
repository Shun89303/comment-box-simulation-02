import { useContext } from 'react';
import { CommentContext } from './CommentContext.js';

export const useComment = () => {
    const context = useContext(CommentContext);

    if (!context) {
        throw new Error('useComment must be used within CommentProvider');
    }

    return context;
}