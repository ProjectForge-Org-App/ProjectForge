import app from './app.js';

const PORT = process.env.PORT || 3000;

try {
  app.listen(PORT, () => {
    console.log(`🏁 ProjectForge server listening on port ${PORT}`);
  });
} catch (err) {
  console.error('❌ Startup error:', err);
}
