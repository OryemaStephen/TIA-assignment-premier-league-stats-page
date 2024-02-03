function getEle() {
    let title1 = document.getElementsByClassName('progress-title1');
    let title2 = document.getElementsByClassName('progress-title2');
    let progress1 = document.getElementsByClassName("progress1");
    let progress2 = document.getElementsByClassName("progress2");
    
    
    let length = title1.length;

    
    for (let i = 0; i < length; i++) {
        let t1 = Number(title1[i].textContent);
        let t2 = Number(title2[i].textContent);

        let isPercentage1 = title1[i].textContent.includes('%');
        let isPercentage2 = title2[i].textContent.includes('%');

        let total = t1 + t2;

        if(isPercentage1){
            progress1[i].style.width =(100-t1) + "%";
        } else{
            let width1 = ((t1 / total) * 100).toFixed(2);
            progress1[i].style.width =(100-width1)+ "%";
        }

        if(isPercentage2){
            progress2[i].style.width =t2 + '%';
        } else{
            let width2 = ((t2 / total) * 100).toFixed(2);
            progress2[i].style.width =width2 + "%";
        }
    }
}

getEle();
