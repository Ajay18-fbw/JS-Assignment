function isPrime(n)
{
    if(n<2) return false;
    if(n==2||n==3) return true;
    if(n%2==0) return false;

    for (let i =3;i*i<=n;i+=2)
    {
        if(n%i==0) return false;

    }
    return true;
}

function sumofdigits(n)
{
    let sum =0;
    while (n>0)
    {
        sum +=n%10;
        n= Math.floor(n/10);

    }
    return sum;

}
function containszero(n){
    while (n>0){
        if(n%10==0)return true;
        n = Math.floor(n/10);

    }
    return false;

}
function digitgatekeeper()
{
    let l = parseint(prompt("Enter l :"));
    let R = parseint(prompt("Enter r :"));
    let k = parseint(prompt("Enter k:"));

    let count = 0;

    for (let x= l;x<=R; x++)
    {
        if(x%k==0)
        {
            if(!containszero(x))
            {
                let digitsum = sumofdigits(x);
                if(isPrime(digitsum))
                {
                    count++;
                 console.log(`✓ ${x} - digit sum: ${digitSum}`);
                }
            }
        }
    }
    alert(`Count: ${count}`);
}
digitgatekeeper();