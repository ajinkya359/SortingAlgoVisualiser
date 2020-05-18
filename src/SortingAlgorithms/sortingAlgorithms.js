export const MergeSort=array=>{
    if(array.length===1) return array;
    const middleidx=Math.floor(array.length/2);
    const firsthalf =MergeSort(array.slice(0,middleidx));
    const secondhalf=MergeSort(array.slice(middleidx));
    const sortedArray=[];
    let i=0,j=0;
    while(i<firsthalf.length&&j<secondhalf.length){
            if(firsthalf[i]<secondhalf[j]){
                sortedArray.push(firsthalf[i++])
            }
            else{
                sortedArray.push(secondhalf[j++])
            }
    }
    while(i<firsthalf.length) sortedArray.push(firsthalf[i++]);
    while (j<secondhalf.length) sortedArray.push(secondhalf[j++]);
    return sortedArray;
}
