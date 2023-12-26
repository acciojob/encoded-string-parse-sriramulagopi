const parseCode = (str) => {
  // your code here
    let obj =  { firstName: null, lastName: null, id: null }
    let str1 = str.split("0");
    let str2 = [];
    for (let i=0;i<str1.length;i++){
        if (str1[i]!==''){
            str2.push(str1[i]);
        }
    }
    obj.firstName=str2[0];
    obj.lastName=str2[1];
    obj.id=str2[2];
    return obj;
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
