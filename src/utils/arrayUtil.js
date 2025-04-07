
function getOneArr(data) {
  let newData = []
  const callback = (item) => {
    (item.children || (item.children = [])).map(v => {
      callback(v)
    })
    delete item.children
    newData.push(item)
  }
  data.map(v => callback(v))
  return newData
}

export { getOneArr}
