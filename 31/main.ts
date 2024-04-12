let userNames =["Mahad" ,"Ali","Zeeshan"," Admin","Usman"] 

userNames =[]
if (userNames.length === 0){
    console.log("your Array in Empty We need to find some users!")
}else{
    // Using ForEach Loop on Array 
userNames.forEach(oneUser =>{ 
    if(oneUser === "Admin"){ 
     console.log(`Hello ${oneUser},would you like to see a status reprot?`)
    }else{ 
     console.log(`Hello ${oneUser},think you for logging in  again.`)
    }
}) 
}