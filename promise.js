// const call_waeatehr_api = new Promise((resolve, reject) => {
//     setInterval(() => {
//         let success = true;
//         if (success) {
//             resolve("Task one completed")
//         } else {
//             reject("Tack rejected")
//         }
//     }, 1000);
// })
// const call_waeatehr_api_two = new Promise((resolve, reject) => {
//     setInterval(() => {
//         let success = true;
//         if (success) {
//             resolve("Task Two  completed")
//         } else {
//             reject("Tack rejected")
//         }
//     }, 1000);
// })

// call_waeatehr_api.then((result) => {
//     console.log(result);
//     call_waeatehr_api_two.then((res) => {
//         console.log(res);
//     })
// })

// http 
// no , offdload 
// console.log("one");

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
//    console.log(res);
//    console.log("three");
   
// })
// console.log("two");

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        console.log("Raw Response Object:", res); // Logs the Response object
        return res.json(); // Extract JSON body
    })
    .then((data) => {
        console.log("Body Response:", data); // Logs the actual JSON response
    })
    .catch((err) => console.error('Error:', err));

