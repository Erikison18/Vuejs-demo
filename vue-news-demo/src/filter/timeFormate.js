const normalTime = (time) => {
  if (time) {
    let oDate = new Date()
    oDate.setTime(time)
    let y = oDate.getFullYear()
    let m = oDate.getMonth() + 1
    let d = oDate.getDate()
    let h = oDate.getHours()
    let mm = oDate.getMinutes() > 9 ? oDate.getMinutes() : '0' + oDate.getMinutes()
    let s = oDate.getSeconds() > 9 ? oDate.getSeconds() : '0' + oDate.getSeconds()
    return y + '.' + m + '.' + d + '--' + h + ':' + mm + ':' + s
  }
}

export default normalTime
