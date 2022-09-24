// var list=[5,2,6,1,20,9,1,87,98,1];
// var item=99;
// var count=0;
// for(var i=0;i<list.length;i++)
// {
//     if(item==list[i])
//     {
//         console.log("Found");
//         count++;
//     }
//     else
//     {
//         console.log("not found");
//     }
// }
// console.log(count);
var list=[5,1,4,3,2,65,23,1,98,1,54,45];
var temp=0;
var result=0;
for(let i=0; i<=list.length-2; i++)
{
    for(let j=i+1; j<=list.length-1; j++)
    {
        if(list[i]>list[j])
        {
            temp=list[i];
            list[i]=list[j];
            list[j]=temp;
        }
        result+=list[i];
    }
}

console.log(list)


















