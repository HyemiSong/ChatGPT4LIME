
//// bar chart with hover color change
const explanationData = [
    { feature: 'overall', value: 0.10 },
    { feature: 'characters', value: -0.08 },
    { feature: 'clichés', value: -0.07 },
    { feature: 'visual effects', value: 0.05 },
    { feature: 'runtime', value: -0.03 },
    { feature: 'Cameron', value: 0.03 },
    { feature: 'love story', value: 0.02 },
    { feature: 'class divide', value: -0.02 },
    { feature: 'iconic', value: 0.01 },
    { feature: 'tragedy', value: -0.01 },
];

// Set up the dimensions and margins for the bar chart
const margin = {top: 20, right: 20, bottom: 40, left: 100};
const width = 800 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

// Create the SVG container and set its dimensions
const svg = d3.select('#lime-chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Create the X and Y scales for the bar chart
const x = d3.scaleLinear()
    .domain([d3.min(explanationData, d => d.value), d3.max(explanationData, d => d.value)])
    .range([0, width]);

const y = d3.scaleBand()
    .domain(explanationData.map(d => d.feature))
    .range([0, height])
    .padding(0.1);

// Add the X and Y axes
svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

svg.append('g')
    .call(d3.axisLeft(y));

// Create the bars for the bar chart
const bars = svg.selectAll('.bar')
    .data(explanationData)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', d => x(Math.min(0, d.value)))
    .attr('y', d => y(d.feature))
    .attr('width', d => Math.abs(x(d.value) - x(0)))
    .attr('height', y.bandwidth())
    .attr('fill', d => d.value > 0 ? 'steelblue' : 'indianred');

// Add a tooltip that shows the value when hovering over a bar
const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

bars.on('mouseover', function(event, d) {
    d3.select(this).attr('fill', d.value > 0 ? 'darkblue' : 'darkred');
    const tooltipWidth = parseInt(tooltip.style('width'));
    tooltip.html(`<strong>${d.feature}:</strong> ${d.value.toFixed(4)}`)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px')
        .style('opacity', 0.9)
        .style('transform', `translateX(-${tooltipWidth/2}px)`);
})
.on('mouseout', function(event, d) {
    d3.select(this).attr('fill', d.value > 0 ? 'steelblue' : 'indianred');
    tooltip.style('opacity', 0);
});
    


//// updated the x axis. (code was incompleted - mouseover)
// const explanationData = [
//     { feature: 'overall', value: 0.10 },
//     { feature: 'characters', value: -0.08 },
//     { feature: 'clichés', value: -0.07 },
//     { feature: 'visual effects', value: 0.05 },
//     { feature: 'runtime', value: -0.03 },
//     { feature: 'Cameron', value: 0.03 },
//     { feature: 'love story', value: 0.02 },
//     { feature: 'class divide', value: -0.02 },
//     { feature: 'iconic', value: 0.01 },
//     { feature: 'tragedy', value: -0.01 },
// ];

// // Set up the dimensions and margins for the bar chart
// const margin = {top: 20, right: 20, bottom: 40, left: 100};
// const width = 800 - margin.left - margin.right;
// const height = 300 - margin.top - margin.bottom;

// // Create the SVG container and set its dimensions
// const svg = d3.select('#lime-chart')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// // Create the X and Y scales for the bar chart
// const x = d3.scaleLinear()
//     .domain([d3.min(explanationData, d => d.value), d3.max(explanationData, d => d.value)])
//     .range([0, width]);

// const y = d3.scaleBand()
//     .domain(explanationData.map(d => d.feature))
//     .range([0, height])
//     .padding(0.1);

// // Add the X and Y axes
// svg.append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(x).tickSizeOuter(0));

// svg.append('g')
//     .call(d3.axisLeft(y));

// // Create the bars for the bar chart
// const bars = svg.selectAll('.bar')
//     .data(explanationData)
//     .join('rect')
//     .attr('class', 'bar')
//     .attr('x', d => x(Math.min(0, d.value)))
//     .attr('y', d => y(d.feature))
//     .attr('width', d => Math.abs(x(d.value) - x(0)))
//     .attr('height', y.bandwidth())
//     .attr('fill', d => d.value > 0 ? 'steelblue' : 'indianred');

// // Add a tooltip that shows the value when hovering over a bar
// const tooltip = d3.select('body').append('div')
//     .attr('class', 'tooltip')
//     .style('opacity', 0);

// bars.on('mouseover', function(event, d) {
//     const tooltipWidth = parseInt(tooltip.style('width'));
//     tooltip.html(`<strong>${d.feature}:</strong> ${d.value.toFixed(4)}`)
//         .style('left', (event.pageX + 10) + 'px')
//         .style('top', (event.pageY - 28) + 'px')
//         .style('opacity', 0.9)
//         .style('transform', `translateX(-${tooltipWidth/2}px)`);
// })
// .on('mouseout', function() {
//     tooltip.style('opacity', 0);
// });
 

/// making posi nege bar chart with a new dataset
// const explanationData = [
//     { feature: 'overall', value: 0.10 },
//     { feature: 'characters', value: -0.08 },
//     { feature: 'clichés', value: -0.07 },
//     { feature: 'visual effects', value: 0.05 },
//     { feature: 'runtime', value: -0.03 },
//     { feature: 'Cameron', value: 0.03 },
//     { feature: 'love story', value: 0.02 },
//     { feature: 'class divide', value: -0.02 },
//     { feature: 'iconic', value: 0.01 },
//     { feature: 'tragedy', value: -0.01 },
// ];

// // Set up the dimensions and margins for the bar chart
// const margin = {top: 20, right: 20, bottom: 40, left: 100};
// const width = 800 - margin.left - margin.right;
// const height = 300 - margin.top - margin.bottom;

// // Create the SVG container and set its dimensions
// const svg = d3.select('#lime-chart')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// // Create the X and Y scales for the bar chart
// const x = d3.scaleLinear()
//     .domain([d3.min(explanationData, d => d.value), d3.max(explanationData, d => d.value)])
//     .range([0, width]);

// const y = d3.scaleBand()
//     .domain(explanationData.map(d => d.feature))
//     .range([0, height])
//     .padding(0.1);

// // Add the X and Y axes
// svg.append('g')
//     .attr('transform', `translate(${x(0)}, ${height})`)
//     .call(d3.axisBottom(x));

// svg.append('g')
//     .call(d3.axisLeft(y));

// // Create the bars for the bar chart
// const bars = svg.selectAll('.bar')
//     .data(explanationData)
//     .join('rect')
//     .attr('class', 'bar')
//     .attr('x', d => x(Math.min(0, d.value)))
//     .attr('y', d => y(d.feature))
//     .attr('width', d => Math.abs(x(d.value) - x(0)))
//     .attr('height', y.bandwidth())
//     .attr('fill', d => d.value > 0 ? 'steelblue' : 'indianred');

// // Add a tooltip that shows the value when hovering over a bar
// const tooltip = d3.select('body').append('div')
//     .attr('class', 'tooltip')
//     .style('opacity', 0);

// bars.on('mouseover', function(event, d) {
//     const tooltipWidth = parseInt(tooltip.style('width'));
//     tooltip.html(`<strong>${d.feature}:</strong> ${d.value.toFixed(4)}`)
//         .style('left', (event.pageX + 10) + 'px')
//         .style('top', (event.pageY - 28) + 'px')
//         .style('opacity', 0.9)
//         .style('transform', `translateX(-${tooltipWidth/2}px)`);
// })
// .on('mouseout', function() {
//     tooltip.style('opacity', 0);
// });


// ////Prepare the LIME explanation data (replace this with your actual data)
// const explanationData = [
//     {word: 'love', value: 0.10899186088915801},
//     {word: 'absolutely', value: 0.1020781092289751},
//     {word: 'amazing.', value: 0.0863424760853075},
//     {word: 'product!', value: 0.0090798870450569},
//     {word: "It's", value: 0.0014962935021576},
//     {word: 'this', value: 0.00013323099473377107},
//     {word: 'I', value: -0.0009132640370179132},
// ];

// // Set up the dimensions and margins for the bar chart
// const margin = {top: 20, right: 20, bottom: 40, left: 100};
// const width = 800 - margin.left - margin.right;
// const height = 300 - margin.top - margin.bottom;

// // Create the SVG container and set its dimensions
// const svg = d3.select('#lime-chart')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// // Create the X and Y scales for the bar chart
// const x = d3.scaleLinear()
//     .domain([d3.min(explanationData, d => d.value), d3.max(explanationData, d => d.value)])
//     .range([0, width]);

// const y = d3.scaleBand()
//     .domain(explanationData.map(d => d.word))
//     .range([0, height])
//     .padding(0.1);

// // Add the X and Y axes
// svg.append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(x));

// svg.append('g')
//     .call(d3.axisLeft(y));

// // Create the bars for the bar chart
// const bars = svg.selectAll('.bar')
//     .data(explanationData)
//     .join('rect')
//     .attr('class', 'bar')
//     .attr('x', d => x(Math.min(0, d.value)))
//     .attr('y', d => y(d.word))
//     .attr('width', d => Math.abs(x(d.value) - x(0)))
//     .attr('height', y.bandwidth());

// // Add a tooltip that shows the value when hovering over a bar
// const tooltip = d3.select('body').append('div')
//     .attr('class', 'tooltip')
//     .style('opacity', 0);

// bars.on('mouseover', function(event, d) {
//     const tooltipWidth = parseInt(tooltip.style('width'));
//     tooltip.html(`<strong>${d.word}:</strong> ${d.value.toFixed(4)}`)
//         .style('left', (event.pageX + 10) + 'px')
//         .style('top', (event.pageY - 28) + 'px')
//         .style('opacity', 0.9)
//         .style('transform', `translateX(-${tooltipWidth/2}px)`);
// })
// .on('mouseout', function() {
//     tooltip.style('opacity', 0);
// });


//3// tooltip
// // Prepare the LIME explanation data (replace this with your actual data)
// const explanationData = [
//     {word: 'love', value: 0.10899186088915801},
//     {word: 'absolutely', value: 0.1020781092289751},
//     {word: 'amazing.', value: 0.0863424760853075},
//     {word: 'product!', value: 0.0090798870450569},
//     {word: "It's", value: 0.0014962935021576},
//     {word: 'this', value: 0.00013323099473377107},
//     {word: 'I', value: -0.0009132640370179132},
// ];

// // Set up the dimensions and margins for the bar chart
// const margin = {top: 20, right: 20, bottom: 20, left: 100};
// const width = 800 - margin.left - margin.right;
// const height = 300 - margin.top - margin.bottom;

// // Create the SVG container and set its dimensions
// const svg = d3.select('#lime-chart')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// // Create the X and Y scales for the bar chart
// const x = d3.scaleLinear()
//     .domain([d3.min(explanationData, d => d.value), d3.max(explanationData, d => d.value)])
//     .range([0, width]);

// const y = d3.scaleBand()
//     .domain(explanationData.map(d => d.word))
//     .range([0, height])
//     .padding(0.1);

// // Add the X and Y axes
// svg.append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(x));

// svg.append('g')
//     .call(d3.axisLeft(y));

// // Add the bars for the bar chart
// svg.selectAll('.bar')
//     .data(explanationData)
//     .join('rect')
//     .attr('class', 'bar')
//     .attr('x', d => x(Math.min(0, d.value)))
//     .attr('y', d => y(d.word))
//     .attr('width', d => Math.abs(x(d.value) - x(0)))
//     .attr('height', y.bandwidth())
//     .on('mouseover', (event, d) => {
//         tooltip.transition()
//             .duration(200)
//             .style('opacity', 0.9);
//         tooltip.html(`${d.word}: ${d.value.toFixed(2)}`)
//             .style('left', `${event.pageX}px`)
//             .style('top', `${event.pageY - 28}px`);
//     })
//     .on('mouseout', () => {
//         tooltip.transition()
//             .duration(200)
//             .style('opacity', 0);
//     });

// // Add a tooltip for displaying the bar value
// const tooltip = d3.select('body')
//     .append('div')
//     .attr('class', 'tooltip')
//     .style('opacity', 0);
  


//   //2// color
//   // Prepare the LIME explanation data (replace this with your actual data)
//   const explanationData = [
//     { word: 'love', value: 0.10899186088915801 },
//     { word: 'absolutely', value: 0.1020781092289751 },
//     { word: 'amazing.', value: 0.0863424760853075 },
//     { word: 'product!', value: 0.0090798870450569 },
//     { word: "It's", value: 0.0014962935021576 },
//     { word: 'this', value: 0.00013323099473377107 },
//     { word: 'I', value: -0.0009132640370179132 },
//   ];

//   // Set up the dimensions and margins for the bar chart
//   const margin = { top: 20, right: 20, bottom: 20, left: 100 };
//   const width = 800 - margin.left - margin.right;
//   const height = 300 - margin.top - margin.bottom;

//   // Create the SVG container and set its dimensions
//   const svg = d3
//     .select('#lime-chart')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

//   // Create the X and Y scales for the bar chart
//   const x = d3
//     .scaleLinear()
//     .domain([d3.min(explanationData, d => d.value), d3.max(explanationData, d => d.value)])
//     .range([0, width]);

//   const y = d3
//     .scaleBand()
//     .domain(explanationData.map(d => d.word))
//     .range([0, height])
//     .padding(0.1);

//   // Add the X and Y axes
//   svg
//     .append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(x));

//   svg.append('g').call(d3.axisLeft(y));

//   // Create the bars for the bar chart
//   svg
//     .selectAll('.bar')
//     .data(explanationData)
//     .join('rect')
//     .attr('class', 'bar')
//     .attr('x', d => x(Math.min(0, d.value)))
//     .attr('y', d => y(d.word))
//     .attr('width', d => Math.abs(x(d.value) - x(0)))
//     .attr('height', y.bandwidth())
//     .on('mouseover', function () {
//       d3.select(this).style('fill', 'orange');
//     })
//     .on('mouseout', function () {
//       d3.select(this).style('fill', 'steelblue');
//     });


//1//    
//  // Prepare the LIME explanation data (replace this with your actual data)
//  const explanationData = [
//     {word: 'love', value: 0.10899186088915801},
//     {word: 'absolutely', value: 0.1020781092289751},
//     {word: 'amazing.', value: 0.0863424760853075},
//     {word: 'product!', value: 0.0090798870450569},
//     {word: "It's", value: 0.0014962935021576},
//     {word: 'this', value: 0.00013323099473377107},
//     {word: 'I', value: -0.0009132640370179132},
// ];

// // Set up the dimensions and margins for the bar chart
// const margin = {top: 20, right: 20, bottom: 20, left: 100};
// const width = 800 - margin.left - margin.right;
// const height = 300 - margin.top - margin.bottom;

// // Create the SVG container and set its dimensions
// const svg = d3.select('#lime-chart')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`);

// // Create the X and Y scales for the bar chart
// const x = d3.scaleLinear()
//     .domain([d3.min(explanationData, d => d.value), d3.max(explanationData, d => d.value)])
//     .range([0, width]);

// const y = d3.scaleBand()
//     .domain(explanationData.map(d => d.word))
//     .range([0, height])
//     .padding(0.1);

// // Add the X and Y axes
// svg.append('g')
//     .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(x));

// svg.append('g')
//     .call(d3.axisLeft(y));

// // Create the bars for the bar chart
// svg.selectAll('.bar')
//     .data(explanationData)
//     .join('rect')
//     .attr('class', 'bar')
//     .attr('x', d => x(Math.min(0, d.value)))
//     .attr('y', d => y(d.word))
//     .attr('width', d => Math.abs(x(d.value) - x(0)))
//     .attr('height', y.bandwidth());


//     // Add event listener to bars
//     bars.on("click", function(d) {
//         // Handle click event
//         console.log("Bar clicked:", d);
//     });
    
//     // Add event listener to x-axis labels
//     xLabels.on("mouseover", function(d) {
//         // Handle mouseover event
//     console.log("Label mouseover:", d);
//   })