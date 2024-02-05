

const set=new Set();
set.add(25);
set.add(35);
set.add(55);
set.add(45);
set.add(15);

set.forEach(element => {
    console.log(element);
});
console.log(set);




// ============map===========================
const map=new Map();
map.set("name","yashika");
map.set("country","india");
map.set("email","yashika@gmail.com");

console.log(map.get("name"));

map.delete('email');

map.forEach((val,key)=>{
    console.log(`${key} : ${val}`);
});
