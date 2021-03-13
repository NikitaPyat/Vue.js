export default (d, beginD, endD) => {
  let mas_dates = eachDayOfInterval({ start: new Date(beginD), end: new Date(endD)});
  let out = [];
  
  const getVal = (date) => {
    for (let i = 0; i < d.length; i+= 1) {
      if (date === d[i].date) {
        return d[i].value;
      }
    }
    return 0;
  };
  
  for (let i = 0; i < mas_dates.length; i += 1) {
    out[i]= {};
    let dd = mas_dates[i].getDate();
    let mm = mas_dates[i].getMonth() + 1;
    let yy = mas_dates[i].getFullYear();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (yy < 10) yy = '0' + yy;
    
    out[i].date = dd + '.' + mm + '.' + yy;
    out[i].value = getVal(out[i].date);   
  }
  
  return out;
};
