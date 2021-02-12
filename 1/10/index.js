// object test
const jjhInfo = {
    name:"jaehoon",
    age:25,
    gender:"Male",
    isHandsome:true,
    features:["guitar", "roka", "cert"],
    favFood:[
        {
            name:"gogi",
            fatty:true
        },
        {
            name:"something delicious",
            fatty:31337
        }
    ]
}

console.log(jjhInfo);

console.log(jjhInfo.gender);
jjhInfo.isHandsome = false;
console.log(jjhInfo.isHandsome);

console.log(jjhInfo.favFood[0].fatty);