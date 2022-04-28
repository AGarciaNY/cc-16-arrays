//write your code here
//declare a function replaceWithYerr that takes in an array,a start index, and a end index
//declare an emtey array
//interate over the given array and replace the giving index with yerr
//add it to new array
// return 
const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

function replaceWithYerr(array,start = 0 , amount = array.length){
    let newarray=[];
    for(let i =0 ; i < array.length ; i++){
        
        if(( i  >= start ) && (i < (start + amount ))){
            newarray.push('yerr');
        }else{
            newarray.push(array[i]);
        }
    }
    return newarray;
}
console.log(replaceWithYerr(months , 2,2));