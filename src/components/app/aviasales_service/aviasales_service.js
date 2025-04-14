class AviasalesService {
  baseUrl = 'https://aviasales-test-api.kata.academy'
  searchId = null

  async getSearchId() {
    const url = `${this.baseUrl}/search`
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      return data.searchId
    } catch (error) {
      throw error
    }
  }

  async getTickets() {
    try {
      if (!this.searchId) {
        this.searchId = await this.getSearchId()
      }

      const url = `${this.baseUrl}/tickets?searchId=${this.searchId}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      throw error
    }
  }
}

export const aviasalesService = new AviasalesService()
