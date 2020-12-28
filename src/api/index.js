const fetchTypesAPI = () => {
  let url = "https://enigmatic-savannah-13455.herokuapp.com/types";

  // return new Promise((resolve, reject) => {
  //   fetch(url)
  //     .then(respond => resolve(respond))
  //     .catch(error => reject(error))
  // })
  return fetch(url)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

const fetchProducts = ({
  valueTitle,
  valueType,
  valueByType,
  valueBrand,
  valueRating,
  valuePriceStart,
  valuePriceEnd,
  valueSearch,
  sort,
}) => {
  let url = `https://enigmatic-savannah-13455.herokuapp.com/products?`;

  if (valueTitle) {
    url += `&title=${valueTitle}`;
  }

  if (valueType) {
    url += `&type=${valueType}`;
  }

  if (valueByType.length > 0) {
    for (let i = 0; i < valueByType.length; i++) {
      url += `&byType=${valueByType[i]}`;
    }
  }

  if (valueBrand.length > 0) {
    for (let i = 0; i < valueBrand.length; i++) {
      url += `&brand=${valueBrand[i]}`;
    }
  }

  if (valueRating) {
    if (valueRating !== 4) {
      for (let i = valueRating; i <= 4; i++) {
        url += `&ratings=${i}`;
      }
    }
    url += `&ratings=${valueRating}`;
  }

  if (valuePriceStart) {
    url += `&price_gte=${valuePriceStart}`;
  }

  if (valuePriceEnd) {
    url += `&price_lte=${valuePriceEnd}`;
  }

  if (sort) {
    url += `&_sort=price&_order=${sort}`;
  }

  if (valueSearch) {
    url += `&q=${valueSearch}`;
  }

    // return fetch(url)
    //   .then(respond => respond.json())
    //   .then((result) => {
    //     return result;
    //   });
  return fetch(url)
  .then((res) => res.json())
  .then((result) => {
    return result;
  });
}

export {fetchTypesAPI, fetchProducts};
