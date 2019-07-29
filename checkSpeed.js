// less than or equal to 70 -> ok.
// every 5 units above 70 -> points =1
// points greater thhan 12 -> license suspended.

checkspeed(71);

function checkspeed(int)
{
    //tutprial tip 
    // turn the magic number (70) to speedlimit , 
    //so that changing it at constant changes it at line 15 , 17 , 19 . Same is with 5.
    // constant kmPerPoint = 5
    // constant speedLimit = 70
    let points ;
    if(int<=70)
    console.log("OK")
    else if (int >70)
    {
        let speedDifference = int - 70;
        points = Math.floor(speedDifference/5)
        if(points>=12)
        console.log("License Suspended")
        else if (points!=0)
        console.log("points -> " +points)
        else 
        console.log("OK")
    }

}

