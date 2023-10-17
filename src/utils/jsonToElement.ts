
export function jsonToElement(json: any, el: string | HTMLElement | any) {
  el = typeof el === 'string' ? document.querySelector(el) : el
  if (!el) return
  let originData = initJson(json)
  deep(originData, el)
}

function chargeBreak(data: any) {
  const isArray = Array.isArray(data)
  if (isArray) {
    return !(data.length !== 0)
  } else {
    return !(Object.keys(data).length !== 0)
  }
}

function deep(data: any, container: HTMLElement) {
  for (const item in data) {
    const currentNode = document.createElement('div')
    currentNode.style.marginLeft = '20px'
    if (typeof data[item] === 'object' && data[item] !== null) {
      currentNode.textContent = objectTextContent(data, item)
      container.appendChild(currentNode)
      const isBreak = chargeBreak(data[item]) 
      if (isBreak) continue
      deep(data[item], currentNode)
      const end = document.createElement('div')
      end.textContent = `${Array.isArray(data[item]) ? '],' : '},'}`
      container.appendChild(end)
      end.style.marginLeft = '20px'
    } else {
      currentNode.textContent = `"${item}" : "${data[item]}",`
      container.appendChild(currentNode)
    }
  } 
}

function objectTextContent(data: any, item: string) {
  const isBreak = chargeBreak(data[item])

  if (Array.isArray(data[item])) {
    return `"${item}" [${data[item].length}] ${isBreak ? ',' : '['}`
  } else {
    return `"${item}" {${Object.keys(data[item]).length}\} ${isBreak ? ',' : '{'}`
  }
}

function initJson(data: any): any {
  let originData = JSON.stringify(data)
  originData = JSON.parse(originData)
  return originData
}
