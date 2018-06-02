export const area_options = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Historic and Estimated Worldwide Population Distribution by Region'
    },
    subtitle: {
        text: 'Source: Wikipedia.org'
    },
    // xAxis: {
    //     categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    //     tickmarkPlacement: 'on',
    //     title: {
    //         enabled: false
    //     }
    // },
    // yAxis: {
    //     title: {
    //         text: 'Percent'
    //     }
    // },
    plotOptions: {
        area: {
            stacking: 'percent',
            lineColor: '#ffffff',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#ffffff'
            }
        }
    },
    series: []
};
