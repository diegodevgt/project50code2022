function orbitalPeriod(arr) {
  let res = [];
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2*(Math.PI)
  arr.forEach((obj)=>{
    let up = Math.pow(earthRadius + obj.avgAlt, 3)
    let down = (Math.sqrt(up/GM))
    let t = Math.round(a * down)
    res.push({name: obj.name, orbitalPeriod: t})
  })

  console.log(res);

  return res;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
