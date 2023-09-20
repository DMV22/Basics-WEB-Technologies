const axios = require("axios");
let service = {};

service.getByCountry = (country) => {
  return axios({
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "X-RapidAPI-Key": "dc38f560b0msh65c2586b0576093p19fdfejsn5ce497555d86",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
    params: {
      country: country,
    },
  });
};

module.exports = service;
