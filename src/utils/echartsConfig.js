// 提示框（白色样式）
export const tooltip = () => ({
  trigger: 'axis',
  backgroundColor: 'rgba(255,255,255, 1)',
  extraCssText: 'box-shadow: 0 0 3px rgba(150,150,150, 0.7);',
  textStyle: {
    fontSize: 12,
    color: '#666',
    lineHeight: 22
  }
})

// 提示框, 内容长时可滚动（解决内容太长，显示不全，被遮挡的问题）
export const scrollTooltip = (sort = '') => ({
  trigger: 'axis',
  enterable: true, // 鼠标是否可进入提示框浮层中
  confine: true,
  backgroundColor: 'rgba(255,255,255, 1)',
  extraCssText: 'box-shadow: 0 0 3px rgba(150,150,150, 0.7);',
  textStyle: {
    fontSize: 12,
    color: '#666',
    lineHeight: 22
  },
  // 解决因为enterable:true 属性，造成的其他图的tip不消失问题
  position: function (point, params, dom) { // point: 鼠标位置
    const tooltips = document.querySelectorAll('._scroll-tooltip')
    for (let i = 0; i < tooltips.length; i++) {
      const el = tooltips[i]
      if (el !== dom) {
        el.style.display = 'none'
      }
    }
    dom.className = '_scroll-tooltip'
  },
  formatter: function (params) {
    // 排序
    if (sort === 'asc' || sort === 'desc') {
      const isAsc = sort === 'asc' // 升序
      params = params.sort((a, b) => {
        console.log(a[1], b[1])
        return isAsc ? (a.value[1] - b.value[1]) : (b.value[1] - a.value[1])
      })
    }

    // 生成html内容
    let htmlStr = ''
    for (var i = 0; i < params.length; i++) {
      const { marker, seriesName, value } = params[i]
      const val = (Array.isArray(value) ? value[1] : value) || 0
      htmlStr += `<p>${marker} ${seriesName}: ${val} </p>`
    }
    return `
      <div style="height: auto; max-height: 80vh; overflow-y: auto; padding-right: 10px;">
        <p>${params[0].axisValue}</p>
        ${htmlStr}
      </div>`
  },
})