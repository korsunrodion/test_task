import fetchMock from 'fetch-mock';

var data = [
  {"id":1,"login":"Ambrosi","email":"aredd0@ox.ac.uk","country":"Portugal","sex":"M","age":58},
  {"id":2,"login":"Diannne","email":"dsegeswoeth1@who.int","country":"United States","sex":"F","age":51},
  {"id":3,"login":"Winthrop","email":"wleber2@mit.edu","country":"Ireland","sex":"M","age":67},
  {"id":4,"login":"Nico","email":"nbrimilcombe3@hhs.gov","country":"Brazil","sex":"M","age":34},
  {"id":5,"login":"Brewer","email":"bsibbe4@fema.gov","country":"Russia","sex":"M","age":63},
  {"id":6,"login":"Kenn","email":"kdallon5@reverbnation.com","country":"Indonesia","sex":"M","age":32},
  {"id":7,"login":"Mercie","email":"mlord6@wordpress.org","country":"Guatemala","sex":"F","age":56},
  {"id":8,"login":"Pepito","email":"phazley7@businesswire.com","country":"China","sex":"M","age":43},
  {"id":9,"login":"Antonio","email":"ahathorn8@patch.com","country":"Indonesia","sex":"M","age":51},
  {"id":10,"login":"Bette","email":"bdengel9@pagesperso-orange.fr","country":"France","sex":"F","age":58},
  {"id":11,"login":"Boyd","email":"bgrowdena@naver.com","country":"Peru","sex":"M","age":64},
  {"id":12,"login":"Mamie","email":"mluddyb@meetup.com","country":"France","sex":"F","age":61},
  {"id":13,"login":"Darrin","email":"dpappic@globo.com","country":"Palestinian Territory","sex":"M","age":70},
  {"id":14,"login":"Skelly","email":"salgated@hubpages.com","country":"Philippines","sex":"M","age":46},
  {"id":15,"login":"Enos","email":"erotlaufe@simplemachines.org","country":"Indonesia","sex":"M","age":47},
  {"id":16,"login":"Legra","email":"lclowneyf@sakura.ne.jp","country":"Brazil","sex":"F","age":40},
  {"id":17,"login":"Pepe","email":"paleksandrevg@mit.edu","country":"Suriname","sex":"M","age":29},
  {"id":18,"login":"Janeczka","email":"jmatyushonokh@cdbaby.com","country":"Sierra Leone","sex":"F","age":38},
  {"id":19,"login":"Andre","email":"amadrelli@bandcamp.com","country":"France","sex":"M","age":41},
  {"id":20,"login":"Alysa","email":"ajevonsj@illinois.edu","country":"Peru","sex":"F","age":28},
  {"id":21,"login":"Tilda","email":"tizkoviczk@yellowpages.com","country":"Indonesia","sex":"F","age":57},
  {"id":22,"login":"Ganny","email":"gpeterffyl@about.me","country":"Russia","sex":"M","age":30},
  {"id":23,"login":"Nanine","email":"nfolbigm@reference.com","country":"Chad","sex":"F","age":25},
  {"id":24,"login":"Florian","email":"fabrashkovn@bloomberg.com","country":"Indonesia","sex":"M","age":30},
  {"id":25,"login":"Jonis","email":"jjonkeo@bizjournals.com","country":"Mongolia","sex":"F","age":65},
  {"id":26,"login":"Maryanne","email":"mtrounsonp@histats.com","country":"Dominican Republic","sex":"F","age":58},
  {"id":27,"login":"Doug","email":"ddobeyq@intel.com","country":"Portugal","sex":"M","age":38},
  {"id":28,"login":"Pandora","email":"pkleuerr@opera.com","country":"China","sex":"F","age":51},
  {"id":29,"login":"Gavan","email":"gframptons@shinystat.com","country":"Japan","sex":"M","age":34},
  {"id":30,"login":"Marley","email":"mmacallestert@arstechnica.com","country":"Philippines","sex":"F","age":62},
  {"id":31,"login":"Clemmy","email":"cambrosoniu@walmart.com","country":"Indonesia","sex":"M","age":61},
  {"id":32,"login":"Oralia","email":"ocornthwaitev@harvard.edu","country":"France","sex":"F","age":63},
  {"id":33,"login":"Bertie","email":"bpiersew@seattletimes.com","country":"Czech Republic","sex":"F","age":35},
  {"id":34,"login":"Dorothee","email":"dcaenx@bloomberg.com","country":"China","sex":"F","age":23},
  {"id":35,"login":"Coraline","email":"ckubisy@archive.org","country":"China","sex":"F","age":35},
  {"id":36,"login":"Rodolph","email":"rmenicombz@ovh.net","country":"Mexico","sex":"M","age":36},
  {"id":37,"login":"Tabbi","email":"tspyvye10@tripod.com","country":"Czech Republic","sex":"F","age":19},
  {"id":38,"login":"Rosaline","email":"rhurler11@pen.io","country":"Poland","sex":"F","age":24},
  {"id":39,"login":"Goldina","email":"gdunbobbin12@globo.com","country":"Thailand","sex":"F","age":44},
  {"id":40,"login":"Dorie","email":"dvannacci13@indiegogo.com","country":"Canada","sex":"M","age":23},
  {"id":41,"login":"Elaina","email":"eatton14@bloomberg.com","country":"Bulgaria","sex":"F","age":54},
  {"id":42,"login":"Giralda","email":"gkolyagin15@webs.com","country":"France","sex":"F","age":69},
  {"id":43,"login":"Bearnard","email":"blancetter16@cnn.com","country":"Philippines","sex":"M","age":43},
  {"id":44,"login":"Selia","email":"sgreason17@xing.com","country":"Colombia","sex":"F","age":29},
  {"id":45,"login":"Salmon","email":"sjannex18@github.io","country":"Indonesia","sex":"M","age":30},
  {"id":46,"login":"Yehudi","email":"ylesaunier19@si.edu","country":"Indonesia","sex":"M","age":25},
  {"id":47,"login":"Chip","email":"cchadbourn1a@economist.com","country":"Albania","sex":"M","age":20},
  {"id":48,"login":"Danny","email":"ddenyukin1b@ucla.edu","country":"Finland","sex":"F","age":27},
  {"id":49,"login":"Hayyim","email":"hfincher1c@yale.edu","country":"France","sex":"M","age":62},
  {"id":50,"login":"Michaeline","email":"mbratty1d@jiathis.com","country":"Greece","sex":"F","age":54}
]

