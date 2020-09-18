export function sortTvShow(a, b) {
    
    const ratingA = a.rating.average
    const ratingB = b.rating.average
  
    let comparison = 0
    if (ratingA < ratingB) {
      comparison = 1
    } else if (ratingA > ratingB) {
      comparison = -1
    }
    return comparison
  }