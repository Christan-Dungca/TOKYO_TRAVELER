    var slider1 = document.getElementById("myRangeHousing"),
        slider2 = document.getElementById("myRangeFood"),
        slider3 = document.getElementById("myRangeLeisure"),
        slider4 = document.getElementById("myRangeTransportation"),
        output = document.getElementById("demo"),
        dur = document.getElementById("duration"),
        start = document.getElementById("amount"),
        total = document.getElementById("total");
        
//variables represent the average spending amount per, until we can generate with an API
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
    
    function getinfo()
    {
        //new variables to calculate %'s
        var totalHousing = parseInt(slider1.value) / 100,
            totalFood = parseInt(slider2.value) / 100,
            totalLeisure = parseInt(slider3.value) / 100,
            totalTransportation = parseInt(slider4.value) / 100;

        var sliderSum = (totalHousing + totalFood + totalLeisure + totalTransportation);
        var startVal = parseInt(start.value);
        var HperDay = (startVal * totalHousing) / parseInt(dur.value);
        ///////////////////////////////////////////
        var FperDay = (startVal * totalFood) / parseInt(dur.value);
        ///////////////////////////////////////////
        var LperDay = (startVal * totalLeisure) / parseInt(dur.value);
        ///////////////////////////////////////////
        var TperDay = (startVal * totalTransportation) / parseInt(dur.value);
        ///////////////////////////////////////////
        var total = (HperDay + FperDay + LperDay + TperDay);
        
        console.log(startVal);
        // console.log(totalHousing);
        // console.log(parseInt(dur.value));
        // console.log("Slider sum: " + sliderSum);
        // console.log("housing per day " + HperDay);
        if(sliderSum <= 1){
            document.getElementById("total").innerHTML = "$" + Math.floor(total)+ " Total average per day";
            document.getElementById("totalHousing").innerHTML = "$" + Math.floor(HperDay)+ " Housing Per Day";
            document.getElementById("totalFood").innerHTML = "$" + Math.floor(FperDay)+ " Food Per Day";
            document.getElementById("totalLeisure").innerHTML = "$" + Math.floor(LperDay)+ " Leisure Per Day";
            document.getElementById("totalTransportation").innerHTML = "$" + Math.floor(TperDay)+ " Transportation";
        }
        if(sliderSum > 1){
            return(document.getElementById("err").innerHTML = "Please lower a slider");
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////THIS IS FOR ONE SLIDER//////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    // if(slider.value == 0){
    //     var result = (smHousing + smFood + smTrans + smLeisure) * (dur.value);
    // }
    // if(slider.value == 33){
    //     var result = (medHousing + medFood + smTrans + smLeisure) * (dur.value);
    // }
    // if(slider.value == 66){
    //     var result = (bigHousing + bigFood + bigTrans + bigLeisure) * (dur.value);
    // }
    // if(slider.value == 99){
    //     var result = (luxuryHousing + luxuryFood + bigTrans + bigLeisure) * (dur.value);
    // }
    
                
    // console.log(result);
    // var finalValue = (start.value - result) / (dur.value);
    // var extra = ((start.value) - result * dur.value);

    // if(extra >= 0 && slider.value == 0){
    //     document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
    //     document.getElementById("totalHousing").innerHTML = "$" + Math.floor((smHousing) * (dur.value))+ " On Average For Housing Per Day";
    //     document.getElementById("totalFood").innerHTML = "$" + Math.floor((smFood) * (dur.value))+ " On Average For Food Per Day";
    //     document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((smLeisure) * (dur.value))+ " On Average For Leisure Per Day";
    //     document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((smTrans) * (dur.value))+ " On Average for Transportation";
    //     document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
    // }
    // else if(extra >= 0 && slider.value == 33){
    //     document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
    //     document.getElementById("totalHousing").innerHTML = "$" + Math.floor((medHousing) * (dur.value))+ " On Average For Housing Per Day";
    //     document.getElementById("totalFood").innerHTML = "$" + Math.floor((medFood) * (dur.value))+ " On Average For Food Per Day";
    //     document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((smLeisure) * (dur.value))+ " On Average For Leisure Per Day";
    //     document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((smTrans) * (dur.value))+ " On Average for Transportation";
    //     document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
    
    // }
    // else if(extra >= 0 && slider.value == 66){
    //     document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
    //     document.getElementById("totalHousing").innerHTML = "$" + Math.floor((bigHousing) * (dur.value))+ " On Average For Housing Per Day";
    //     document.getElementById("totalFood").innerHTML = "$" + Math.floor((bigFood) * (dur.value))+ " On Average For Food Per Day";
    //     document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((bigLeisure) * (dur.value))+ " On Average For Leisure Per Day";
    //     document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((bigTrans) * (dur.value))+ " On Average for Transportation";
    //     document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
    // }
    // else if(extra >= 0 && slider.value == 99){
    //     document.getElementById("total").innerHTML = "$" + Math.floor(result)+ " About per day ";
    //     document.getElementById("totalHousing").innerHTML = "$" + Math.floor((luxuryHousing) * (dur.value))+ " On Average For Housing Per Day";
    //     document.getElementById("totalFood").innerHTML = "$" + Math.floor((luxuryFood) * (dur.value))+ " On Average For Food Per Day";
    //     document.getElementById("totalLeisure").innerHTML = "$" + Math.floor((bigLeisure) * (dur.value))+ " On Average For Leisure Per Day";
    //     document.getElementById("totalTransportation").innerHTML = "$" + Math.floor((bigTrans) * (dur.value))+ " On Average for Transportation";
    //     document.getElementById("extra").innerHTML = "$" + Math.floor(extra)+ " Extra";
    // }
    // else{
        
    //     return(document.getElementById("err").innerHTML = "Invalid Amount, Please check your information");
    // }