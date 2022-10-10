// Problem:-->2 

//example:1

function min(x,y){
    if(x>y){
        return y
    }
    return x
}

function fun(s,t){
    let n=min(s.length,t.length)
    for(let i=0;i<n;i++){
        if(s[i]!=t[i]){
            let str1=s.slice(0,i)
            return str1
        }
    }
    let str2=s.slice(0,n)
    return str2
}

let str = "abcabcbb"
let finalStr=""
let m=str.length
for(let i=0;i<m;i++){
    for(let j=i+1;j<m;j++){
        let a=str.slice(i,m)
        let b=str.slice(j,m)
        let x=fun(a,b)
        if(finalStr.length<x.length){
            finalStr=x
        }
    }
}
console.log(finalStr,finalStr.length)



//example  2

function min1(x,y){
    if(x>y){
        return y
    }
    return x
}

function repeat(s,t){
    let n=min1(s.length,t.length)
    for(let i=0;i<n;i++){
        if(s[i]!=t[i]){
            let str1=s.slice(0,i)
            return str1
        }
    }
    let input=s.slice(0,n)
    return input
}

let st = "bbbbb"
let finalSt=""
let r=str.length
for(let i=0;i<r;i++){
    for(let j=i+1;j<r;j++){
        let a=st.slice(i,r)
        let b=st.slice(j,r)
        let x=repeat(a,b)
        if(finalSt.length<x.length){
            finalSt=x
        }
    }
}
console.log(finalSt,finalSt.length)




//problem 3:

// example:1

function check(s){
    let n=s.length
    for(let i=0;i<=n/2;i++){
        if(s[i]!==s[n-i-1]){
            return false;
        }
    }
    return true ;
}
let str1='babad'
let ans=''
let m1=str1.length
let k=0
while(k<m1){
    for(let i=k;i<m1;i++){
        let str2=""
        for(let j=k;j<=i;j++){
            str2+=str1[j]
        }
        if(check(str2)&&str2.length>ans.length){
            ans=str2
        }
    }
    k++
}
console.log(ans)



//example 2:


function check1(s){
    let n=s.length
    for(let i=0;i<=n/2;i++){
        if(s[i]!==s[n-i-1]){
            return false;
        }
    }
    return true ;
}
let str2='cbbd'
let answer=''
let p=str2.length
let l=0
while(l<p){
    for(let i=l;i<p;i++){
        let str3=""
        for(let j=l;j<=i;j++){
            str3+=str2[j]
        }
        if(check1(str3)&&str3.length>answer.length){
            answer=str3
        }
    }
    l++
}
console.log(answer)







