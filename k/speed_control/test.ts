export class G964 {

  public static gps = (s, x) => {
    let avgSpeeds = [];
    if (x.length <= 1) return 0;
    for (let i = 0; i < x.length -1; i++) {
        avgSpeeds.push((3600 * (x[i+1] - x[i])) / s)
    }
    return Math.floor(avgSpeeds.sort((a, b) => b - a)[0]);
  }
}

const speed = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]


console.log(G964.gps(15, speed))
