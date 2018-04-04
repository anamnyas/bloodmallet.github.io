Highcharts.chart('rogue_subtlety_beastlord_pruned',
    {
        chart: {
            type: "bar"
        },
        legend: {
            align: "right",
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: "#CCC",
            borderWidth: 1,
            floating: false,
            reversed: true,
            shadow: false,
            verticalAlign: "bottom",
            x: 0,
            y: 0
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    enabled: false
                },
                point: {
                    events: {
                        click: function (event) { var chart = this.series.yAxis; chart.removePlotLine('helperLine'); chart.addPlotLine({ value: this.stackY, color: '#000', width: 2, id: 'helperLine', zIndex: 5, label: { text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY), align: 'left', verticalAlign: 'bottom', rotation: 0, y: -5 } }); }
                    }
                },
                stacking: "normal"
            },
            series: {
                borderColor: "#151515",
                events: {
                    legendItemClick: function () { return false; }
                }
            }
        },
        series: [
            {
                color: "#fdbf6f",
                data: [
                    0,
                    367226,
                    344424,
                    0,
                    266233,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                name: "1000"
            },
            {
                color: "#cab2d6",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                name: "980"
            },
            {
                color: "#ff7f00",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                name: "970"
            },
            {
                color: "#fb9a99",
                data: [
                    380678,
                    0,
                    0,
                    279206,
                    0,
                    264000,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                name: "960"
            },
            {
                color: "#e31a1c",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                name: "950"
            },
            {
                color: "#b2df8a",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    246978,
                    246563,
                    0,
                    226411,
                    208779,
                    0,
                    205030,
                    201314,
                    0,
                    0,
                    0,
                    0,
                    180518,
                    0
                ],
                name: "940"
            },
            {
                color: "#33a02c",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    227535,
                    0,
                    0,
                    207923,
                    0,
                    0,
                    192968,
                    0,
                    0,
                    0,
                    0,
                    179571
                ],
                name: "930"
            },
            {
                color: "#a6cee3",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                name: "920"
            },
            {
                color: "#1f78b4",
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    188896,
                    183034,
                    182788,
                    0,
                    0
                ],
                name: "910"
            }
        ],
        subtitle: {
            text: "UTC 2018-04-03 22:47 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/7d779968338362996c1eca6d04269bb42ff808ab\" target=\"blank\">7d77996</a>",
            useHTML: true
        },
        title: {
            text: "Rogue - Subtlety DfA - Beastlord",
            useHTML: true
        },
        tooltip: {
            backgroundColor: "#eee",
            borderColor: "#bbb",
            formatter: function () { var s = '<div style=\"background-color:#eee; padding:12px;\"><b>' + this.x + '</b>'; var cumulative_amount = 0; for (var i = this.points.length - 1; i >= 0; i--) { cumulative_amount += this.points[i].y; if (this.points[i].y !== 0) { s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name + '</span>: ' + Intl.NumberFormat().format(cumulative_amount); } } s += '</div>'; return s; },
            headerFormat: "<b>{point.x}</b>",
            shared: true,
            style: {
                color: "black"
            },
            useHTML: true
        },
        xAxis: {
            categories: [
                "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
                "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
                "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
                "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
                "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
                "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
                "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
                "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
                "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
                "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
                "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
                "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
                "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
                "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
                "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
                "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
                "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
                "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
                "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
                "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>"
            ],
            labels: {
                useHTML: true
            }
        },
        yAxis: {
            labels: {
                enabled: false
            },
            min: 0,
            plotLines: [
                {
                    color: "#0973DA",
                    label: {
                        align: "left",
                        rotation: 0,
                        style: {
                            color: "#0973DA"
                        },
                        text: 'mean: ' + Intl.NumberFormat().format(239003),
                        verticalAlign: "bottom",
                        x: 10,
                        y: -23
                    },
                    value: 239003.75,
                    width: 2,
                    zIndex: 2
                }
            ],
            stackLabels: {
                enabled: true,
                formatter: function () { return Intl.NumberFormat().format(this.total); },
                style: {
                    textOutline: false
                }
            },
            title: {
                text: "\u0394 Damage per second"
            }
        }
    });