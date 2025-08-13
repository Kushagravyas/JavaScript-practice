async function fetchData() {
    return "Welcome User!";
}

async function getData() {
    const result = await fetchData();
    console.log(result);
}
getData();

async function user() {
    return "KUshagra Vyas";
};

async function table() {
    const result = await user();
    console.log(result);
};

table();
