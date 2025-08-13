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

async function User(a) {
    return "Welcome !";
}

async function Name() {
    const result = await User();
    console.log(result);
}
Name();

// Error handling with Async/Await function

async function getUser() {
    return "Kushagra Vyas!"
}
async function fetchUser() {
    try{
        const result = await getUser();
        console.log(result);
    } catch (error) {
        console.error("ERROR:", error); 
    }
};
fetchUser();