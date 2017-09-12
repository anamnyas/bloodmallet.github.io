Highcharts.chart('priest_shadow_beastlord', 
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                0,
                0,
                277983,
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
            color: "#00E676",
            data: [
                34502,
                25381,
                17602,
                0,
                19664,
                18685,
                19476,
                2759,
                20908,
                8423,
                10118,
                14933,
                8317,
                11425,
                10069,
                14451,
                9459,
                11335,
                13328,
                8845,
                13303,
                12375,
                10931,
                14293,
                9440,
                13195,
                28479,
                12122,
                7333,
                0,
                5477,
                0,
                6342,
                0,
                6062,
                15452,
                6635,
                10578,
                9148,
                23000,
                30365,
                11284,
                0,
                22039,
                8179,
                2540,
                20736,
                4243,
                586,
                17912
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                36749,
                19406,
                15748,
                0,
                12619,
                16280,
                23118,
                4005,
                14953,
                14402,
                14893,
                9168,
                12510,
                12661,
                15187,
                7506,
                17237,
                10359,
                18527,
                17921,
                14026,
                16704,
                13086,
                11978,
                9114,
                7920,
                4401,
                11364,
                6824,
                15591,
                17612,
                0,
                12739,
                11262,
                11575,
                3349,
                5753,
                2211,
                10195,
                456,
                0,
                8897,
                0,
                8299,
                4776,
                5047,
                0,
                9168,
                7235,
                1103
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                31470,
                17134,
                21640,
                0,
                18592,
                24699,
                17437,
                20934,
                13455,
                11750,
                8783,
                14051,
                8152,
                2851,
                6779,
                10757,
                3672,
                10912,
                5687,
                16491,
                20113,
                4287,
                7954,
                2206,
                10522,
                13257,
                0,
                15,
                1062,
                11867,
                5714,
                0,
                0,
                9064,
                6492,
                12682,
                13156,
                12904,
                4210,
                0,
                2699,
                8820,
                0,
                0,
                6924,
                7577,
                3213,
                4722,
                928,
                0
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                31653,
                23307,
                18677,
                0,
                8166,
                14233,
                13706,
                0,
                18652,
                13760,
                11294,
                8668,
                20568,
                20787,
                6990,
                13103,
                14701,
                10735,
                12743,
                11467,
                2699,
                12903,
                7208,
                18460,
                7876,
                10467,
                25881,
                18249,
                7784,
                10040,
                7162,
                0,
                21939,
                4754,
                8710,
                5671,
                0,
                8154,
                7038,
                23169,
                21966,
                7129,
                0,
                20044,
                4875,
                5510,
                15419,
                0,
                0,
                22856
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                29433,
                17522,
                12663,
                0,
                23683,
                14324,
                16750,
                9067,
                5766,
                10257,
                10918,
                8796,
                0,
                3455,
                13027,
                9564,
                10954,
                9639,
                129813,
                6692,
                14620,
                4455,
                10056,
                1600,
                11930,
                0,
                8964,
                1283,
                4416,
                6958,
                6631,
                9012,
                4509,
                7629,
                12955,
                3958,
                11212,
                2031,
                9170,
                6730,
                5080,
                4838,
                11,
                9516,
                4638,
                1681,
                3264,
                6954,
                4244,
                2042
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                317428,
                10953,
                16819,
                0,
                10084,
                13298,
                9392,
                5379,
                10165,
                4805,
                12657,
                8034,
                151426,
                9792,
                9328,
                10290,
                127797,
                10219,
                0,
                12711,
                9133,
                10340,
                7094,
                5581,
                10370,
                14197,
                0,
                116369,
                1272,
                7025,
                7273,
                4923,
                8008,
                113257,
                7052,
                3200,
                5926,
                3322,
                3126,
                0,
                0,
                6789,
                10254,
                0,
                9634,
                0,
                0,
                214,
                1768,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                199567,
                181260,
                0,
                176166,
                138351,
                130500,
                182847,
                130558,
                142745,
                131745,
                135520,
                0,
                128559,
                124003,
                118666,
                0,
                118686,
                0,
                105309,
                104705,
                115758,
                116711,
                117518,
                107379,
                106881,
                101741,
                0,
                128330,
                104630,
                97600,
                133128,
                95039,
                0,
                92726,
                99693,
                99347,
                98741,
                90390,
                74555,
                75578,
                70534,
                106464,
                74865,
                71533,
                86337,
                69269,
                80016,
                64012,
                47761
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Priest - Shadow - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Spectral Thurible",
            "Icon of Rot",
            "Aran's Relaxing Ruby",
            "Kil'jaeden's Burning Wish",
            "Fury of the Burning Sky",
            "Star Gate",
            "Deteriorated Construct Core",
            "Unstable Arcanocrystal",
            "Reality Breacher",
            "Caged Horror",
            "Corrupted Starlight",
            "Stat Stick (Mastery)",
            "Tarnished Sentinel Medallion",
            "Whispers in the Dark",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Crit)",
            "Terror From Below",
            "Dreadstone of Endless Shadows",
            "Tome of Unraveling Sanity",
            "Bough of Corruption",
            "Twisting Wind",
            "Eye of Skovald",
            "Padawsen's Unlucky Charm",
            "Infernal Writ",
            "Stat Stick (Versatility)",
            "Eyasu's Mulligan",
            "Stat Stick (Haste)",
            "Charm of the Rising Tide",
            "Unstable Horrorslime",
            "Erratic Metronome",
            "PVP Badge of Dominance",
            "Darkmoon Deck: Hellfire",
            "Chrono Shard",
            "Astral Alchemist Stone",
            "PVP Insignia of Dominance",
            "Elementium Bomb Squirrel Generator",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Horn of Valor",
            "Toe Knee's Promise",
            "Obelisk of the Void",
            "Portable Manacracker",
            "Infernal Alchemist Stone",
            "Moonlit Prism",
            "Wriggling Sinew",
            "Mrrgria's Favor",
            "Swarming Plaguehive",
            "Naraxas' Spiked Tongue",
            "Figurehead of the Naglfar",
            "Pharameres Forbidden Grimoire"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 174696",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 174696.92,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});