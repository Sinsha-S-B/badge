function strgrev(string){

    let rev='';
    for(i=string.length-1;i>=0;i--){
        rev=rev+string[i]
    }
    console.log(rev);
}

strgrev('edcba')

