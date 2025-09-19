import logo from './logo.svg';
import './App.css';

const bucketName = process.env.REACT_APP_BUCKET_NAME;
const queueName = process.env.REACT_APP_QUEUE_NAME;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bucket Name: {bucketName ? bucketName : 'Not set'}
        </p>
        <p>
          Queue Name: {queueName ? queueName : 'Not set'}
        </p>
      </header>
    </div>
  );
}

export default App;
