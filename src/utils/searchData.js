import data from '../data/clusters'

export default function searchData(query) {
  let lowercaseData = data.map(item => {
			return ({ id: item.id, name: item.name.toLowerCase() })
  });
  let queryResults = [];
  let emptyArray = [];

  for (let i = 0; i < lowercaseData.length; i++) {
   if (lowercaseData[i].name.indexOf(query.toLowerCase()) !== -1 || lowercaseData[i].id.indexOf(query.toLowerCase()) !== -1) {
    queryResults.push(data[i]);
   }
  }

  //Return empty array if there is 
  //no query
  if (!query) {
   queryResults = emptyArray;
  }

  return queryResults;
}