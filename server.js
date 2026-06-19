import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// ADD THIS LINE — serves all your static files (css, js)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/check-age', (req,res) => {
  const age = Number(req.body.age);
  if (Number.isNaN(age)) {
    return res.status(400).json({message: "Please enter a valid age."});
  }
  if (age >= 18) {
    res.json({message: "You are an adult."});
  } else {
    res.json({message: "You are a minor."});
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
