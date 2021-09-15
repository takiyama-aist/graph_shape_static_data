/**
 * Parameters
 */
// グラフデータ
 const g_jsonLineStrings = [
    {"geometry":{"coordinates":[[116.3442415583208,40.42154052559348],[115.80823032993355,40.011702938572085],[117.33433662875217,40.34321794476925],[116.92541461682374,40.96089286267584],[115.84025798588347,39.89623642859556],[116.2340063307817,40.612698642524215]],"type":"LineString"},"type":"Feature","properties":{"oID":"37","timestamp":"2021-08-26 17:21:07"}},
    {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"32","timestamp":"2021-08-26 17:21:07"}},
    {"geometry":{"coordinates":[[116.74223311693677,40.62389377537028],[117.25221970767963,40.26345863305435],[117.55482824280018,40.992032225971705],[117.08726130407601,40.97082801027457],[117.42766434582946,40.93017596710179],[117.21328656310214,40.98749018716813],[116.18007089915969,39.898307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:07"}}
];

// グラフ線の色
const g_colors = ["#4E79A7","#F28E2B","#E15759","#76B7B2","#59A14F","#EDC948","#B07AA1","#FF9DA7","#9C755F","#BAB0AC"];

/**
 * Global variable
 */
// Chartオブジェクト
let g_chart = null;

// スライダーつまみ位置
let g_sliderLow = 0
let g_sliderHigh = 0

// スライダーインデックス数
let g_sliderMax = 0

/**
 * 画面描画時の処理
 */
 window.onload = function() {
    // スライダー
    let tags = document.getElementsByTagName('input');
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].id === 'range') {
            tags[i].addEventListener('input', rangeOnChange);
        }
    }
    // スライダーの分割数を計算
    countSliderMax();
    // グラフ描画
	createGraph(0, 1);
}

/**
 * スライダーインデックス数の取得
 */
function countSliderMax() {
    // グラフデータの解析
    const stringfyLineStrings = JSON.stringify(g_jsonLineStrings);
    const objLineStrings = JSON.parse(stringfyLineStrings);
    // coordinateの数が最大のものがスライダーのインデックス数
    objLineStrings.forEach((objLineString, i) => {
        if (g_sliderMax <= objLineString.geometry.coordinates.length) {
            g_sliderMax = objLineString.geometry.coordinates.length　-1;
        }
    });
}

/**
 * グラフ描画
 * @param {number} low - 小さい方のスライダーつまみ位置
 * @param {number} high - 大きい方のスライダーつまみ位置
 */
