const monthMap = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export class DateFormatter {
  public static formatDate(dateStr: string): string {
    if (dateStr === undefined) {
      return ""
    } else {
      const d = new Date(dateStr)
      const year = d.getFullYear()
      const month = monthMap[d.getMonth()]
      const day = d.getDay()

      return `${day < 10 ? "0" : ""}${day} ${month} ${year}`
    }
  }
}
