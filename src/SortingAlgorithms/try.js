        function mergerhelper(mainarray,auxillaryarray,start,end,animation) {//start means the right starting index of the mainarray ans end means the last end index f end
            if(start===end) {

                return auxillaryarray}
            else {
                var middle = Math.floor((start + end) / 2);

                var leftarray = mergerhelper(mainarray, mainarray.slice(start, middle + 1), start, middle,animation);//sorted left array
                var rightarray = mergerhelper(mainarray, mainarray.slice(middle + 1,end+1), middle + 1, end,animation);//sorted right array
                let i = 0;
                let temp = start;
                let j = 0;

                while (i < leftarray.length && j < rightarray.length) {
                    if (leftarray[i] < rightarray[j]) {
                        if(leftarray[i]) animation.push([start,leftarray[i]])
                        console.log(start+" "+leftarray[i])
                        console.log(mainarray)
                        mainarray[start++] = leftarray[i++]
                    } else {
                        if(leftarray[i]) animation.push([start,leftarray[i]])
                        console.log(start+" "+leftarray[i])
                        console.log(mainarray)
                        mainarray[start++] = rightarray[j++];
                    }

                }
                while (i < leftarray.length) {
                    if(leftarray[i]) animation.push([start,leftarray[i]])
                    console.log(start+" "+leftarray[i])
                    console.log(mainarray)
                    mainarray[start++] = leftarray[i++];}
                while (j < rightarray.length) {
                    if(leftarray[i]) animation.push([start,leftarray[i]])
                    console.log(start+" "+leftarray[i])
                    console.log(mainarray)
                    mainarray[start++] = rightarray[j++];}

                return mainarray.slice(temp, end + 1)
            }
        }
 export const mergesort=(array)=> {
     var animation=[];

            mergerhelper(array,array,0,array.length-1,animation);
        console.log(array)
                return animation;
        }


