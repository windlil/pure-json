
export function jsonToElement(json: any, el: string | HTMLElement | any) {
  el = typeof el === 'string' ? document.querySelector(el) : el
  if (!el) return
  let originData = initJson(json)
  deep(originData, el)
}

function deep(data: any, container: HTMLElement) {
  for (const item in data) {
    const currentNode = document.createElement('div')
    currentNode.style.marginLeft = '20px'
    if (typeof data[item] === 'object' && data[item] !== null) {
      currentNode.textContent = objectTextContent(data, item)
      container.appendChild(currentNode)
      deep(data[item], currentNode)
      const end = document.createElement('div')
      end.textContent = `${Array.isArray(data[item]) ? ']' : '}'}`
      container.appendChild(end)
      end.style.marginLeft = '20px'
    } else {
      currentNode.textContent = `"${item}" : "${data[item]}"`
      container.appendChild(currentNode)
    }
  } 
}

function objectTextContent(data: any, item: string) {
  if (Array.isArray(data[item])) {
    return `"${item}" [${data[item].length}] [`
  } else {
    return `"${item}" {${Object.keys(data[item]).length}\} {`
  }
}

function initJson(data: any): any {
  let originData = JSON.stringify(data)
  originData = JSON.parse(originData)
  return originData
}
