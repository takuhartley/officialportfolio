import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

const CHART_WIDTH = 500
const CHART_HEIGHT = 300
const CHART_MARGIN = { top: 20, right: 20, bottom: 50, left: 50 }

const chartStyles = {
  visitors: {
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  },
  buttonClick: {
    backgroundColor: ['red', 'blue', 'green']
  }
}

const getVisitorsData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Number of Visitors',
      data: [12, 19, 3, 5, 2],
      ...chartStyles.visitors
    }
  ]
})

const getButtonClickData = () => ({
  labels: ['Button A', 'Button B', 'Button C'],
  datasets: [
    {
      label: 'Button Clicks',
      data: [5, 12, 3],
      ...chartStyles.buttonClick
    }
  ]
})

const setupScales = data => {
  const x = d3
    .scaleBand()
    .domain(data.labels)
    .range([CHART_MARGIN.left, CHART_WIDTH - CHART_MARGIN.right])
    .padding(0.1)

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data.datasets[0].data)])
    .nice()
    .range([CHART_HEIGHT - CHART_MARGIN.bottom, CHART_MARGIN.top])

  return { x, y }
}

const drawAxes = (svg, x, y) => {
  const xAxis = d3.axisBottom(x)
  const yAxis = d3.axisLeft(y)

  svg
    .append('g')
    .attr('transform', `translate(0,${CHART_HEIGHT - CHART_MARGIN.bottom})`)
    .call(xAxis)

  svg
    .append('g')
    .attr('transform', `translate(${CHART_MARGIN.left},0)`)
    .call(yAxis)
}

const Charts = () => {
  const visitorsRef = useRef(null)
  const buttonClickRef = useRef(null)

  useEffect(() => {
    drawLineChart(visitorsRef.current, getVisitorsData())
    drawBarChart(buttonClickRef.current, getButtonClickData())
  }, [])

  const drawLineChart = (element, data) => {
    const { x, y } = setupScales(data)
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', CHART_WIDTH)
      .attr('height', CHART_HEIGHT)

    const line = d3
      .line()
      .defined(d => !isNaN(d))
      .x((d, i) => x(data.labels[i]) + x.bandwidth() / 2)
      .y(d => y(d))

    svg
      .append('path')
      .datum(data.datasets[0].data)
      .attr('fill', 'none')
      .attr('stroke', chartStyles.visitors.borderColor)
      .attr('stroke-width', chartStyles.visitors.borderWidth)
      .attr('d', line)

    drawAxes(svg, x, y)
  }

  const drawBarChart = (element, data) => {
    const { x, y } = setupScales(data)
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', CHART_WIDTH)
      .attr('height', CHART_HEIGHT)

    svg
      .selectAll('rect')
      .data(data.datasets[0].data)
      .join('rect')
      .attr('x', (d, i) => x(data.labels[i]))
      .attr('y', d => y(d))
      .attr('height', d => y(0) - y(d))
      .attr('width', x.bandwidth())
      .attr('fill', (d, i) => chartStyles.buttonClick.backgroundColor[i])

    drawAxes(svg, x, y)
  }

  return (
    <>
      <div>
        <h2>Website Visitors</h2>
        <div ref={visitorsRef}></div>
      </div>
      <div>
        <h2>Button Clicks</h2>
        <div ref={buttonClickRef}></div>
      </div>
    </>
  )
}

export default Charts
