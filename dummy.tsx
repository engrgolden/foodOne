let trends = Array.from(document.querySelectorAll('[data-testid="trend"]')).map(
  (x) => x.innerText.split("\n")[1]
);

Array.from(document.querySelectorAll('[data-testid="cellInnerDiv"]')).map(
  (tweet) => {
    let count = 0;
    trends.map((trend) => {
      if (tweet.textContent.toLowerCase().includes(trend.toLowerCase())) {
        count++;
      }
    });

    if (count >= 10) {
      console.log(tweet);
      tweet.remove();
    }
  }
);
