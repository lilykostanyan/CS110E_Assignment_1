const a=4, b=15, c=9;
const D=b**2 - 4*a*c;
    if (a==0) 
console.log(-c/b);
    else if (D>0)
{
    console.log("x1= " + (-b+ Math.sqrt(D))/(2*a));
    console.log("x2= " + (-b- Math.sqrt(D))/(2*a));
}
    else if (D==0)
console.log("x= " + (-b+ Math.sqrt(D))/(2*a));
    else
console.log("The equation has no real solutions");