const fetchTypesAPI = () => {
  let url = "http://localhost:4000/types";

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(respond => resolve(respond))
      .catch(error => reject(error))

  })
};

export default fetchTypesAPI;
