var slider = document.getElementById("myRange");
    var slider2 = document.getElementById("myRange2");
    var output = document.getElementById("demo");
    var dur = document.getElementById("duration");
    var start = document.getElementById("amount");
    var total = document.getElementById("total");
    var min1 = 0,
        min2 = 300,
        min3 = 750,
        min4 = 1000,
        max1 = 299,
        max2 = 749,
        max3 = 999,
        max4 = 3000;
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
        if(slider.value >= 0 && slider.value <=25)
        {
            range = 0.25;
            
            var result = ((max1 - min1) * (range) + min1);
        }
        if(slider.value >= 26 && slider.value <=50)
        {
            range = 0.5;
            var result = ((max1 - min1) * (range) + min1);
        }
        if(slider.value >= 51 && slider.value <=75)
        {
            range = 0.75;
            var result = ((max1 - min1) * (range) + min1);
        }
        if(slider.value >= 76 && slider.value <=100)
        {
            range = 1;
            var result = ((max1 - min1) * (range) + min1);
            
        }
        /////////////////////////////////////////////////////////////////////////////
        if(slider2.value >= 0 && slider2.value <=25)
        {
            range = 0.25;
            var result = ((max1 - min1) * (range) + min1);
        }
        if(slider2.value >= 26 && slider2.value <=50)
        {
            range = 0.5;
            var result = ((max1 - min1) * (range) + min1);
        }
        if(slider2.value >= 51 && slider2.value <=75)
        {
            range = 0.75;
            var result = ((max1 - min1) * (range) + min1);
        }
        if(slider2.value >= 76 && slider2.value <=100)
        {
            range = 1;
            var result = ((max1 - min1) * (range) + min1);
            // document.getElementById("test").innerHTML = result;
            
        }
        console.log(result);
        //budget is start value - result / amount of days
        if(result >= 0){
            document.getElementById("total").innerHTML = Math.floor((start.value - result) / (dur.value))+ " Per Day";
        }else{
            result = 0;
            return(document.getElementById("err").innerHTML = "Invalid Amount, please change your amount");
        }
    }