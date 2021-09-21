/**
 * Parameters
 */
// グラフデータ
const g_jsonLineStrings = [[
    {"geometry":{"coordinates":[[116.3442415583208,40.42154052559348],[115.80823032993355,40.011702938572085],[117.33433662875217,40.34321794476925],[116.92541461682374,40.96089286267584],[115.84025798588347,39.89623642859556],[116.2340063307817,40.612698642524215]],"type":"LineString"},"type":"Feature","properties":{"oID":"37","timestamp":"2021-08-26 17:21:07"}},
    {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"32","timestamp":"2021-08-26 17:21:07"}},
    {"geometry":{"coordinates":[[116.74223311693677,40.62389377537028],[117.25221970767963,40.26345863305435],[117.55482824280018,40.992032225971705],[117.08726130407601,40.97082801027457],[117.42766434582946,40.93017596710179],[117.21328656310214,40.98749018716813],[116.18007089915969,39.898307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:07"}}
],[
    {"geometry":{"coordinates":[[116.4442415583208,40.52154052559348],[115.90823032993355,40.111702938572085],[117.43433662875217,40.44321794476925],[117.02541461682374,41.06089286267584],[115.94025798588347,39.99623642859556],[116.3340063307817,40.712698642524215]],"type":"LineString"},"type":"Feature","properties":{"oID":"37","timestamp":"2021-08-26 17:21:17"}},
    {"geometry":{"coordinates":[[116.65826538597951,41.14413229160535],[116.22298187683484,40.570342289453214],[115.63928649433679,40.83768353166994],[116.20249680825221,40.36322000406513],[117.56869244180762,40.99303901113735],[116.56909677319957,40.0704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"32","timestamp":"2021-08-26 17:21:17"}},
    {"geometry":{"coordinates":[[116.84223311693677,40.72389377537028],[117.35221970767963,40.36345863305435],[117.65482824280018,41.092032225971705],[117.18726130407601,41.07082801027457],[117.52766434582946,41.03017596710179],[117.31328656310214,41.08749018716813],[116.28007089915969,39.998307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:17"}}
],[
    {"geometry":{"coordinates":[[116.5442415583208,40.62154052559348],[116.00823032993355,40.211702938572085],[117.53433662875217,40.54321794476925],[117.12541461682374,41.16089286267584],[116.04025798588347,40.09623642859556],[116.4340063307817,40.812698642524215]],"type":"LineString"},"type":"Feature","properties":{"oID":"37","timestamp":"2021-08-26 17:21:27"}},
    {"geometry":{"coordinates":[[116.75826538597951,41.24413229160535],[116.32298187683484,40.670342289453214],[115.73928649433679,40.93768353166994],[116.30249680825221,40.46322000406513],[117.66869244180762,41.09303901113735],[116.66909677319957,40.1704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"32","timestamp":"2021-08-26 17:21:27"}},
    {"geometry":{"coordinates":[[116.94223311693677,40.82389377537028],[117.45221970767963,40.46345863305435],[117.75482824280018,41.192032225971705],[117.28726130407601,41.17082801027457],[117.62766434582946,41.13017596710179],[117.41328656310214,41.18749018716813],[116.38007089915969,40.098307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:27"}}
],[
    {"geometry":{"coordinates":[[116.6442415583208,40.72154052559348],[116.10823032993355,40.311702938572085],[117.63433662875217,40.64321794476925],[117.22541461682374,41.26089286267584],[116.14025798588347,40.19623642859556],[116.5340063307817,40.912698642524215]],"type":"LineString"},"type":"Feature","properties":{"oID":"37","timestamp":"2021-08-26 17:21:37"}},
    {"geometry":{"coordinates":[[116.85826538597951,41.34413229160535],[116.42298187683484,40.770342289453214],[115.83928649433679,41.03768353166994],[116.40249680825221,40.56322000406513],[117.76869244180762,41.19303901113735],[116.76909677319957,40.2704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"32","timestamp":"2021-08-26 17:21:37"}},
    {"geometry":{"coordinates":[[117.04223311693677,40.92389377537028],[117.55221970767963,40.56345863305435],[117.85482824280018,41.292032225971705],[117.38726130407601,41.27082801027457],[117.72766434582946,41.23017596710179],[117.51328656310214,41.28749018716813],[116.48007089915969,40.198307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:37"}}
]];
// const g_jsonLineStrings = [[
//     {"geometry":{"coordinates":[[116.3442415583208,40.42154052559348],[115.80823032993355,40.011702938572085],[117.33433662875217,40.34321794476925],[116.92541461682374,40.96089286267584],[115.84025798588347,39.89623642859556],[116.2340063307817,40.612698642524215]],"type":"LineString"},"type":"Feature","properties":{"oID":"37","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"32","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"20","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"21","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"22","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"23","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"24","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"25","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"26","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"27","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"28","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"29","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"30","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"50","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.74223311693677,40.62389377537028],[117.25221970767963,40.26345863305435],[117.55482824280018,40.992032225971705],[117.08726130407601,40.97082801027457],[117.42766434582946,40.93017596710179],[117.21328656310214,40.98749018716813],[116.18007089915969,39.898307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:07"}}
// ],[
//     {"geometry":{"coordinates":[[116.4442415583208,40.52154052559348],[115.90823032993355,40.111702938572085],[117.43433662875217,40.44321794476925],[117.02541461682374,41.06089286267584],[115.94025798588347,39.99623642859556],[116.3340063307817,40.712698642524215]],"type":"LineString"},"type":"Feature","properties":{"oID":"37","timestamp":"2021-08-26 17:21:17"}},
//     {"geometry":{"coordinates":[[116.65826538597951,41.14413229160535],[116.22298187683484,40.570342289453214],[115.63928649433679,40.83768353166994],[116.20249680825221,40.36322000406513],[117.56869244180762,40.99303901113735],[116.56909677319957,40.0704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"32","timestamp":"2021-08-26 17:21:17"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"20","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"21","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"22","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"23","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"24","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"25","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"26","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"27","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"28","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"29","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"30","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.55826538597951,41.04413229160535],[116.12298187683484,40.470342289453214],[115.53928649433679,40.73768353166994],[116.10249680825221,40.26322000406513],[117.46869244180762,40.89303901113735],[116.46909677319957,39.9704362471392]],"type":"LineString"},"type":"Feature","properties":{"oID":"50","timestamp":"2021-08-26 17:21:07"}},
//     {"geometry":{"coordinates":[[116.84223311693677,40.72389377537028],[117.35221970767963,40.36345863305435],[117.65482824280018,41.092032225971705],[117.18726130407601,41.07082801027457],[117.52766434582946,41.03017596710179],[117.31328656310214,41.08749018716813],[116.28007089915969,39.998307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:17"}}
// ]];
// const g_jsonLineStrings = [[
//     {"geometry":{"coordinates":[[116.74223311693677,40.62389377537028],[117.25221970767963,40.26345863305435],[117.55482824280018,40.992032225971705],[117.08726130407601,40.97082801027457],[117.42766434582946,40.93017596710179],[117.21328656310214,40.98749018716813],[116.18007089915969,39.898307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:07"}}
// ],[
//     {"geometry":{"coordinates":[[116.84223311693677,40.72389377537028],[117.35221970767963,40.36345863305435],[117.65482824280018,41.092032225971705],[117.18726130407601,41.07082801027457],[117.52766434582946,41.03017596710179],[117.31328656310214,41.08749018716813],[116.28007089915969,39.998307004678976]],"type":"LineString"},"type":"Feature","properties":{"oID":"11","timestamp":"2021-08-26 17:21:17"}}
// ]];
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
    // グラフ描画（パラメータ：表示位置のスライダーmin値、スライダーmax値）
	createGraph(0, 0);
}

/**
 * スライダーインデックス数の取得
 */
function countSliderMax() {
    // グラフデータの解析
    const stringfyLineStrings = JSON.stringify(g_jsonLineStrings);
    const arrObjLineStrings = JSON.parse(stringfyLineStrings);
    // GeoJSONデータ配列の数（TimeStampの数）がスライダーのインデックス数
    g_sliderMax = arrObjLineStrings.length - 1;
}

/**
 * 連想配列にタイムスタンプを追加する
 * @param {Object} obj 指定連想配列
 * @param {string} oId OID
 * @param {string} timestamp 追加するタイムスタンプ
 */
function setOidTimstampToObj(obj, oId, timestamp) {
    // 指定OIDが登録されていない
    if (obj[oId] === undefined) {
        obj[oId] = [];
    }
    obj[oId].push(timestamp);
}

/**
 * 各データにラベルを設定する。
 * ラベルに'None'を設定すると凡例を出力しないようになる。
 * @param {Object} datasets data.datasets
 * @param {Object} arrOidTimestamp OIDをキーとしてタイムスタンプ配列を格納した連想配列
 */
function setDatasetLabels(datasets, arrOidTimestamp) {
    let oidSet = new Set();
    datasets.forEach(dataset => {
        // 各オブジェクトにラベル（凡例用）設定
        for (oId in arrOidTimestamp) {
            // 同じOID
            if (dataset.label == 'oID:' + oId) {
                // そのOIDのラベルを設定していない
                if (!oidSet.has(oId)) {
                    dataset.label = 'oID:' + oId + ', ' 
                        + arrOidTimestamp[oId][0] + ' - ' + arrOidTimestamp[oId][arrOidTimestamp[oId].length - 1];
                    oidSet.add(oId);
                }
                // 一度ラベル設定済み
                else {
                    dataset.label = 'None';
                }
            }
        }
    });
}

/**
 * 
 * @param {string} oId OID
 * @param {Object} arrColorsOid g_colorsに対応した配列でそのOIDの色のインデックスにOIDが格納されている
 * @returns {numbert} 指定OIDが使うべきg_colorsのインデックス
 */
function getColorIndex(oId, arrColorsOid) {
    let registerMax = 0;
    // g_colors登録数分チェック
    for (let i = 0; i < g_colors.length; i++) {
        // まだその色は使われていない
        if (arrColorsOid[i] === undefined) {
            arrColorsOid[i] = [];
            arrColorsOid[i].push(oId);
            return i;
        }
        // その色は使われている
        else {
            // 登録されているか探す
            for (let j = 0; j < arrColorsOid[i].length; j++) {
                // 登録されていればその色を返す
                if (arrColorsOid[i][j] === oId) {
                    return i;
                }
            }
        }
        // 登録されている最大数
        if (registerMax < arrColorsOid[i].length) {
            registerMax = arrColorsOid[i].length;
        }
    }
    // 最も登録数が少ない色をテーブル先頭から探す
    for (let i = 0; i < Object.keys(arrColorsOid).length; i++) {
        // その色が最大登録済み数より少ない登録数
         if (registerMax > arrColorsOid[Number(Object.keys(arrColorsOid)[i])].length) {
            arrColorsOid[i].push(oId);
            return i;
        }
    }
    // すべて同じ登録数
    arrColorsOid[0].push(oId);
    return 0;
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
    const arrObjLineStrings = JSON.parse(stringfyLineStrings);
    
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
    dataObj.datasets = [];
    // OIDをキーとしてタイムスタンプの配列を格納する連想配列
    let arrOidTimestamp = new Object();
    // OIDを格納しているg_colorsに対応する配列（そのOIDがどの色か）
    let arrOidColors = new Object();
    let indexData = 0;
    // Chart のdataにグラフの値をセット
    for (let i = 0; i < arrObjLineStrings.length; i++) {
        if (low <= i && i <= high) {
            for (let j = 0; j < arrObjLineStrings[i].length; j++, indexData++) {
                // OIDとタイムスタンプを一旦保存
                setOidTimstampToObj(
                    arrOidTimestamp, arrObjLineStrings[i][j].properties.oID, arrObjLineStrings[i][j].properties.timestamp);
                dataObj.datasets[indexData] = new Object();
                let oId = arrObjLineStrings[i][j].properties.oID;
                dataObj.datasets[indexData].label = 'oID:' + oId;
                dataObj.datasets[indexData].data = [];
                // Coordinateを取得 
                for (let k = 0; k < arrObjLineStrings[i][j].geometry.coordinates.length; k++) {
                    x.push(arrObjLineStrings[i][j].geometry.coordinates[k][0]);
                    y.push(arrObjLineStrings[i][j].geometry.coordinates[k][1]);
                    let data = new Object();
                    data.x = arrObjLineStrings[i][j].geometry.coordinates[k][0];
                    data.y = arrObjLineStrings[i][j].geometry.coordinates[k][1];
                    dataObj.datasets[indexData].data.push(data);
                }
                // Geometryの各種表示用設定
                dataObj.datasets[indexData].borderColor = g_colors[getColorIndex(oId, arrOidColors)];
                dataObj.datasets[indexData].borderWidth = 2;
                dataObj.datasets[indexData].pointBackgroundColor = g_colors[getColorIndex(oId, arrOidColors)];
                dataObj.datasets[indexData].pointBorderColor = g_colors[getColorIndex(oId, arrOidColors)];
                dataObj.datasets[indexData].pointRadius = 1;
                dataObj.datasets[indexData].pointHoverRadius = 1;
                dataObj.datasets[indexData].fill = false;
                dataObj.datasets[indexData].tension = 0;
                dataObj.datasets[indexData].showLine = true;
            }
        }
    }
    // 各データに正式なラベルを設定
    setDatasetLabels(dataObj.datasets, arrOidTimestamp);

    // coordinate range
    x_range_min = Math.min(...x) - 0.2;
    x_range_max = Math.max(...x) + 0.2;
    y_range_min = Math.min(...y) - 0.2;
    y_range_max = Math.max(...y) + 0.1;
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
            labels:{
                filter: function(items, chartData) {
                  // labelが'None'の凡例を非表示
                  return items.text != 'None';
                }
            }
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
        responsive: true,
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
    // 凡例の数によって表示位置が変更することへの対応のための係数
    let adjustment = Object.keys(arrOidTimestamp).length * 21.7;
    // グラフ位置
    let ctxDivChart = document.getElementById('divmychart');
    ctxDivChart.style.height = 535 + adjustment + 'px';
    // スライダー位置
    let ctxDivRange = document.getElementById('divrange');
    ctxDivRange.style.top = 550 + adjustment + 'px';
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
    ctx.fillText(Math.floor(x_range_min) + ',' + Math.floor(y_range_min), 0, 520 + adjustment);  // 左下
    ctx.fillText(Math.floor(x_range_max) + ',' + Math.floor(y_range_max), 515, 20 + adjustment); // 右上
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