const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the things page');
});

// export this router to use in other files
module.exports = router;
