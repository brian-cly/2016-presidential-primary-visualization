window.pollsterPoll = function(incoming_data) {
  var $candidate, candidateHeight, i, value;
  i = 0;
  while (i < incoming_data[0].estimates.length) {
    $candidate = $('.' + incoming_data[0].estimates[i].choice.toLowerCase());
    value = incoming_data[0].estimates[i].value;
    candidateHeight = value * 10;
    $candidate.css('height', candidateHeight);
    i++;
  }
};

$(document).ready(function() {
  $.ajax({
    url: 'https://elections.huffingtonpost.com/pollster/api/charts.json?callback=pollsterPoll&state=US&topic=2016-president-gop-primary',
    dataType: 'script',
    type: 'GET',
    cache: true
  });
  $.ajax({
    url: 'https://elections.huffingtonpost.com/pollster/api/charts.json?callback=pollsterPoll&state=US&topic=2016-president-dem-primary',
    dataType: 'script',
    type: 'GET',
    cache: true
  });
});