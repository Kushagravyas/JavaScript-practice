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



function getFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍕 Food is ready");
    }, 2000);
  });
}

async function eatFood() {
  console.log("Ordering food...");
  const food = await getFood(); // Waits here until the promise resolves
  console.log(food);
  console.log("Now I'm eating!");
}

eatFood();

