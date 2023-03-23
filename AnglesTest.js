let points = 0;
let deg = 0;
let time = 0;

const resolutionDist = (sideA, sideB, sideC) => {
    //console.log(`${sideA} ${sideB} ${sideC}`)

    const topPart = ((sideA **2) + (sideB **2) - (sideC **2));
    //console.log(topPart)

    const bottomPart = (2 * sideA * sideB);
    //console.log(bottomPart)

    const thirdPart = (topPart/bottomPart)
    //console.log(thirdPart);

    const radians = (Math.acos(thirdPart));
    //console.log(radians);

    const answer = radians * (180/Math.PI)

    return answer;
}

const timeNspeed = (dInt, distance, totalRot) => {
    while (true){
        let speed = (dInt/0.0233);
        points++;
        deg += dInt;
        time += ((distance/343) * 1000) * 2;
        const tabby = [
            {"degree": dInt, "time (s)": time/1000, "points": points, "current deg": deg, "speed (d/s)": speed}
        ];
        
        
        if (deg > totalRot){
            console.table(tabby);
            break;
        }
    }
}

const oneForAll = (length, res, totalRot) => {
    const ang = resolutionDist(length, length, res)
    timeNspeed(ang, length, totalRot);
}
//const resolution = resolutionDist(4, 4, 0.01); // in meters aka 0.01 = 1 cm
//timeNspeed(resolution, 4) // input is given resolution if object is 4 meters away (400cm)

oneForAll(4,.05, 360)