function findMatching(drivers, person) {
    function nameMatch(item) {
      if (item.toUpperCase() === person.toUpperCase()) {
        return item
      }
    }
   let result = drivers.filter(nameMatch)
   return result;
}

function fuzzyMatch(drivers, person) {
    function nameMatch(item) {
        if (person === item.substring(0,person.length)) {
            return item
        }
    }
    let result = drivers.filter(nameMatch)
    return result;
}

function matchName(drivers, person) {
    function nameMatch(item) {
        if (item.name === person) {
            return item
        }
    }
    let foundName = drivers.filter(nameMatch)
        return foundName
}