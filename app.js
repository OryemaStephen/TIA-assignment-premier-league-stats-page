function getEle() {
    let title1 = document.getElementsByClassName('progress-title1');
    let title2 = document.getElementsByClassName('progress-title2');
    let progress1 = document.getElementsByClassName("progress1");
    let progress2 = document.getElementsByClassName("progress2");
    
    
    let length = title1.length;

    
    for (let i = 0; i < length; i++) {
        let t1 = String(title1[i].textContent).trim();
        let t2 = String(title2[i].textContent).trim();

        let isPercentage1 = title1[i].textContent.includes('%');
        let isPercentage2 = title2[i].textContent.includes('%');

        
        if(isPercentage1){
            t1 = t1.replace('%', '');
            progress1[i].style.width =100 - Number(t1) +"%" ;
        } else{
            t1 = parseFloat(t1);
            t2 = parseFloat(t2);
            let total =  t1+ t2;
            let width1 = ((t1 / total) * 100).toFixed(2);
            progress1[i].style.width =(100-width1)+ "%";
        }

        if(isPercentage2){
            t2 = t2.replace('%', '');
            progress2[i].style.width =Number(t2) + "%";
        } else{
            t1 = parseFloat(t1);
            t2 = parseFloat(t2);
            let total =  t1+ t2;
            let width2 = ((t2 / total) * 100).toFixed(2);
            progress1[i].style.width =(100-width2)+ "%";
        }
    }
}

getEle();
