import { CommentBox } from './components/CommentBox/CommentBox.jsx';
import { CommentSection } from './components/CommentSection/CommentSection.jsx';
import { CommentProvider } from './components/CommentBox/context/CommentProvider.jsx';
import './App.css';
function App() {
  
  return (
    <div>
      <CommentProvider>
        <CommentBox />
        <CommentSection />
      </CommentProvider>
    </div>
  )
}

export default App