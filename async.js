var fs=require('fs');
fs.writeFile('./output.txt',"Some dummy test", function(){
    console.log("1. Finished writing to output.txt");
})

fs.readFile('./inputfile1.txt','utf8',function(err ,data){
    fs.appendFile('./output.txt',data,function(){
        console.log("2. Finished appending to output.txt");
    })
    console.log("3. Finished reading inputfile1.txt");
})


fs.readFile("./inputfile2.txt",'utf8',function(err, data){
    fs.writeFile('./output.txt',data,function(){
        console.log("4. Finished writing to output.txt");
    })
    console.log("5. Finished reading file from inputfile2.txt");
})