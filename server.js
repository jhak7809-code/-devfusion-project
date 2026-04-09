const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let complaints = [];

app.post('/add', (req, res) => {
    complaints.push({ ...req.body, status: "Pending" });
    res.send("Added");
});

app.get('/all', (req, res) => {
    res.json(complaints);
});

app.put('/update/:id', (req, res) => {
    complaints[req.params.id].status = "Resolved";
    res.send("Updated");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));