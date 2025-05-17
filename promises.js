function fetchData(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("✅ Data loaded");
      } else {
        reject("❌ Failed to load data");
      }
    }, 1500);
  });
}

async function load() {
  try {
    const data = await fetchData(true);
    console.log(data);
  } catch (error) {
    console.error("Caught Error:", error);
  }
}

load();
