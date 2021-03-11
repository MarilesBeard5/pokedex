/**
 * Modules init
 */
const express = require('express');
const cors = require('cors');

/**
 * Main App Variable
 */
const app = express();

/**
 * Enabled cors middleware usage for app variable
 */
app.use(cors())

app.get('/api/salutations', (req, res) => {
    const salutations = [
        'Ahai, Traveler!',
        'Hello, Adventurer!',
        'Champion, over here!',
        'Greetings, hero'
    ];
    res.json(salutations);
});

/**
 * Init app on given port
 */
const port = 8001;
app.listen(port, () => console.log(`Server started on port ${port}`));