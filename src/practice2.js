const inject = (items, sections) => {
  return items.reduce((pre, cur, index) => {
    let matchedObjList = sections.filter(obj => obj.index === index)
    if (matchedObjList[0]) {
      pre.push(matchedObjList[0].content);
    }
    pre.push(cur)
    return pre;
  }, [])
}
export { inject };
