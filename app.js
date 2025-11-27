const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("🚀 DevOps Project Live! CI/CD + Render Deployment Working");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
