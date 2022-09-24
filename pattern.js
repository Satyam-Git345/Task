// document.write(`<h3>First Program</h3>`);
//         for (let i = 1; i <=5; i++) 
//         {
//             for (let j = 5; j>=i; j--)
//             {
//                  console.log("*"+" ");
//             }
//             console.log("<br>")
//         }

//         document.write("<br>");
//         document.write(`<h3>Second Program</h3>`);
//         for (let i = 0; i <10; i++) 
//         {
//             for (let j = 0; j<10; j++)
//             {
//                  document.write("*"+" ");
//             }
//                document.writeln("<br>")
//         }

//         document.write("<br>");
//         document.write(`<h3>Third Program</h3>`);
        
        
//         for(let i=1; i<=10; i++)
//         {  
//          for(let j=1; j<=10; j++)
//          {
//              if(i==j)   
//              document.write("*"+" ");
//              else
//              document.write("0"+" ");
//          }
//          document.writeln("<br>")
//        }

    // var a=12;
    // var b=30;

    // function sum(){
    //     User();
    //     var c=a+b;
    //     console.log(c);
    // }

    // function User(){
    //     var msg="Satyam Shukla";
    //     console.log(msg);
    // }

    // var x=a+b;
    // console.log(x);
    // sum();
    // User();
    // sum();
    // User();

//       let str="The Quick Brown Fox";

// let str="The Quick Brown Fox";
// for (i = 0; str.length; i++) 
// {
//   if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z') 
//   {
//     str[i] = str.charCodeAt(i) + 32;
//   }
// }  
// console.log(str);

// swap the case of each character in given String.
// let str = "The Quick Brown Fox";
    
//       let arr = [];
    
//       for (let i = 0; i < str.length; i++) 
//       {
//         if (str.charAt(i) >= "a" && str.charAt(i) <= "z") 
//                   arr[i] =String.fromCharCode((str.charCodeAt(i) - 32));
         
//         else if (str.charAt(i) >= "A" && str.charAt(i) <= "Z")
//                  arr[i] =String.fromCharCode((str.charCodeAt(i) +32));
        
//       }

  
//   for (i = 0; i < arr.length;i++)
//         document.write(arr[key]);
      

// var arr1=[3,,3,'a',3];
//         let count=0;
//         let max_count=0;
//         let most_frequent=0;
//         for (let i=0; i<arr1.length; i++) 
//         {
//             count=0;
//             for (let j=0; j<arr1.length; j++) {
//                 if(arr1[i]==arr1[j])
//                       count++;
                     
//             }

//             if(count>max_count)
//             {
//                 max_count = count;
//                 most_frequent=arr1[i];
//             }

//          }

//   console.log(max_count);
//   console.log(most_frequent);




           let num=50;

           function User(name,result){
               console.log(name);
               console.log(result());
           }
           
           User("Satyam", function(){
               return num*num;
           });











