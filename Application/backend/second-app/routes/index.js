var express = require('express');
var router = express.Router();
var { Pool } = require('pg');

const DATABASE_URL =
  `postgresql://${process.env.POSTGRES_USER}:` +
  `${process.env.POSTGRES_PASSWORD}@` +
  `${process.env.POSTGRES_HOST}:` +
  `${process.env.POSTGRES_PORT}/` +
  `${process.env.POSTGRES_DB}`;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pg', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ ok: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
