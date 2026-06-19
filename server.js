import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.post('/', (req,res) => {
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
