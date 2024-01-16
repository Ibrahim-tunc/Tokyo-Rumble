'use strict';

function getMinimumBlows(height) {
    // Write your code here
    const blows = [];
    let blow = [height[0]];
    let big = (height[2] > height[1]) ? true : false;
    for(let i=1; i<height.length; i++){
        if(big && height[i] > height[i-1]){
            blow.push(height[i]);
                if(i === height.length-1){
                blows.push(blow);
            }
        }
        else if(!big && height[i] < height[i-1]){
            blow.push(height[i]);
            if(i === height.length-1){
                blows.push(blow);
            }
        }
        else{
            blows.push(blow);
            blow = [height[i]];
            if(height[i+1] > height[i]) big = true;
                else big = false;
            if(i === height.length-1){
                blows.push(blow);
            }
        }
    }
    
    let a = "";
    blows.forEach(blow => {
        a = a + "+" + blow
    });
    return a;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const heightCount = parseInt(readLine().trim(), 10);

    let height = [];

    for (let i = 0; i < heightCount; i++) {
        const heightItem = parseInt(readLine().trim(), 10);
        height.push(heightItem);
    }

    const result = getMinimumBlows(height);

    ws.write(result + '\n');

    ws.end();
}
