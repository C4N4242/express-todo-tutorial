const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let todos = [];  // ToDoリストの初期化

// ToDoの一覧を取得
app.get('/todos', (req, res) => {
  res.json(todos);
});

// 新しいToDoを追加
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

// ToDoを削除
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

// サーバーを開始
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

