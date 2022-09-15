const baseUrl = process.env.NODE_ENV !== "production" ? "http://localhost:8080" : "https://1af1c4.deta.dev";
console.log(baseUrl);

export default baseUrl