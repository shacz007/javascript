let a = ["masta","pista","blisu","poli","salla","rest","tunn","wasds"];
for (i=0;i<a.length;i++){
    if(a[i].startsWith("p")){
        delete a[i];
        continue;
    }
    a[i] = "hello "+ a[i];
}
console.log(a);