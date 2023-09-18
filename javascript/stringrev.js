function strRev(string){
    let rev=''

    for(let i=string.length-1;i>=0;i--){
        rev=rev+string[i]
    }
    console.log(rev);
}
strRev("cba")