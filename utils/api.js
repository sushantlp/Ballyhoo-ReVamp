import getQueryString from "./paramParser";


const host = "https://ballyhoo.today/";

export default {
  cityLocalityApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v4/web/city/locality")
        .then(response => {
          response
            .json()
            .then(cityLocality => resolve(cityLocality))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },
};
