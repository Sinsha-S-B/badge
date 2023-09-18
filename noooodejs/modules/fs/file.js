const fs=require("fs")

//-------------------write the file-------------
//synchronuous operation
// fs.writeFileSync('./test1.txt','sinsha....')

//asynchronous operation

fs.writeFile('./test2.txt','good evening',(err)=>{})

//-----------------read the file----------------


//sync...
// const result=fs.readFileSync("./contacts.txt",'utf-8')
// console.log(result);

//async...
fs.readFile("./contacts.txt",'utf-8',(err,result)=>{
    // if(err){
    //     console.log(err);
    // }else{
    //     console.log(result);
    // }

    console.log(result);
})