function createGraph(low, high) {
    // スライダー位置保存
    g_sliderLow = low;
    g_sliderHigh = high;

    // グラフデータの解析
    const stringfyLineStrings = JSON.stringify(g_jsonLineStrings);
    const objLineStrings = JSON.parse(stringfyLineStrings);
    
    // coordinate
    let x = [];
    let y = [];
    // coordinate range
    let x_range_min = 0;
    let x_range_max = 0;
    let y_range_min = 0;
    let y_range_max = 0;
    // Chart data
    let dataObj = new Object();
    dataObj.datasets = []
    // Chart のdataにグラフの値をセット
    objLineStrings.forEach((objLineString, i) => {
        dataObj.datasets[i] = new Object();
        dataObj.datasets[i].label = 'oID:' + objLineString.properties.oID + ', ' + objLineString.properties.timestamp;
        dataObj.datasets[i].data = [];
        // objLineStrings[i].geometry.coordinates.forEach((coordinate) => {
        for (let j = 0; j < objLineStrings[i].geometry.coordinates.length; j++) {
            x.push(objLineString.geometry.coordinates[j][0]);
            y.push(objLineString.geometry.coordinates[j][1]);
            if (low <= j && j <= high) {
                let data = new Object();
                data.x = objLineString.geometry.coordinates[j][0];
                data.y = objLineString.geometry.coordinates[j][1];
                dataObj.datasets[i].data.push(data);
            }
        }
        indexColors = i % g_colors.length;
        dataObj.datasets[i].borderColor = g_colors[indexColors];
        dataObj.datasets[i].borderWidth = 2;
        dataObj.datasets[i].pointBackgroundColor = g_colors[indexColors];
        dataObj.datasets[i].pointBorderColor = g_colors[indexColors];
        dataObj.datasets[i].pointRadius = 1;
        dataObj.datasets[i].pointHoverRadius = 1;
        dataObj.datasets[i].fill = false;
        dataObj.datasets[i].tension = 0;
        dataObj.datasets[i].showLine = true;
    });
    // coordinate range
    x_range_min = Math.min(...x) - 0.2
    x_range_max = Math.max(...x) + 0.2
    y_range_min = Math.min(...y) - 0.2
    y_range_max = Math.max(...y) + 0.1
    // スライダー初期設定
    if (g_chart === null) {
        setSliderVal(low, high);
    }

    // Chart option
    let options = {
        // アニメーション
        animation: false,
        // 凡例
        legend: {
            align: 'start',     // 左
            position: 'top',    // 上
        },
        // X軸、Y軸
        scales: {
            xAxes: [{
                id: 'x-axis-1',
                ticks: {
                    display: false,
                    min: x_range_min,
                    max: x_range_max
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                id: 'y-axis-1',
                ticks: {
                    display: false,
                    min: y_range_min,
                    max: y_range_max
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }]
        },
        // レイアウト（余白）
        layout: {
            padding: {
                left: 10,
                right: 60,
                top: 0,
                bottom: 20
            }
        },
        // グラフ画面の縦横比を維持しない（デフォルトは 横:縦 = 2:1）、つまりcanvasタグを囲むdiv styleを有効にする。
        maintainAspectRatio: false,
        // 四角線でグラフを囲む
        annotation: {
            annotations: [{
                type: 'box',
                scaleID: 'y-axis-1',
                xMin: x_range_min,
                xMax: x_range_max,
                yMin: y_range_min,
                yMax: y_range_max,
                borderColor: 'black',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
            }]
        }
    }
    // グラフを描画する領域
    let ctx = document.getElementById('mychart').getContext('2d');
    // グラフ描画
    g_chart = new Chart(ctx, {
        type: 'scatter',
        data: dataObj,
        options: options
    });
    // coodinate value text
    ctx.font = "15px Consolas";
    ctx.fillStyle = "black";
    ctx.fillText(Math.floor(x_range_min) + ',' + Math.floor(y_range_min), 0, 505);
    ctx.fillText(Math.floor(x_range_max) + ',' + Math.floor(y_range_max), 515, 60);
};

/**
 * スライダー値設定
 * @param {number} low - 小さい方のスライダーつまみ位置
 * @param {number} high - 大きい方のスライダーつまみ位置
 */
function setSliderVal(low, high) {
    // HTMLスライダー要素
    const range = document.getElementById('range');
    // スライダーのつまみ位置を設定
    range.valueLow = (100 / g_sliderMax) * low;
    range.valueHigh = (100 / g_sliderMax) * high;
}

// スライダー操作時のイベント
/**
 * スライダー操作時のイベント
 * @param {Object} event - イベントオブジェクト（ここでは未使用）
 */
const rangeOnChange = (event) => {
    // HTMLスライダー要素
    const range = document.getElementById('range');
    low = Math.floor((g_sliderMax / 100) * range.valueLow);
    high = Math.floor((g_sliderMax / 100) * range.valueHigh);
    // 保存値と変化があったら
    if (g_sliderLow !== low || g_sliderHigh !== high) {
        // スライダーの範囲を描画
        createGraph(low, high);
    }
    // // Debug
    // let currentLowValueElem = document.getElementById('low-value');
    // let currentHighValueElem = document.getElementById('high-value');
    // currentLowValueElem.innerText = low;
    // currentHighValueElem.innerText = high;
}