var lastChangedUser = [data[5]]

function getIndexOfUser(userId) {
  return data.map(u => u.id).indexOf(userId)
}

function addUser(userData) {
  data.push(userData)
  lastChangedUser[0] = userData
  return true
}

function updateUser(userData) {
  const index = getIndexOfUser(userData.id)
  data[index] = userData
  lastChangedUser[0] = userData
  return true
}

function deleteUser(userData) {
  const index = getIndexOfUser(userData.id)
  data.splice(index, 1)
  lastChangedUser[0] = userData
  return true
}

export function configureFakeApi(realFetch) {
  fetchMock.get('http://myapi9999.com/users', data, {delay: 100});

  fetchMock.post((url, options) => {
    return url === 'http://myapi9999.com/updateUser' && updateUser(JSON.parse(options.body))
  }, lastChangedUser, {delay: 100});

  fetchMock.post((url, options) => {
    return url === 'http://myapi9999.com/addUser' && addUser(JSON.parse(options.body))
  }, lastChangedUser, {delay: 100});

  fetchMock.post((url, options) => {
    return url === 'http://myapi9999.com/deleteUser' && deleteUser(JSON.parse(options.body))
  }, lastChangedUser, {delay: 100});

  fetchMock.mock('*', (url, options) => realFetch(url, options))
}