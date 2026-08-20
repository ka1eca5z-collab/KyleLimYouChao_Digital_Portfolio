(() => {
  "use strict";

  const DATA = [{"date":"2014-08-01","actual":22.922651,"predicted":21.590183,"previous":21.37957,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2014-09-01","actual":22.64336,"predicted":23.205934,"previous":22.922651,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2014-10-01","actual":24.272787,"predicted":23.056623,"previous":22.64336,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2014-11-01","actual":26.729284,"predicted":25.181312,"previous":24.272787,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2014-12-01","actual":24.915251,"predicted":27.692896,"previous":26.729284,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2015-01-01","actual":26.445662,"predicted":24.654077,"previous":24.915251,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2015-02-01","actual":28.996323,"predicted":26.943351,"previous":26.445662,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2015-03-01","actual":28.19751,"predicted":29.454508,"previous":28.996323,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2015-04-01","actual":28.360668,"predicted":28.391578,"previous":28.19751,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2015-05-01","actual":29.523195,"predicted":28.841501,"previous":28.360668,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2015-06-01","actual":28.54285,"predicted":30.114159,"previous":29.523195,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2015-07-01","actual":27.603027,"predicted":29.015945,"previous":28.54285,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2015-08-01","actual":25.659668,"predicted":28.346725,"previous":27.603027,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2015-09-01","actual":25.21348,"predicted":25.889524,"previous":25.659668,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2015-10-01","actual":27.316515,"predicted":25.637952,"previous":25.21348,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2015-11-01","actual":27.0422,"predicted":28.448716,"previous":27.316515,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2015-12-01","actual":24.164381,"predicted":27.47361,"previous":27.0422,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2016-01-01","actual":22.346197,"predicted":24.183586,"previous":24.164381,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2016-02-01","actual":22.196985,"predicted":22.906109,"previous":22.346197,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2016-03-01","actual":25.156441,"predicted":22.723568,"previous":22.196985,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2016-04-01","actual":21.636524,"predicted":26.381608,"previous":25.156441,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2016-05-01","actual":23.04911,"predicted":21.889881,"previous":21.636524,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2016-06-01","actual":22.200182,"predicted":24.342226,"previous":23.04911,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2016-07-01","actual":24.1996,"predicted":22.997989,"previous":22.200182,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2016-08-01","actual":24.638491,"predicted":25.286712,"previous":24.1996,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2016-09-01","actual":26.394629,"predicted":25.497346,"previous":24.638491,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2016-10-01","actual":26.509033,"predicted":27.775786,"previous":26.394629,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2016-11-01","actual":25.803936,"predicted":27.792641,"previous":26.509033,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2016-12-01","actual":27.180199,"predicted":26.471085,"previous":25.803936,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-01-01","actual":28.477959,"predicted":28.286679,"previous":27.180199,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-02-01","actual":32.148293,"predicted":29.50239,"previous":28.477959,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-03-01","actual":33.85976,"predicted":33.84699,"previous":32.148293,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-04-01","actual":33.857395,"predicted":34.198366,"previous":33.85976,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2017-05-01","actual":36.004562,"predicted":33.764984,"previous":33.857395,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2017-06-01","actual":34.084717,"predicted":36.247937,"previous":36.004562,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2017-07-01","actual":35.199409,"predicted":34.196833,"previous":34.084717,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-08-01","actual":38.813305,"predicted":36.304412,"previous":35.199409,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-09-01","actual":36.618286,"predicted":40.467201,"previous":38.813305,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2017-10-01","actual":40.163212,"predicted":36.874981,"previous":36.618286,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-11-01","actual":40.830856,"predicted":41.047143,"previous":40.163212,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2017-12-01","actual":40.352894,"predicted":41.02381,"previous":40.830856,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-01-01","actual":39.923695,"predicted":40.459952,"previous":40.352894,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-02-01","actual":42.472713,"predicted":40.781412,"previous":39.923695,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2018-03-01","actual":40.170265,"predicted":44.177129,"previous":42.472713,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-04-01","actual":39.566917,"predicted":41.161251,"previous":40.170265,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-05-01","actual":44.740833,"predicted":41.03208,"previous":39.566917,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2018-06-01","actual":44.490345,"predicted":46.562583,"previous":44.740833,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-07-01","actual":45.735336,"predicted":45.22011,"previous":44.490345,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2018-08-01","actual":54.709843,"predicted":46.980332,"previous":45.735336,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2018-09-01","actual":54.445866,"predicted":56.318256,"previous":54.709843,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-10-01","actual":52.786491,"predicted":54.691343,"previous":54.445866,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-11-01","actual":43.071426,"predicted":53.236371,"previous":52.786491,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2018-12-01","actual":38.177807,"predicted":41.981675,"previous":43.071426,"predDirection":"DOWN","actualDirection":"DOWN","correct":true},{"date":"2019-01-01","actual":40.283463,"predicted":37.686319,"previous":38.177807,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2019-02-01","actual":41.907486,"predicted":40.394791,"previous":40.283463,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2019-03-01","actual":46.170757,"predicted":41.152042,"previous":41.907486,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2019-04-01","actual":48.776443,"predicted":45.700736,"previous":46.170757,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2019-05-01","actual":42.553909,"predicted":48.884156,"previous":48.776443,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2019-06-01","actual":48.29327,"predicted":41.138688,"previous":42.553909,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2019-07-01","actual":51.982613,"predicted":49.751689,"previous":48.29327,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2019-08-01","actual":50.933399,"predicted":55.192737,"previous":51.982613,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2019-09-01","actual":54.85722,"predicted":53.63091,"previous":50.933399,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2019-10-01","actual":60.929054,"predicted":58.240093,"previous":54.85722,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2019-11-01","actual":65.45784,"predicted":62.661822,"previous":60.929054,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2019-12-01","actual":72.139946,"predicted":65.919246,"previous":65.45784,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2020-01-01","actual":76.036224,"predicted":72.585837,"previous":72.139946,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2020-02-01","actual":67.155373,"predicted":75.555131,"previous":76.036224,"predDirection":"DOWN","actualDirection":"DOWN","correct":true},{"date":"2020-03-01","actual":62.618782,"predicted":65.767969,"previous":67.155373,"predDirection":"DOWN","actualDirection":"DOWN","correct":true},{"date":"2020-04-01","actual":72.348083,"predicted":63.458718,"previous":62.618782,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2020-05-01","actual":78.292564,"predicted":74.254771,"previous":72.348083,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2020-06-01","actual":90.074974,"predicted":79.982096,"previous":78.292564,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2020-07-01","actual":104.949196,"predicted":91.353523,"previous":90.074974,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2020-08-01","actual":127.448196,"predicted":103.897201,"previous":104.949196,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2020-09-01","actual":114.587624,"predicted":125.901248,"previous":127.448196,"predDirection":"DOWN","actualDirection":"DOWN","correct":true},{"date":"2020-10-01","actual":107.710991,"predicted":108.024044,"previous":114.587624,"predDirection":"DOWN","actualDirection":"DOWN","correct":true},{"date":"2020-11-01","actual":117.793442,"predicted":104.726081,"previous":107.710991,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2020-12-01","actual":131.515976,"predicted":120.753636,"previous":117.793442,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2021-01-01","actual":130.792435,"predicted":137.0722,"previous":131.515976,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2021-02-01","actual":120.187103,"predicted":130.662561,"previous":130.792435,"predDirection":"DOWN","actualDirection":"DOWN","correct":true},{"date":"2021-03-01","actual":121.250137,"predicted":115.166996,"previous":120.187103,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2021-04-01","actual":130.491562,"predicted":119.283035,"previous":121.250137,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2021-05-01","actual":123.692017,"predicted":131.417368,"previous":130.491562,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2021-06-01","actual":136.181961,"predicted":122.89397,"previous":123.692017,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2021-07-01","actual":145.031387,"predicted":140.243663,"previous":136.181961,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2021-08-01","actual":150.967499,"predicted":151.088014,"previous":145.031387,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2021-09-01","actual":140.906982,"predicted":153.294485,"previous":150.967499,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2021-10-01","actual":149.172195,"predicted":139.524163,"previous":140.906982,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2021-11-01","actual":164.607239,"predicted":152.558923,"previous":149.172195,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2021-12-01","actual":177.083878,"predicted":173.04672,"previous":164.607239,"predDirection":"UP","actualDirection":"UP","correct":true},{"date":"2022-01-01","actual":174.301498,"predicted":183.207018,"previous":177.083878,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2022-02-01","actual":164.667953,"predicted":174.437328,"previous":174.301498,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2022-03-01","actual":174.353836,"predicted":163.189838,"previous":164.667953,"predDirection":"DOWN","actualDirection":"UP","correct":false},{"date":"2022-04-01","actual":157.418701,"predicted":179.599239,"previous":174.353836,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2022-05-01","actual":148.621628,"predicted":157.4287,"previous":157.418701,"predDirection":"UP","actualDirection":"DOWN","correct":false},{"date":"2022-06-01","actual":137.440002,"predicted":149.786427,"previous":148.621628,"predDirection":"UP","actualDirection":"DOWN","correct":false}];

  const root = document.getElementById("forecast-lab");
  if (!root) return;

  const canvas = document.getElementById("forecast-chart");
  const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
  const runBtn = document.getElementById("forecast-run");
  const stepBtn = document.getElementById("forecast-step");
  const resetBtn = document.getElementById("forecast-reset");
  const windowSelect = document.getElementById("forecast-window");
  const speedSelect = document.getElementById("forecast-speed");
  const status = document.getElementById("forecast-status");
  const monthEl = document.getElementById("forecast-month");
  const predEl = document.getElementById("forecast-pred");
  const actualEl = document.getElementById("forecast-actual");
  const directionEl = document.getElementById("forecast-direction");

  if (!canvas || !ctx || !runBtn || !stepBtn || !resetBtn || !windowSelect || !speedSelect) {
    if (status) status.textContent = "Interactive demo could not initialize.";
    return;
  }

  const all = DATA.map(row => ({
    ...row,
    date: new Date(row.date + "T00:00:00")
  }));

  let data = [];
  let index = -1;
  let running = false;
  let timer = null;

  const money = value => Number.isFinite(value) ? "$" + value.toFixed(2) : "—";
  const month = date => date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  function fitCanvas() {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(320, Math.round(rect.width || canvas.parentElement?.clientWidth || 800));
    const height = Math.max(260, Math.round(rect.height || 430));
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    draw();
  }

  function updateReadout(row) {
    if (!row) {
      monthEl.textContent = "—";
      predEl.textContent = "—";
      actualEl.textContent = "—";
      directionEl.textContent = "—";
      directionEl.className = "";
      return;
    }

    monthEl.textContent = month(row.date);
    predEl.textContent = money(row.predicted);
    actualEl.textContent = money(row.actual);
    directionEl.textContent =
      (row.correct ? "✓ " : "✕ ") +
      row.predDirection +
      " predicted / " +
      row.actualDirection +
      " actual";
    directionEl.className = row.correct ? "metric-good" : "metric-bad";
  }

  function resetData() {
    const requested = Number(windowSelect.value) || 48;
    data = all.slice(Math.max(0, all.length - requested));
    index = -1;
    running = false;
    clearTimeout(timer);
    runBtn.textContent = "▶ Run forecast";
    updateReadout(null);
    status.textContent =
      "Ready — " + data.length + " unseen months loaded. Press Run forecast or Step one month.";
    fitCanvas();
  }

  function drawPlaceholder(w, h) {
    ctx.save();
    ctx.fillStyle = "rgba(220,225,235,.62)";
    ctx.font = "14px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("Press Run forecast to replay the model", w / 2, h / 2 - 5);
    ctx.fillStyle = "rgba(220,225,235,.38)";
    ctx.font = "12px system-ui";
    ctx.fillText(data.length + " historical hold-out months ready", w / 2, h / 2 + 18);
    ctx.restore();
  }

  function draw() {
    const w = canvas.clientWidth || 800;
    const h = canvas.clientHeight || 430;
    ctx.clearRect(0, 0, w, h);

    if (!data.length) {
      drawPlaceholder(w, h);
      return;
    }

    const pad = { l: 58, r: 18, t: 24, b: 42 };
    const values = data.flatMap(d => [d.actual, d.predicted, d.previous]);
    let min = Math.min(...values);
    let max = Math.max(...values);
    const extra = (max - min) * 0.08 || 1;
    min -= extra;
    max += extra;

    const x = i => pad.l + (i / Math.max(1, data.length - 1)) * (w - pad.l - pad.r);
    const y = value => pad.t + ((max - value) / (max - min)) * (h - pad.t - pad.b);

    ctx.strokeStyle = "rgba(255,255,255,.08)";
    ctx.lineWidth = 1;
    ctx.font = "11px system-ui";
    ctx.fillStyle = "rgba(220,225,235,.62)";
    ctx.textAlign = "left";

    for (let j = 0; j < 5; j++) {
      const yy = pad.t + j * (h - pad.t - pad.b) / 4;
      ctx.beginPath();
      ctx.moveTo(pad.l, yy);
      ctx.lineTo(w - pad.r, yy);
      ctx.stroke();
      const value = max - j * (max - min) / 4;
      ctx.fillText("$" + value.toFixed(0), 7, yy + 4);
    }

    const tickCount = Math.min(5, data.length);
    for (let j = 0; j < tickCount; j++) {
      const i = Math.round(j * (data.length - 1) / Math.max(1, tickCount - 1));
      ctx.fillStyle = "rgba(220,225,235,.55)";
      ctx.fillText(String(data[i].date.getFullYear()), x(i) - 12, h - 14);
    }

    if (index < 0) {
      drawPlaceholder(w, h);
      return;
    }

    const upto = Math.min(index, data.length - 1);

    function drawLine(key, color, width) {
      ctx.beginPath();
      for (let i = 0; i <= upto; i++) {
        const xx = x(i);
        const yy = y(data[i][key]);
        if (i === 0) ctx.moveTo(xx, yy);
        else ctx.lineTo(xx, yy);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    }

    drawLine("previous", "rgba(200,205,215,.32)", 1.2);
    drawLine("predicted", css("--accent-2") || "#9ecbff", 2.7);
    drawLine("actual", "#f5f7fb", 2.1);

    const current = data[upto];
    const xx = x(upto);

    ctx.strokeStyle = "rgba(255,255,255,.22)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(xx, pad.t);
    ctx.lineTo(xx, h - pad.b);
    ctx.stroke();

    [
      [current.predicted, css("--accent-2") || "#9ecbff"],
      [current.actual, "#f5f7fb"]
    ].forEach(([value, color]) => {
      ctx.beginPath();
      ctx.arc(xx, y(value), 4.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });
  }

  function advance(auto = false) {
    if (!data.length) return;

    if (index >= data.length - 1) {
      running = false;
      clearTimeout(timer);
      runBtn.textContent = "↻ Replay";
      status.textContent = "Replay complete. Reset or change the replay window to run it again.";
      return;
    }

    index += 1;
    const row = data[index];
    updateReadout(row);
    status.textContent =
      month(row.date) +
      " · forecast " +
      money(row.predicted) +
      " → actual " +
      money(row.actual) +
      (row.correct ? " · direction correct." : " · direction missed.");
    draw();

    if (auto && running) {
      timer = setTimeout(() => advance(true), Number(speedSelect.value) || 500);
    }
  }

  runBtn.addEventListener("click", () => {
    if (running) {
      running = false;
      clearTimeout(timer);
      runBtn.textContent = "▶ Resume";
      status.textContent = "Paused at " + (index >= 0 ? month(data[index].date) : "the start") + ".";
      return;
    }

    if (index >= data.length - 1) {
      index = -1;
      updateReadout(null);
      draw();
    }

    running = true;
    runBtn.textContent = "Ⅱ Pause";
    advance(true);
  });

  stepBtn.addEventListener("click", () => {
    running = false;
    clearTimeout(timer);
    runBtn.textContent = "▶ Run forecast";
    advance(false);
  });

  resetBtn.addEventListener("click", resetData);
  windowSelect.addEventListener("change", resetData);

  if ("ResizeObserver" in window) {
    new ResizeObserver(() => requestAnimationFrame(fitCanvas)).observe(canvas.parentElement || canvas);
  }
  window.addEventListener("resize", () => requestAnimationFrame(fitCanvas));

  resetData();
  requestAnimationFrame(fitCanvas);
})();
