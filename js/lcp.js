const lcptimingNode = document.getElementById("lcptiming");
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log("LCP candidate:", entry.startTime, entry);
    let timeinms = entry.startTime.toFixed(0);

    if (timeinms < 1) {
      return;
    }

    // save to session storage for the url, keep the last 50 values per url
    let url = window.location.href;

    let filename = url.substring(url.lastIndexOf("/") + 1);

    let lcpValues = sessionStorage.getItem(filename);
    if (lcpValues) {
      lcpValues = JSON.parse(lcpValues);
    } else {
      lcpValues = [];
    }
    lcpValues.push(timeinms);
    if (lcpValues.length > 50) {
      lcpValues.shift();
    }
    sessionStorage.setItem(filename, JSON.stringify(lcpValues));

    let avg = lcpValues.reduce((a, b) => parseInt(a) + parseInt(b), 0) / lcpValues.length;

    // update the text content of the element
    lcptimingNode.textContent = `${timeinms} ms (avg for this version = ${avg.toFixed(0)}ms, count = ${lcpValues.length})`;
  }
}).observe({ type: "largest-contentful-paint", buffered: true });
