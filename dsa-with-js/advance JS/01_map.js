let data = new Map([
    ['name','Alex'],
    [true,'This is map true value']
]);

console.log(`Before data-----`,data);

console.log(`name------`,data.get('name'));
console.log(`true bool value------`,data.get(true));



data.set('city','panchkula');
data.set('name','Amit')


console.log(`After data-----`,data);
data.delete(true);

console.log(` data-- values---`,data.values());
console.log(` data-- Size---`,data.size);
console.log(` data-- Has---`,data.has('name'));



data.forEach((v,k)=>{
    console.log(`----forEach--Key---`,k);
    console.log(`----forEach--Value---`,v);
});




for(x of data) {
    console.log(`---for OF----`,x);
}