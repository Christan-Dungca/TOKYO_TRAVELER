    var slider = document.getElementById("myRange"),
        output = document.getElementById("demo"),
        dur = document.getElementById("duration"),
        start = document.getElementById("amount"),
        total = document.getElementById("total");
//variables represent the average spending amount per 
    var smHousing = 22,
        medHousing = 45,
        bigHousing = 75,
        luxuryHousing = 100,
        smFood = 5,
        medFood = 10,
        bigFood = 25,
        luxuryFood = 50,
        smTrans = 10,
        bigTrans = 20,
        smLeisure = 10,
        bigLeisure = 20;
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
    /*
    should I create a second function for the other slider? or do I try to use callback functions? or do I just cram it all into one
    I'm going to push this before anything since it works.
    */
    //if the slider is under 25 and bigger than 0, set the slider value to something else then do the calc
    //maybe set the result to a returnable variable and use that variable to continue the calc
    function getinfo(){

        if(slider.value == 0){
            var result = (smHousing + smFood + smTrans + smLeisure) * (dur.value);
        }
        if(slider.value == 33){
            var result = (medHousing + medFood + smTrans + smLeisure) * (dur.value);
        }
        if(slider.value == 66){
            var result = (bigHousing + bigFood + bigTrans + bigLeisure) * (dur.value);
        }
        if(slider.value == 99){
            var result = (luxuryHousing + luxuryFood + bigTrans + bigLeisure) * (dur.value);
        }
        
                    
        console.log(result);
        var finalValue = (start.value - result) / (dur.value);
        var extra = ((start.value) - result * dur.value);

        if(extra >= 0 && slider.value == 0){
            document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
            document.getElementById("totalHousing").innerHTML = "$" + Math.floor((smHousing) * (dur.value))+ " On Average For Housing Per Day";
            document.getElementById("totalFood").innerHTML = "$" + Math.floor((smFood) * (dur.value))+ " On Average For Food Per Day";
            document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((smLeisure) * (dur.value))+ " On Average For Leisure Per Day";
            document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((smTrans) * (dur.value))+ " On Average for Transportation";
            document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
        }
        else if(extra >= 0 && slider.value == 33){
            document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
            document.getElementById("totalHousing").innerHTML = "$" + Math.floor((medHousing) * (dur.value))+ " On Average For Housing Per Day";
            document.getElementById("totalFood").innerHTML = "$" + Math.floor((medFood) * (dur.value))+ " On Average For Food Per Day";
            document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((smLeisure) * (dur.value))+ " On Average For Leisure Per Day";
            document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((smTrans) * (dur.value))+ " On Average for Transportation";
            document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
        
        }
        else if(extra >= 0 && slider.value == 66){
            document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
            document.getElementById("totalHousing").innerHTML = "$" + Math.floor((bigHousing) * (dur.value))+ " On Average For Housing Per Day";
            document.getElementById("totalFood").innerHTML = "$" + Math.floor((bigFood) * (dur.value))+ " On Average For Food Per Day";
            document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((bigLeisure) * (dur.value))+ " On Average For Leisure Per Day";
            document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((bigTrans) * (dur.value))+ " On Average for Transportation";
            document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
        }
        else if(extra >= 0 && slider.value == 99){
            document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
            document.getElementById("totalHousing").innerHTML = "$" + Math.floor((luxuryHousing) * (dur.value))+ " On Average For Housing Per Day";
            document.getElementById("totalFood").innerHTML = "$" + Math.floor((luxuryFood) * (dur.value))+ " On Average For Food Per Day";
            document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((bigLeisure) * (dur.value))+ " On Average For Leisure Per Day";
            document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((bigTrans) * (dur.value))+ " On Average for Transportation";
            document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
        }
        else{
            
            return(document.getElementById("err").innerHTML = "Invalid Amount, Please check your information");
        }
    }