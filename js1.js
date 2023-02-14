function c1(){
    var name=prompt("Enter your name ");
    if(name.length>2)
    {
      var Name= name.charAt("2");
      document.writeln(`2nd letter is : ${Name} `);

    }
    else{
        document.writeln("your name have lesser then 2 chars");
    }
    var link = document.createElement("a");
     link.href="index.html";
     link.innerHTML="Back to home";
     link.style.display="block";
     link.style.paddingTop="20px";
     document.body.appendChild(link);
}
     
     
function c2(){
     var Name2= document.getElementById("charcd2").value;
        if (Name2.length==1) {
       document.writeln("<div style='margin:50px 0px 80px 30px'>"+`char code of  ${Name2} is : `+"<span style='color:red'>"+ Name2.charCodeAt(0)+"<br><br>"+"</span></div>");
       
     } else {

     document.writeln( "<div style='margin:50px 0px 80px 20px'> please enter single alphabet at a time"+"<br><br>"); 
     }
      
     var link = document.createElement("a");
     link.href="index.html";
     link.innerHTML="Back to home";
     link.style.marginLeft="50px";
     document.body.appendChild(link);
     
    }

    function verifycard()
    {
       var cnum=document.getElementById("card1").value;
       var error=document.getElementById("error4");
       if (cnum.startsWith("4550"))
        {
          cardimg.style.display="block"; 
          cardimg.src="./visa.png";
           error.style.display="none"; 
       } 
       else if(cnum.startsWith("5540")){
            cardimg.style.display="block"; 
              cardimg.src="./mastercard.png"; 
              error.style.display="none";
       }
       else{ error.style.display="block";
        error.innerHTML="Entered invalid number";
        cardimg.style.display="none";  
       }
    }

    function verifyid()
    {
     var id1=document.getElementById("skype").value;
     var a2=document.getElementById("a2");
     var error= document.getElementById("error5");
     if (id1.endsWith("outlook.com"))
      {
       a2.style.display="block"; error.style.display="none";
     } 
     else { error.style.display="block";
            error.innerHTML="Enter correct details";
            a2.style.display="none";
     }
    }
    function det() {
      var a= document.getElementById('c3').value;
      var a=a.split(',');
      
      for (let index = 0; index < a.length; index++) {
      
          document.writeln(a[index]+"<br><br>");
        
      }
      
    }
   
    function trimname() {
      var a=document.getElementById('tri').value;
      var error=document.getElementById('e1');
      if(a.trim()==a)
      {error.innerHTML="";
      a.innerHTML.value=a.trim();}
      else {error.innerHTML="invalid user id";
    }
      
    }
    var rge="//";
    function countryverify() {
      var country=document.getElementById('Country').value;
      var e=document.getElementById('error6');
      e.style.display="none";
      
      if(country=="india")
      {
        flag.src="india.png";
        mobile.placeholder="+91 and 10 digits";
        rge=/\+91\d{10}/;
      }
      else if(country=="us")
      {
        flag.src="us.png";
        mobile.placeholder="+(1)(425) 555-0100";
        rge=/\+\(1\)\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
      }
      else if(country=="uk")
      {
        flag.src="uk.png";
        mobile.placeholder="+(44)(20) 1234 5678";
        rge=/\+\(44\)\([0-9]{2}\)\s[0-9]{4}\s[0-9]{4}/;
      }
      else if (country=="Select-country") {
        flag.src="";
        mobile.placeholder="";
      }
      else 
      {
        flag.src="";
        e.style.display="block";
        e.innerHTML="Select a country";
      }
    }
    function verifynum() {
      var mb=document.getElementById('mobile').value;
      if(mb.match(rge))
      {
        var m= document.writeln(" <span style='color:green; margin:200px; '> Your mobile number verified successfully </span>");
        m.style.color="green";
      }
      else
      {
        document.getElementById("error7").innerHTML="invalid mobile number- "+document.getElementById('Country').value+" - "+document.getElementById('mobile').placeholder;
      }
    }


    
