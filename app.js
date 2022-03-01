        //Encryption
        function encryption(s) {
        s = s.replace(/\s+/g, '');;
        let length = s.length;
        let sqrt = Math.sqrt(length);
        let lowNum = Math.floor(sqrt);
        let heighNum = Math.ceil(sqrt);
        lowNum = lowNum < 8 ? heighNum : lowNum;
        let words = [...s];
        let arr = [];
        let text = "";
        
        for(let k = 1; k <= lowNum; k++){
            if(k == 1){
                arr[k] = words.slice(0,heighNum * k);
            }else{
                arr[k] = words.slice(heighNum * (k-1),heighNum * k);
            }
        }
        
        for(let k = 0; k <= lowNum; k++){
            arr.forEach((val,index)=>{
                if(val[k]){
                    text += val[k];
                }
            })
            if(k != lowNum){
                text += " ";
            }      
        }

        return text;
    }

    console.log(encryption("if man was meant to stay on the ground god would have given us roots"));
