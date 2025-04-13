class AviasalesService {
  baseUrl = 'https://aviasales-test-api.kata.academy'
  searchId = null
  url = `${this.baseUrl}/tickets?searchId=${this.searchId}`

  async getSearchId() {
    const url = `${this.baseUrl}/search`
    return await fetch(url)
      .then(res => res.json())
      .then(data => data.searchId)
  }

  async getTickets() {
    let res
    if (!this.searchId) {
      this.searchId = await this.getSearchId()
      res = await fetch(`${this.baseUrl}/tickets?searchId=${this.searchId}`, {})
    }
    const data = await res.json()
    console.log(data.tickets)
    return data.tickets
  }
}

export const aviasalesService = new AviasalesService()
