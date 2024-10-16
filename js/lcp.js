const lcptimingNode = document.getElementById("lcptiming");
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log("LCP candidate:", entry.startTime, entry);
    let timeinms = entry.startTime.toFixed(0);

    // save to session storage for the url, keep the last 50 values per url
    let url = window.location.href;

    let filename = url.substring(url.lastIndexOf('/') + 1);

    let lcpValues = sessionStorage.getItem(filename);
    if (lcpValues) {
      lcpValues = JSON.parse(lcpValues);
    } else {
      lcpValues = [];
    }
    lcpValues.push(timeinms);
    if (lcpValues.length > 5) {
      lcpValues.shift();
    }
    sessionStorage.setItem(filename, JSON.stringify(lcpValues));

    console.log(lcpValues);

    // update the text content of the element
    lcptimingNode.textContent = `${timeinms} ms (avg for this version = ${lcpValues.reduce((a, b) => parseInt(a) + parseInt(b), 0) / lcpValues.length} ms)`;
  }
}).observe({ type: "largest-contentful-paint", buffered: true });
