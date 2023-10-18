
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
      currentNode.innerHTML = objectTextContent(data, item)
      container.appendChild(currentNode)
      const isBreak = chargeBreak(data[item]) 
      if (isBreak) continue

      deep(data[item], currentNode)
      const end = document.createElement('p')
      end.innerHTML = `${Array.isArray(data[item]) ? '],' : '},'}`
      currentNode.appendChild(end)
      end.style.marginLeft = '20px'
    } else {
      const value = typeof data[item] === 'string' ? `"${data[item]}"` : data[item]
      const color = setValueColor(data[item]) as string
      currentNode.innerHTML = `<span class="key">"${item}"</span> : <span class="${color}">${value}</span>,`
      container.appendChild(currentNode)
    }
  } 
}



function objectTextContent(data: any, item: string) {
  const isBreak = chargeBreak(data[item])
  if (Array.isArray(data[item])) {
    return `<span class="key">"${item}"</span> : ${isBreak ? '[0],' :`<span data-id="un" id="controls">-</span>[`}`
  } else {
    return `<span class="key">"${item}"</span> : ${isBreak ? '{0},' : `<span data-id="un" id="controls">-</span>{`}`
  }
}

function initJson(data: any): any {
  let originData = JSON.stringify(data)


  return JSON.parse(originData)
}

function setValueColor(data: any) {
  if (typeof data === 'string') return 'string'
  else if (typeof data === 'boolean') return 'boolean'
  else if (typeof data === 'number') return 'number'
}