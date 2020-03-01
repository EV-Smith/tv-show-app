export interface IDislayShowsData {
  show: {
    image: {
    medium: string,
    original: string
    },
    name: string,
    language: string,
    genres: [string],
    runtime: number,
    premiered: string,
    status: string,
    summary: string,
    schedule: {
      time: string,
      days: [string]
    },
  }
}
