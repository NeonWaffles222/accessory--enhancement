const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res) {
  axios.post("https://na-trade.naeu.playblackdesert.com/Trademarket/GetWorldMarketWaitList ", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "User-Agent": "BlackDesert"
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.error(err));
});

module.exports = router;