const db = {
    getFullName: () => Promise.resolve('Jack Spratt'),
    getAddress: () => Promise.resolve('10 Clean Street'),
    getFavorites: () => Promise.resolve('Lean')
};

async function profile() {

    let fullName = await db.getFullName(); // Jack Spratt
    let address = await db.getAddress(); // 10 Clean Street
    let favorites = await db.getFavorites(); // Lean

    return res = {fullName, address, favorites};
}

profile().
then(res => console.log(res)); // results = ['Jack Spratt', '10 Clean Street', 'Lean'


//
// const db = {
//     getFullName: () => Promise.resolve('Jack Spratt'),
//     getAddress: () => Promise.resolve('10 Clean Street'),
//     getFavorites: () => Promise.resolve('Lean')
// };
//
// Promise.all([
//     db.getFullName(), // Jack Spratt
//     db.getAddress(), // 10 Clean Street
//     db.getFavorites() // Lean
// ])
//     .then(results => {
//         console.log(results);
//         // results = ['Jack Spratt', '10 Clean Stree', 'Lean']
//     })
//     .catch(err => {
//         //...
//     });
