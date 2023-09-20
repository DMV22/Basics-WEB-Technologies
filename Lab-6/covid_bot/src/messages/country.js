const countryEmoji = require("country-emoji");

module.exports = (data) => {
  return `
*Statistics COVID-19*
  - _Continent:_ *${data.continent}*
  - _Country:_ *${data.country}* ${countryEmoji.flag(data.country) || ""}
  - _Active:_ *${data.cases.active}*
  - _Recovered:_ *${data.cases.recovered}*
  - _Deaths:_ *${data.deaths.total}*

*General statistics:*
  - _Total:_ *${data.cases.total}*
  `;
};
