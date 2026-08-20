(() => {
  "use strict";

  const DATA = [{"date":"2008-01-01","price":4.1334},{"date":"2008-02-01","price":3.817654},{"date":"2008-03-01","price":4.381967},{"date":"2008-04-01","price":5.311799},{"date":"2008-05-01","price":5.763737},{"date":"2008-06-01","price":5.113008},{"date":"2008-07-01","price":4.853754},{"date":"2008-08-01","price":5.176828},{"date":"2008-09-01","price":3.470762},{"date":"2008-10-01","price":3.285406},{"date":"2008-11-01","price":2.829804},{"date":"2008-12-01","price":2.606277},{"date":"2009-01-01","price":2.752243},{"date":"2009-02-01","price":2.727202},{"date":"2009-03-01","price":3.209982},{"date":"2009-04-01","price":3.842389},{"date":"2009-05-01","price":4.147141},{"date":"2009-06-01","price":4.349293},{"date":"2009-07-01","price":4.989336},{"date":"2009-08-01","price":5.13652},{"date":"2009-09-01","price":5.659914},{"date":"2009-10-01","price":5.756103},{"date":"2009-11-01","price":6.104524},{"date":"2009-12-01","price":6.434926},{"date":"2010-01-01","price":5.864812},{"date":"2010-02-01","price":6.24835},{"date":"2010-03-01","price":7.176041},{"date":"2010-04-01","price":7.972741},{"date":"2010-05-01","price":7.844177},{"date":"2010-06-01","price":7.680809},{"date":"2010-07-01","price":7.855479},{"date":"2010-08-01","price":7.423386},{"date":"2010-09-01","price":8.664691},{"date":"2010-10-01","price":9.190831},{"date":"2010-11-01","price":9.501389},{"date":"2010-12-01","price":9.849806},{"date":"2011-01-01","price":10.361597},{"date":"2011-02-01","price":10.785746},{"date":"2011-03-01","price":10.642225},{"date":"2011-04-01","price":10.691693},{"date":"2011-05-01","price":10.621462},{"date":"2011-06-01","price":10.250135},{"date":"2011-07-01","price":11.923835},{"date":"2011-08-01","price":11.751308},{"date":"2011-09-01","price":11.644125},{"date":"2011-10-01","price":12.360504},{"date":"2011-11-01","price":11.670995},{"date":"2011-12-01","price":12.367226},{"date":"2012-01-01","price":13.939235},{"date":"2012-02-01","price":16.564137},{"date":"2012-03-01","price":18.308075},{"date":"2012-04-01","price":17.832621},{"date":"2012-05-01","price":17.641764},{"date":"2012-06-01","price":17.833231},{"date":"2012-07-01","price":18.650381},{"date":"2012-08-01","price":20.314009},{"date":"2012-09-01","price":20.458269},{"date":"2012-10-01","price":18.256948},{"date":"2012-11-01","price":17.949049},{"date":"2012-12-01","price":16.394844},{"date":"2013-01-01","price":14.032521},{"date":"2013-02-01","price":13.598446},{"date":"2013-03-01","price":13.71674},{"date":"2013-04-01","price":13.720457},{"date":"2013-05-01","price":13.935823},{"date":"2013-06-01","price":12.368638},{"date":"2013-07-01","price":14.115401},{"date":"2013-08-01","price":15.197459},{"date":"2013-09-01","price":14.969066},{"date":"2013-10-01","price":16.41181},{"date":"2013-11-01","price":17.459568},{"date":"2013-12-01","price":17.717827},{"date":"2014-01-01","price":15.809679},{"date":"2014-02-01","price":16.619425},{"date":"2014-03-01","price":17.0525},{"date":"2014-04-01","price":18.747456},{"date":"2014-05-01","price":20.110725},{"date":"2014-06-01","price":20.782461},{"date":"2014-07-01","price":21.37957},{"date":"2014-08-01","price":22.922651},{"date":"2014-09-01","price":22.64336},{"date":"2014-10-01","price":24.272787},{"date":"2014-11-01","price":26.729284},{"date":"2014-12-01","price":24.915251},{"date":"2015-01-01","price":26.445662},{"date":"2015-02-01","price":28.996323},{"date":"2015-03-01","price":28.19751},{"date":"2015-04-01","price":28.360668},{"date":"2015-05-01","price":29.523195},{"date":"2015-06-01","price":28.54285},{"date":"2015-07-01","price":27.603027},{"date":"2015-08-01","price":25.659668},{"date":"2015-09-01","price":25.21348},{"date":"2015-10-01","price":27.316515},{"date":"2015-11-01","price":27.0422},{"date":"2015-12-01","price":24.164381},{"date":"2016-01-01","price":22.346197},{"date":"2016-02-01","price":22.196985},{"date":"2016-03-01","price":25.156441},{"date":"2016-04-01","price":21.636524},{"date":"2016-05-01","price":23.04911},{"date":"2016-06-01","price":22.200182},{"date":"2016-07-01","price":24.1996},{"date":"2016-08-01","price":24.638491},{"date":"2016-09-01","price":26.394629},{"date":"2016-10-01","price":26.509033},{"date":"2016-11-01","price":25.803936},{"date":"2016-12-01","price":27.180199},{"date":"2017-01-01","price":28.477959},{"date":"2017-02-01","price":32.148293},{"date":"2017-03-01","price":33.85976},{"date":"2017-04-01","price":33.857395},{"date":"2017-05-01","price":36.004562},{"date":"2017-06-01","price":34.084717},{"date":"2017-07-01","price":35.199409},{"date":"2017-08-01","price":38.813305},{"date":"2017-09-01","price":36.618286},{"date":"2017-10-01","price":40.163212},{"date":"2017-11-01","price":40.830856},{"date":"2017-12-01","price":40.352894},{"date":"2018-01-01","price":39.923695},{"date":"2018-02-01","price":42.472713},{"date":"2018-03-01","price":40.170265},{"date":"2018-04-01","price":39.566917},{"date":"2018-05-01","price":44.740833},{"date":"2018-06-01","price":44.490345},{"date":"2018-07-01","price":45.735336},{"date":"2018-08-01","price":54.709843},{"date":"2018-09-01","price":54.445866},{"date":"2018-10-01","price":52.786491},{"date":"2018-11-01","price":43.071426},{"date":"2018-12-01","price":38.177807},{"date":"2019-01-01","price":40.283463},{"date":"2019-02-01","price":41.907486},{"date":"2019-03-01","price":46.170757},{"date":"2019-04-01","price":48.776443},{"date":"2019-05-01","price":42.553909},{"date":"2019-06-01","price":48.29327},{"date":"2019-07-01","price":51.982613},{"date":"2019-08-01","price":50.933399},{"date":"2019-09-01","price":54.85722},{"date":"2019-10-01","price":60.929054},{"date":"2019-11-01","price":65.45784},{"date":"2019-12-01","price":72.139946},{"date":"2020-01-01","price":76.036224},{"date":"2020-02-01","price":67.155373},{"date":"2020-03-01","price":62.618782},{"date":"2020-04-01","price":72.348083},{"date":"2020-05-01","price":78.292564},{"date":"2020-06-01","price":90.074974},{"date":"2020-07-01","price":104.949196},{"date":"2020-08-01","price":127.448196},{"date":"2020-09-01","price":114.587624},{"date":"2020-10-01","price":107.710991},{"date":"2020-11-01","price":117.793442},{"date":"2020-12-01","price":131.515976},{"date":"2021-01-01","price":130.792435},{"date":"2021-02-01","price":120.187103},{"date":"2021-03-01","price":121.250137},{"date":"2021-04-01","price":130.491562},{"date":"2021-05-01","price":123.692017},{"date":"2021-06-01","price":136.181961},{"date":"2021-07-01","price":145.031387},{"date":"2021-08-01","price":150.967499},{"date":"2021-09-01","price":140.906982},{"date":"2021-10-01","price":149.172195},{"date":"2021-11-01","price":164.607239},{"date":"2021-12-01","price":177.083878},{"date":"2022-01-01","price":174.301498},{"date":"2022-02-01","price":164.667953},{"date":"2022-03-01","price":174.353836},{"date":"2022-04-01","price":157.418701},{"date":"2022-05-01","price":148.621628},{"date":"2022-06-01","price":137.440002}];

  const root = document.getElementById("trade-lab");
  if (!root) return;

  const priceCanvas = document.getElementById("trade-chart");
  const equityCanvas = document.getElementById("equity-chart");
  const pctx = priceCanvas && priceCanvas.getContext ? priceCanvas.getContext("2d") : null;
  const ectx = equityCanvas && equityCanvas.getContext ? equityCanvas.getContext("2d") : null;

  const shortInput = document.getElementById("short-window");
  const longInput = document.getElementById("long-window");
  const shortVal = document.getElementById("short-window-value");
  const longVal = document.getElementById("long-window-value");
  const capitalSel = document.getElementById("trade-capital");
  const feeSel = document.getElementById("trade-fee");
  const runBtn = document.getElementById("trade-run");
  const stepBtn = document.getElementById("trade-step");
  const resetBtn = document.getElementById("trade-reset");
  const status = document.getElementById("trade-status");
  const dateEl = document.getElementById("trade-date");
  const actionEl = document.getElementById("trade-action");
  const eqEl = document.getElementById("trade-equity");
  const retEl = document.getElementById("trade-return");
  const benchEl = document.getElementById("trade-benchmark");
  const countEl = document.getElementById("trade-count");
  const ddEl = document.getElementById("trade-drawdown");

  if (!priceCanvas || !equityCanvas || !pctx || !ectx || !runBtn || !stepBtn || !resetBtn) {
    if (status) status.textContent = "Interactive backtester could not initialize.";
    return;
  }

  const raw = DATA.map(row => ({
    date: new Date(row.date + "T00:00:00"),
    price: row.price
  }));

  let rows = [];
  let idx = -1;
  let running = false;
  let timer = null;
  let state = null;

  const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const money = value => Number.isFinite(value)
    ? "$" + value.toLocaleString("en-US", { maximumFractionDigits: 0 })
    : "—";
  const pct = value => Number.isFinite(value)
    ? (value >= 0 ? "+" : "") + value.toFixed(1) + "%"
    : "—";
  const month = date => date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  function sma(data, i, windowSize) {
    if (i < windowSize - 1) return NaN;
    let total = 0;
    for (let j = i - windowSize + 1; j <= i; j++) total += data[j].price;
    return total / windowSize;
  }

  function fitCanvas(canvas, context, fallbackHeight) {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(320, Math.round(rect.width || canvas.parentElement?.clientWidth || 800));
    const height = Math.max(140, Math.round(rect.height || fallbackHeight));
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const pxWidth = Math.round(width * dpr);
    const pxHeight = Math.round(height * dpr);

    if (canvas.width !== pxWidth || canvas.height !== pxHeight) {
      canvas.width = pxWidth;
      canvas.height = pxHeight;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  function resize() {
    fitCanvas(priceCanvas, pctx, 430);
    fitCanvas(equityCanvas, ectx, 190);
    drawAll();
  }

  function configure() {
    let shortWindow = Number(shortInput.value);
    let longWindow = Number(longInput.value);

    if (shortWindow >= longWindow) {
      longWindow = Math.min(24, shortWindow + 2);
      longInput.value = String(longWindow);
    }

    shortVal.textContent = String(shortWindow);
    longVal.textContent = String(longWindow);

    rows = raw.map((row, i) => ({
      ...row,
      short: sma(raw, i, shortWindow),
      long: sma(raw, i, longWindow)
    }));

    idx = -1;
    running = false;
    clearTimeout(timer);

    const capital = Number(capitalSel.value);
    state = {
      cash: capital,
      shares: 0,
      capital,
      fee: Number(feeSel.value),
      trades: [],
      equity: [],
      benchmark: [],
      peak: capital,
      maxDD: 0,
      prevAbove: null
    };

    runBtn.textContent = "▶ Run backtest";
    updateUI(null, "—");
    status.textContent =
      "Ready — " + rows.length + " monthly AAPL observations loaded. Press Run backtest or Step one month.";
    resize();
  }

  function updateUI(row, action) {
    dateEl.textContent = row ? month(row.date) : "—";
    actionEl.textContent = action;
    actionEl.className =
      action === "BUY" ? "metric-good" :
      action === "SELL" ? "metric-bad" : "";

    const equity = state && state.equity.length
      ? state.equity[state.equity.length - 1]
      : state?.capital;

    const benchmark = state && state.benchmark.length
      ? state.benchmark[state.benchmark.length - 1]
      : state?.capital;

    eqEl.textContent = money(equity);
    retEl.textContent = state && Number.isFinite(equity)
      ? pct((equity / state.capital - 1) * 100)
      : "—";
    benchEl.textContent = money(benchmark);
    countEl.textContent = state ? String(state.trades.length) : "0";
    ddEl.textContent = state ? "Max drawdown " + pct(state.maxDD * 100) : "Max drawdown —";
  }

  function step(auto = false) {
    if (idx >= rows.length - 1) {
      running = false;
      clearTimeout(timer);
      runBtn.textContent = "↻ Replay";
      status.textContent = "Backtest complete. Change a parameter or reset to run it again.";
      return;
    }

    idx += 1;
    const row = rows[idx];
    let action = "HOLD";

    const above =
      Number.isFinite(row.short) && Number.isFinite(row.long)
        ? row.short > row.long
        : null;

    if (above !== null && state.prevAbove !== null) {
      if (above && !state.prevAbove && state.shares === 0) {
        state.shares = (state.cash * (1 - state.fee)) / row.price;
        state.cash = 0;
        action = "BUY";
        state.trades.push({ i: idx, type: "BUY", price: row.price });
      } else if (!above && state.prevAbove && state.shares > 0) {
        state.cash = state.shares * row.price * (1 - state.fee);
        state.shares = 0;
        action = "SELL";
        state.trades.push({ i: idx, type: "SELL", price: row.price });
      }
    }

    if (above !== null) state.prevAbove = above;

    const equity = state.cash + state.shares * row.price;
    state.equity.push(equity);
    state.peak = Math.max(state.peak, equity);
    state.maxDD = Math.min(state.maxDD, equity / state.peak - 1);

    const firstPrice = rows[0].price;
    state.benchmark.push(state.capital * (row.price / firstPrice));

    updateUI(row, action);

    status.textContent =
      month(row.date) +
      " · " +
      action +
      " · AAPL $" +
      row.price.toFixed(2) +
      (Number.isFinite(row.short)
        ? " · SMA " + shortInput.value + " " + row.short.toFixed(2) +
          " / " + longInput.value + " " + row.long.toFixed(2)
        : " · warming up moving averages");

    drawAll();

    if (auto && running) timer = setTimeout(() => step(true), 120);
  }

  function drawPlaceholder(context, canvas, text) {
    const w = canvas.clientWidth || 800;
    const h = canvas.clientHeight || 430;
    context.save();
    context.fillStyle = "rgba(220,225,235,.62)";
    context.font = "14px system-ui";
    context.textAlign = "center";
    context.fillText(text, w / 2, h / 2 - 4);
    context.fillStyle = "rgba(220,225,235,.38)";
    context.font = "12px system-ui";
    context.fillText(rows.length + " historical months ready", w / 2, h / 2 + 18);
    context.restore();
  }

  function drawPrice() {
    const canvas = priceCanvas;
    const context = pctx;
    const w = canvas.clientWidth || 800;
    const h = canvas.clientHeight || 430;
    context.clearRect(0, 0, w, h);

    if (!rows.length) {
      drawPlaceholder(context, canvas, "Loading strategy data…");
      return;
    }

    const values = rows.flatMap(r => [r.price, r.short, r.long]).filter(Number.isFinite);
    let min = Math.min(...values);
    let max = Math.max(...values);
    const extra = (max - min) * 0.08 || 1;
    min -= extra;
    max += extra;

    const pad = { l: 52, r: 16, t: 20, b: 34 };
    const x = i => pad.l + (i / Math.max(1, rows.length - 1)) * (w - pad.l - pad.r);
    const y = value => pad.t + ((max - value) / (max - min)) * (h - pad.t - pad.b);

    context.strokeStyle = "rgba(255,255,255,.07)";
    context.lineWidth = 1;
    context.font = "10px system-ui";
    context.fillStyle = "rgba(220,225,235,.55)";
    context.textAlign = "left";

    for (let j = 0; j < 5; j++) {
      const yy = pad.t + j * (h - pad.t - pad.b) / 4;
      context.beginPath();
      context.moveTo(pad.l, yy);
      context.lineTo(w - pad.r, yy);
      context.stroke();
      context.fillText("$" + (max - j * (max - min) / 4).toFixed(0), 6, yy + 3);
    }

    for (let j = 0; j < 5; j++) {
      const i = Math.round(j * (rows.length - 1) / 4);
      context.fillText(String(rows[i].date.getFullYear()), x(i) - 11, h - 10);
    }

    if (idx < 0) {
      drawPlaceholder(context, canvas, "Press Run backtest to animate the strategy");
      return;
    }

    const upto = Math.min(idx, rows.length - 1);

    function line(key, color, width) {
      context.beginPath();
      let started = false;

      for (let i = 0; i <= upto; i++) {
        const value = rows[i][key];
        if (!Number.isFinite(value)) continue;

        const xx = x(i);
        const yy = y(value);

        if (!started) {
          context.moveTo(xx, yy);
          started = true;
        } else {
          context.lineTo(xx, yy);
        }
      }

      if (started) {
        context.strokeStyle = color;
        context.lineWidth = width;
        context.stroke();
      }
    }

    line("price", "#f5f7fb", 2.0);
    line("short", css("--accent-2") || "#9ecbff", 1.8);
    line("long", "#f0b46f", 1.8);

    state.trades.forEach(trade => {
      if (trade.i > upto) return;
      const xx = x(trade.i);
      const yy = y(rows[trade.i].price);

      context.beginPath();
      context.arc(xx, yy, 5, 0, Math.PI * 2);
      context.fillStyle = trade.type === "BUY" ? "#74d8a3" : "#ff8d8d";
      context.fill();
      context.strokeStyle = "#0b0c0f";
      context.lineWidth = 2;
      context.stroke();
    });

    const xx = x(upto);
    context.strokeStyle = "rgba(255,255,255,.22)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(xx, pad.t);
    context.lineTo(xx, h - pad.b);
    context.stroke();
  }

  function drawEquity() {
    const canvas = equityCanvas;
    const context = ectx;
    const w = canvas.clientWidth || 800;
    const h = canvas.clientHeight || 190;
    context.clearRect(0, 0, w, h);

    if (!state || !state.equity.length) {
      drawPlaceholder(context, canvas, "Portfolio equity appears as the backtest runs");
      return;
    }

    const values = [...state.equity, ...state.benchmark];
    let min = Math.min(...values);
    let max = Math.max(...values);
    const extra = (max - min) * 0.08 || Math.max(1, max * 0.02);
    min -= extra;
    max += extra;

    const pad = { l: 52, r: 16, t: 16, b: 24 };
    const x = i => pad.l + (i / Math.max(1, rows.length - 1)) * (w - pad.l - pad.r);
    const y = value => pad.t + ((max - value) / (max - min)) * (h - pad.t - pad.b);

    context.strokeStyle = "rgba(255,255,255,.07)";
    context.lineWidth = 1;

    for (let j = 0; j < 4; j++) {
      const yy = pad.t + j * (h - pad.t - pad.b) / 3;
      context.beginPath();
      context.moveTo(pad.l, yy);
      context.lineTo(w - pad.r, yy);
      context.stroke();
    }

    function line(values, color, width) {
      context.beginPath();
      values.forEach((value, i) => {
        const xx = x(i);
        const yy = y(value);
        if (i === 0) context.moveTo(xx, yy);
        else context.lineTo(xx, yy);
      });
      context.strokeStyle = color;
      context.lineWidth = width;
      context.stroke();
    }

    line(state.benchmark, "rgba(245,247,251,.38)", 1.5);
    line(state.equity, css("--accent-2") || "#9ecbff", 2.5);
  }

  function drawAll() {
    drawPrice();
    drawEquity();
  }

  [shortInput, longInput, capitalSel, feeSel].forEach(element => {
    element.addEventListener("input", configure);
    element.addEventListener("change", configure);
  });

  runBtn.addEventListener("click", () => {
    if (running) {
      running = false;
      clearTimeout(timer);
      runBtn.textContent = "▶ Resume";
      status.textContent = "Paused at " + (idx >= 0 ? month(rows[idx].date) : "the start") + ".";
      return;
    }

    if (idx >= rows.length - 1) configure();

    running = true;
    runBtn.textContent = "Ⅱ Pause";
    step(true);
  });

  stepBtn.addEventListener("click", () => {
    running = false;
    clearTimeout(timer);
    runBtn.textContent = "▶ Run backtest";
    step(false);
  });

  resetBtn.addEventListener("click", configure);

  if ("ResizeObserver" in window) {
    new ResizeObserver(() => requestAnimationFrame(resize)).observe(root);
  }
  window.addEventListener("resize", () => requestAnimationFrame(resize));

  configure();
  requestAnimationFrame(resize);
})();
