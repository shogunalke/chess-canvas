function draw() {
    const canvas = document.getElementById('chess');
    if(canvas.getContext) {
        const ctx = canvas.getContext('2d');
        
        const rectWhite = 'rgb(255 255 255)';
        const rectBlack = 'rgb(0 0 0)';
        let distanceLeft = 0;
        let distanceTop = 0;
        let w = 100;
        let h = 100;


        for(i=1; i<=8; i++) {
            for(j=1; j<=8; j++) {
                if((i+j)%2 == 0) {
                    ctx.fillStyle = rectWhite;
                    ctx.fillRect(distanceLeft, distanceTop, w, h);
                    distanceLeft += 100;
                } else {
                    ctx.fillStyle = rectBlack;
                    ctx.fillRect(distanceLeft, distanceTop, w, h);
                    distanceLeft += 100;
                }
            }
            distanceTop += 100;
            distanceLeft = 0;
        }
    }
}
window.addEventListener('load', draw);