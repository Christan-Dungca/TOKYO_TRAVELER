    var slider1 = document.getElementById("myRangeHousing"),
        slider2 = document.getElementById("myRangeFood"),
        slider3 = document.getElementById("myRangeLeisure"),
        slider4 = document.getElementById("myRangeTransportation"),
        output = document.getElementById("demo"),
        dur = document.getElementById("duration"),
        start = document.getElementById("amount"),
        total = document.getElementById("total");
        
    var yenConversion = 107.83;

    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
    function convertCash(){
        document.getElementById("slider-tip").innerHTML = "¥" +Math.floor(start.value * yenConversion);
    }
    //////////////////////////////////////
    //add a hover effect on the slider to let ppl know how much is what
    //////////////////////////////////////
    
    // document.addEventListener("mousemove", showSliderTip);

    // function showSliderTip(){
    //     document.getElementById("nonerr").innerHTML = "TESSSST";
    // }

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
            document.getElementById("total").innerHTML = "Total/Day = $" + Math.floor(total);
            document.getElementById("totalHousing").innerHTML = "Housing/Day = $" + Math.floor(HperDay);
            document.getElementById("totalFood").innerHTML = "Food/Day = $" + Math.floor(FperDay);
            document.getElementById("totalLeisure").innerHTML = "Leisure/Day = $" + Math.floor(LperDay);
            document.getElementById("totalTransportation").innerHTML = "Transportation/Day = $" + Math.floor(TperDay);
            //conversion
            document.getElementById("total-conversion").innerHTML = "Total in Yen/Day = ¥"+ Math.floor(total * yenConversion); 
            document.getElementById("housing-conversion").innerHTML = "Housing in Yen/Day = ¥"+ Math.floor(HperDay * yenConversion); 
            document.getElementById("food-conversion").innerHTML = "Food in Yen/Day = ¥"+ Math.floor(FperDay * yenConversion); 
            document.getElementById("leisure-conversion").innerHTML = "Leisure in Yen/Day = ¥"+ Math.floor(LperDay * yenConversion); 
            document.getElementById("transportation-conversion").innerHTML = "Transportation in Yen/Day = ¥"+ Math.floor(TperDay * yenConversion); 
            //New check to see if each slider is at certain spots, then gen photos (suggestions).

            if(totalHousing <= 0.1){
                document.getElementById("img1").innerHTML = "<img src='../images/cheap-housing.jpg' alt='blahhhhhhhhh'>";
                // document.getElementById("myRangeHousing").style.background = "red";
                changeColor(red);
            }
            else if(totalHousing <= 0.3){
                document.getElementById("img1").innerHTML = "<img src='../images/med-housing.jpg' alt='blahhhhhhhhh'>";
            }
            else if(totalHousing > 0.3){
                document.getElementById("img1").innerHTML = "<img src='../images/luxury-housing.jpg' alt='blahhhhhhhhh'>";
            }
            if(totalFood <= 0.1){
                document.getElementById("img2").innerHTML = "<img src='../images/cheap-food.jpg' alt='blahhhhhhhhh'>";
            }
            else if(totalFood <= 0.3){
                document.getElementById("img2").innerHTML = "<img src='../images/med-food.jpg' alt='blahhhhhhhhh'>";
            }
            else if(totalFood > 0.3){
                document.getElementById("img2").innerHTML = "<img src='../images/luxury-food.png' alt='blahhhhhhhhh'>";
            }
            if(totalLeisure <= 0.1){
                document.getElementById("img3").innerHTML = "<img src='../images/cheap-leisure.jpg' alt='blahhhhhhhhh'>";
            }
            else if(totalLeisure <= 0.3){
                document.getElementById("img3").innerHTML = "<img src='../images/med-leisure.jpg' alt='blahhhhhhhhh'>";
            }
            else if(totalLeisure > 0.3){
                document.getElementById("img3").innerHTML = "<img src='../images/luxury-leisure.jpg' alt='blahhhhhhhhh'>";
            }
            if(totalTransportation <= 0.1){
                document.getElementById("img4").innerHTML = "<img src='../images/cheap-trans.jpg' alt='blahhhhhhhhh'>";
            }
            else if(totalTransportation <= 0.3){
                document.getElementById("img4").innerHTML = "<img src='../images/med-trans.png' alt='blahhhhhhhhh'>";
            }
            else if(totalTransportation > 0.3){
                document.getElementById("img4").innerHTML = "<img src='../images/luxury-trans.jpg' alt='blahhhhhhhhh'>";
            }

            return(document.getElementById("err").innerHTML = "");
        }
        else if(sliderSum > 1){
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