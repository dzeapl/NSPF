(function($) {
    "use strict";
    if ($("#weekly_claim_chart").length) {
        var options = {
            colors: ['#2058ba'],
            chart: {
                height: 400,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            stroke: {},
            series: [{
                name: "No. of Weekly Claims",
                data: [200, 600, 400, 800]
            }],
            markers: {
                size: 6
            },
            xaxis: {
                categories: ["Week1", "Week2", "Week3", "Week4"],
                tickPlacement: 'between',
                labels: {
                    style: {
                        cssClass: 'apexcharts-xaxis-label',
                        colors: ['#2c66cb', '#2c66cb', '#2c66cb', '#2c66cb']
                    },
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#weekly_claim_chart"), options);
        chart.render()
    }


    if ($("#se_performance").length) {

        var options = {
            colors: ['#66bb6a', '#00558a', '#ffb300', '#ef5350'],
            series: [{
                name: 'Claim Approval',
                data: [220, 100, 350, 250, 130, 150]
            }, {
                name: 'Invoice Generation',
                data: [50, 40, 20, 30, 70, 40]
            }, {
                name: 'Replacement Shipment',
                data: [30, 20, 40, 50, 60, 50]
            }, {
                name: 'Defective Shipment',
                data: [15, 150, 100, 80, 70, 20]
            }],
            dataLabels: {
                enabled: false
            },
            chart: {
                type: 'bar',
                height: 400,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                size: 16
            },
            xaxis: {
                categories: ['SE1', 'SE2', 'SE3', 'SE4', 'SE5', 'SE6', ],
                labels: {
                    style: {
                        cssClass: 'apexcharts-xaxis-label',
                        colors: ['#2c66cb', '#2c66cb', '#2c66cb', '#2c66cb']
                    },
                }
            },
            yaxis: {
                min: 100,
            },
            fill: {
                opacity: 1
            }
        };

        var chart2 = new ApexCharts(document.querySelector("#se_performance"), options);
        chart2.render()
    }

    if ($("#se_activity").length) {

        var options = {
            colors: ['#66bb6a', '#ffb300', '#ef5350'],
            series: [{
                name: 'Approved',
                data: [220, 100, 350, 250, 130, 150]
            }, {
                name: 'Modification',
                data: [50, 40, 20, 30, 70, 40]
            }, {
                name: 'Rejected',
                data: [30, 20, 40, 50, 60, 50]
            }],
            dataLabels: {
                enabled: false
            },
            chart: {
                type: 'bar',
                height: 400,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                size: 16
            },
            xaxis: {
                categories: ['SE1', 'SE2', 'SE3', 'SE4', 'SE5', 'SE6', ],
                labels: {
                    style: {
                        cssClass: 'apexcharts-xaxis-label',
                        colors: ['#2c66cb', '#2c66cb', '#2c66cb', '#2c66cb']
                    },
                }
            },
            yaxis: {
                min: 100,
            },
            fill: {
                opacity: 1
            }
        };

        var chart3 = new ApexCharts(document.querySelector("#se_activity"), options);
        chart3.render()
    }

    if ($("#weekly_settlement_chart").length) {

        var options = {
            colors: ['#2c66cb', '#f0f0f0'],
            series: [{
                data: [42, 50, 24, 30]
            }, {
                data: [8, 0, 26, 20]
            }],
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    columnWidth: '10',
                    endingShape: 'flat',
                },
            },
            stroke: {
                show: false,
                width: 0
            },
            chart: {
                type: 'bar',
                height: 400,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            tooltip: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: ['Week1', 'Week2', 'Week3', 'Week4'],
                labels: {
                    style: {
                        cssClass: 'apexcharts-xaxis-label',
                        colors: ['#2c66cb', '#2c66cb', '#2c66cb', '#2c66cb']
                    },
                }
            },
            yaxis: {
                labels: {
                    formatter: function(value) {
                        return value + " Lac";
                    }
                },
            }
        };

        var chart4 = new ApexCharts(document.querySelector("#weekly_settlement_chart"), options);
        chart4.render()
    }

    if ($("#partner_wise_trends").length) {

        var options = {
            colors: ['#2c66cb', '#f0f0f0'],
            series: [{
                data: [3.5, 2.5, 3.2, 2.2]
            }, {
                data: [0.5, 1.5, 0.8, 1.8]
            }],
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    columnWidth: '10',
                    endingShape: 'flat',
                },
            },
            stroke: {
                show: false,
                width: 0
            },
            chart: {
                type: 'bar',
                height: 400,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            tooltip: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: ['No Claim', '1 Claim', '2 Claim', 'More than'],

                labels: {
                    style: {
                        cssClass: 'apexcharts-xaxis-label',
                        colors: ['#2c66cb', '#2c66cb', '#2c66cb', '#2c66cb']
                    },
                },
                yaxis: {
                    min: 1,
                    max: 4,
                    tickAmount: 3,
                    formatter: function(value) {
                        return "Week" + value;
                    }
                },
            }
        };

        var chart5 = new ApexCharts(document.querySelector("#partner_wise_trends"), options);
        chart5.render()
    }

})(window.jQuery);



// // // // // fusion chart js // // // // 

const dataSource = {
    chart: {
        decimals: "1",
        showvalues: "1",
        plottooltext: "$label: <b>$dataValue</b>",
        plotfillalpha: "100",
        theme: "fusion",
        streamlineddata: "0",
        showLegend: "0",
        showLabels: "0"
    },
    data: [{
            label: "Number of Claims Initiated",
            value: "10000",
            color: "#ef5350"
        },
        {
            label: "Number of Claims Initiated",
            value: "8000",
            color: "#ffb300"
        },
        {
            label: "Number of Claims Submitted Successfully for TSEapproval",
            value: "6000",
            color: "#66bb6a"
        },
        {
            label: "Number of Claims forwarded to SAP",
            value: "2000",
            color: "#00558a"
        },
        {
            label: "Number of claims for which Dealer has shipped the replacement Tyre to Retailer",
            value: "1100",
            color: "#ffc000"
        },
        {
            label: "Number of Claims for Which Defective Tyres have Reached Back to the Depot",
            value: "630",
            color: "#00a2e2"
        }
    ]
};

FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        type: "funnel",
        renderAt: "chart-container",
        width: "100%",
        height: "415",
        dataFormat: "json",
        dataSource
    }).render();
});