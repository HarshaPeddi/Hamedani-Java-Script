console.log(sum(10));

function sum (limit)
{
    let num3 = 0;
    let num5 = 0;
    
    for (let i=0;i<=limit;i++)
    {
        if(i%3 == 0)
        num3 += i;
        if (i%5 == 0)
        num5+= i;
    }
    return num3+num5 ;


}