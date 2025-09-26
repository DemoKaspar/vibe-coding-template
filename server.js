const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Environment variables from Humanitec resources
const bucketName = process.env.BUCKET_NAME;
const queueName = process.env.QUEUE_NAME;
const serviceAccount = process.env.SERVICE_ACCOUNT;
const namespace = process.env.NAMESPACE;

// Log available environment variables (for debugging)
console.log('Environment variables:');
console.log('- BUCKET_NAME:', bucketName);
console.log('- QUEUE_NAME:', queueName);
console.log('- SERVICE_ACCOUNT:', serviceAccount);
console.log('- NAMESPACE:', namespace);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: {
      bucketName,
      queueName,
      serviceAccount,
      namespace
    }
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'Vibe Coding Template',
    description: 'Template for rapid Node.js app development',
    version: '1.0.0',
    resources: {
      bucket: bucketName || 'Not configured',
      queue: queueName || 'Not configured',
      serviceAccount: serviceAccount || 'Not configured',
      namespace: namespace || 'Not configured'
    }
  });
});

// Example API endpoint
app.post('/api/example', (req, res) => {
  const { message } = req.body;
  res.json({
    received: message,
    timestamp: new Date().toISOString(),
    response: 'Hello from your vibe-coded app!'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Vibe coding app running on port ${PORT}`);
  console.log(`📱 Access your app at http://localhost:${PORT}`);
});