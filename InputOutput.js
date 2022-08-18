 var name=prompt("Enter your name")
    var bike=prompt("Enter your fav bike")
    var num=Number(prompt("Enter your lucky number"))
    var dish=prompt("Enter a dish")

    var nameflag=false
    var bikeflag=false
    var numflag=false
    var dishflag=false

    if(name[0]=='s')
    {
    	nameflag=true
    }
    if(bike[bike.length-1]=='e')
    {
    	bikeflag=true
    }
    if(num==7)
    {
    	numflag=true
    }
    if(dish.length>=7)
    {
    	dishflag=true
    }

    alert("Hello:"+name+"\n Thank you for ur information")
    if(nameflag && bikeflag && numflag && dishflag)
    {
      console.log("welcome to our soldier group")	
    }
    else
    {
    	console.log("you are an outsider")
    }
