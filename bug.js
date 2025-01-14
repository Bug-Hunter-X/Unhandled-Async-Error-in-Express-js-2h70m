const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  setTimeout(() => {
    // Simulate an error that may occur during async processing 
    if (data.value === 'error') {
      throw new Error('Simulated async error');
    }
    console.log('Processed data:', data);
    res.status(200).json({ message: 'Data processed successfully' });
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});