export const dateFormat = (dateString)=> {
    const currentDate = new Date();
    const providedDate = new Date(dateString);
    const timeDifference = currentDate - providedDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30);
  
    if (monthsDifference >= 1) {
        return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else if (daysDifference >= 2) {
        return `${daysDifference} days ago`;
    } else if (daysDifference === 1) {
        return 'one day ago';
    } else if (hoursDifference >= 2) {
        return `${hoursDifference} hours ago`;
    } else if (hoursDifference === 1) {
        return 'an hour ago';
    } else if (minutesDifference >= 2) {
        return `${minutesDifference} minutes ago`;
    } else if (minutesDifference === 1) {
        return 'a minute ago';
    } else {
        return 'just now';
    }
  }