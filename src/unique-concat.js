const uniqConcat = (...arrays) => {
  const result = []
  const seen = {}
  arrays.forEach(array => (array||[]).forEach(item => (
    !seen[item] && (seen[item] = 1) && result.push(item)
  )))
  return result
}

export default uniqConcat