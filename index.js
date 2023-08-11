const { listen } = require('./src/Server');

(async () => {
  try {
    await listen(3000);
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }
})();
