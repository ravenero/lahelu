export const numberFormat = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'; // Billions
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; // Millions
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; // Thousands
  }
  return num.toString(); // Less than 1000
};

export const timeAgo = (date: string): string => {
  const now = new Date();
  const dateTime = new Date(date);
  const seconds = Math.floor((now.getTime() - dateTime.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000); // 1 year
  if (interval >= 1) return interval === 1 ? `${interval} year ago` : `${interval} years ago`;

  interval = Math.floor(seconds / 2592000); // 1 month
  if (interval >= 1) return interval === 1 ? `${interval} month ago` : `${interval} months ago`;

  interval = Math.floor(seconds / 86400); // 1 day
  if (interval >= 1) return interval === 1 ? `${interval} day ago` : `${interval} days ago`;

  interval = Math.floor(seconds / 3600); // 1 hour
  if (interval >= 1) return interval === 1 ? `${interval} hour ago` : `${interval} hours ago`;

  interval = Math.floor(seconds / 60); // 1 minute
  if (interval >= 1) return interval === 1 ? `${interval} minute ago` : `${interval} minutes ago`;

  return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`;
};

export const noop = () => { };