// dev one 
// function getInventory(cb){
//         setTimeout(() => {
//                console.log("Inventory work done");
//                 cb();
//          }, 2000);
// }

// getInventory(function(){
//         console.log("Done inventoryu work");
//         setTimeout(() => {
//               // check payument 
//               //   
//               setTimeout(() => {
//                 // warer
//               }, 9090);
//         }, 100);
// });


function task1(callback) {
        setTimeout(() => {
            console.log('Task 1 completed');
            callback();
        }, 1000);
    }
    
    function task2(callback) {
        setTimeout(() => {
            console.log('Task 2 completed');
            callback();
        }, 1000);
    }
    
    function task3(callback) {
        setTimeout(() => {
            console.log('Task 3 completed');
            callback();
        }, 1000);
    }
    
    // Nested Callbacks - Callback Hell
    task1(() => {
        task2(() => {
            task3(() => {
                console.log('All tasks completed');
            });
        });
    });
    
