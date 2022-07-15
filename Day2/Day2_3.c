#include<stdio.h>


int main(void)
{
    int i; // i is variable name of int datatype  ===> %d
    float f; // f is a variable name of float datatype ==> %f
    char ch; // ch is a varianle name of char datatype ==> %c 

    i=40; // 40 is assigned to variable i
    f=5.6; // 5.6 value is assigned to variable f
    ch='A';  // A is assigned to ch variable

    printf("%d %f %c",i,f,ch);
    //by default float value is represented 6 digits after decimal 

    printf("\nInteger var val = %d float variable val = %f character variable value = %c",i,f,ch);




    return 0;
}



/*
int main(void)
{
    int n1=50;  // variable initialization 
    int val=40;
    int res=35;

    printf("%d %d %d",n1,val,res);
     printf("\n %d , %d , %d",n1,val,res);
      printf("\n %d %d %d",val,res,n1);
       printf("\n n1,val,res");
       printf("\n First = %d Second  = %d Third= %d",n1,val,res);

    return 0;
}
*/