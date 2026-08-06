
function getcount(str:string)
{
  const mymap = new Map<string, number>();

 for(const key of str)
 {
    if(mymap.has(key))
    {
        let count = mymap.get(key);
        if(typeof count === "number")
        { 
            count++;
            mymap.set(key,count);
            
        }
      }
        else
        {
            mymap.set(key,1)
            console.log("found TWO  "+key);
        }


    

 }

   
   for(const[key,value] of mymap)
   {
     console.log(`frequecy of ${key} in string is ${value}`)
   }

}


getcount("qatestmytest");