const checkInventory  = ()=> { 
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Task one completed")
            } else {
                reject("Tack rejected")
            }
        }, 1000);
    })
}

const checkPayment  = ()=> new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Task Two  completed")
        } else {
            reject("Tack rejected")
        }
    }, 1000);
})

async function completeTask() {
    let res =  await checkInventory();
    console.log(res);
    
    await checkPayment();
    console.log(res);
    
} 

console.log("one");
completeTask().then((res)=>{
    console.log("completed");
});
console.log("two");

