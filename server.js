
const express = require('express');

const app = express();
const PORT = 3000;

// استقبال البيانات بصيغة JSON
app.use(express.json());


 // Middleware للتحقق من بيانات الكتاب
function validateBook(req, res, next) {
  const { title, author, category } = req.body;

  if (
    typeof title !== 'string' || !title.trim() ||
    typeof author !== 'string' || !author.trim() ||
    typeof category !== 'string' || !category.trim()
  ) {
    return res.status(400).json({
      error: 'Title, author, and category are required and must be non-empty strings.'
    });
  }

  next();
}


// قائمة الكتب المخزنة في الذاكرة
let books = [
  {
    id: 1,
    title: 'Learning JavaScript',
    author: 'John Smith',
    category: 'Programming'
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Programming'
  },
  {
    id: 3,
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    category: 'Fantasy'
  }
];

// المسار الرئيسي
app.get('/', (req, res) => {
  res.send('Books API is running!');
});


 // إضافة كتاب جديد
app.post('/api/books', validateBook, (req, res) => {
  const newBook = {
    id: books.length > 0
      ? Math.max(...books.map((book) => book.id)) + 1
      : 1,
    title: req.body.title.trim(),
    author: req.body.author.trim(),
    category: req.body.category.trim()
  };

  books.push(newBook);

  res.status(201).json({
    message: 'Book added successfully',
    book: newBook
  });
});


 // عرض الكتب مع إمكانية التصفية حسب التصنيف
app.get('/api/books', (req, res) => {
  const { category } = req.query;

  if (category) {
    const filteredBooks = books.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );

    return res.status(200).json(filteredBooks);
  }

  res.status(200).json(books);
});


// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Books API server is running on http://localhost:${PORT}`);
});
