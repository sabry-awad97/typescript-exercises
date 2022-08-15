const enum Duration {
  JUST_NOW = 'just now',
  MINUTE_AGO = '1 minute ago',
  MINUTES_AGO = ' minutes ago',
  HOUR_AGO = '1 hour ago',
  HOURS_AGO = ' hours ago',
  YESTERDAY = 'Yesterday',
  DAYS_AGO = ' days ago',
  WEEKS_AGO = ' weeks ago',
}

export class PrettyDate extends Date {
  get ago(): string {
    const differenceInSeconds = (new Date().getTime() - this.getTime()) / 1000;

    const dayInSeconds = 24 * 60 * 60;

    const differenceInDays = Math.floor(differenceInSeconds / dayInSeconds);

    if (differenceInDays === 0) {
      if (differenceInSeconds < 60) return Duration.JUST_NOW;

      if (differenceInSeconds < 120) return Duration.MINUTE_AGO;

      if (differenceInSeconds < 3600)
        return Math.floor(differenceInSeconds / 60) + Duration.MINUTES_AGO;

      if (differenceInSeconds < 7200) return Duration.HOUR_AGO;

      if (differenceInSeconds < 86400)
        return Math.floor(differenceInSeconds / 3600) + Duration.HOURS_AGO;
    }

    if (differenceInDays === 1) return Duration.YESTERDAY;

    if (differenceInDays < 7) return differenceInDays + Duration.DAYS_AGO;

    return Math.ceil(differenceInDays / 7) + Duration.WEEKS_AGO;
  }
}

const date = new PrettyDate(1997, 4, 1);
console.log(date.ago);
