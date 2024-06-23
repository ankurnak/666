const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/news', (req, res) => {
  const news = [
    { id: 1, title: "Новина 1", description: "Опис новини 1" },
    { id: 2, title: "Новина 2", description: "Опис новини 2" },
    { id: 3, title: "Новина 3", description: "Опис новини 3" },
    { id: 4, title: "Новина 4", description: "Опис новини 4" },
    { id: 5, title: "Новина 5", description: "Опис новини 5" },
    { id: 6, title: "Новина 6", description: "Опис новини 6" },
    { id: 7, title: "Новина 7", description: "Опис новини 7" },
    { id: 8, title: "Новина 8", description: "Опис новини 8" },
    { id: 9, title: "Новина 9", description: "Опис новини 9" },
    { id: 10, title: "Новина 10", description: "Опис новини 10"}
  ];
  res.json(news);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
