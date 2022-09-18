const baseUrl = process.env.NODE_ENV.trim() !== "production" ? "http://localhost:8080" : "https://passport-fb0v.onrender.com";
console.log(baseUrl);

export default baseUrl