const injectPinterestScript = (tall, round) => {
  function addJS() {
    const s = document.createElement(`script`);
    s.type = `text/javascript`;
    s.setAttribute("async", "async");
    s.setAttribute("defer", "defer");
      s.setAttribute("data-pin-hover", "true");
    if(tall) {
      s.setAttribute("data-pin-tall", "true");
    }
    if(round) {
      s.setAttribute("data-pin-round", "true");
    }
    s.setAttribute("src", "https://assets.pinterest.com/js/pinit.js");
    document.getElementsByTagName(`head`)[0].appendChild(s);
  }
  addJS();
};

exports.onClientEntry = (args, pluginOptions) => {
  const {
    tall = true,
    round = false,
  } = pluginOptions;
  injectPinterestScript(tall, round);
};
