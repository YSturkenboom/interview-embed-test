import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', gap: '10px' }}>
      <iframe
        title="IDE"
        src="http://ec2-18-157-180-167.eu-central-1.compute.amazonaws.com:8443"
        style={{ flex: 1, border: '1px solid #ccc' }}
      />
      <iframe
        title="Frontend Preview"
        src="http://ec2-18-157-180-167.eu-central-1.compute.amazonaws.com:3000"
        style={{ flex: 1, border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default App;
