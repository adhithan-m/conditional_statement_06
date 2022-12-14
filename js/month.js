var a = parseInt(prompt("Enter the month"));
var b = parseInt(prompt("Enter the year"));
var monthname = {1:"jan",2:"feb",3:"march",4:"april",5:"may",6:"june",7:"july",8:"agust",9:"september",10:"october",11:"november",12:"december",}; 

if (a==1 ||a==3 ||a==5 ||a==7 ||a==9 ||a==11)
{
 alert("31 days");
}
else if(a==4 ||a==6 ||a==8 ||a==10 ||a==12)
{
alert("30 days");
}	
else
{
	if (a==2)
    {
      if (b%4==0)
      {
	  alert("29 days and it is leap year");
      }
      else
      {
	  alert("28 days and it is not a leap year");
      }
    }
}	
	  
