export class G964 {

  public static race = (v1, v2, g) => {;
    const time = g/(v2 - v1);
    const h = Math.floor(time);
    const m = Math.floor(time * 60) % 60;
    const s = Math.floor(time* 60 * 60) % 60;;
    return [h, m ,s];
  }
}


console.log(G964.race(720, 850, 70))
