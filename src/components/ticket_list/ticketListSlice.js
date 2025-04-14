import { createAppSlice } from '../app/createAppSlice.js'
import { aviasalesService } from '../app/aviasales_service/aviasales_service.js'

const initialState = {
  tickets: [],
  loading: true,
  error: null,
}

const ticketListSlice = createAppSlice({
  name: 'ticketList',
  initialState,
  reducers: (create) => ({
    fetchTickets: create.asyncThunk(
      async () => {
        let data = null
        try{
          data = await aviasalesService.getTickets()
        } catch (err) {
          console.log(err)
        }
        return data
      },
      {
        pending: (state) => {
          state.loading = true
        },
        fulfilled: (state, action) => {
          const data = action.payload
          console.log(data)
          if (!data) {
            console.log('Данные не пришли')
          } else {
            state.tickets = [...state.tickets, ...data.tickets]
            state.loading = !data.stop
          }
        },
        rejected: (state, action) => {
          state.error = action.error
        },
      }
    ),
  }),
  selectors: {
    selectTickets: (state) => state.tickets,
    selectIsAllTickets: (state) => state.allTickets,
    selectIsLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
})

export default ticketListSlice
export const { fetchTickets } = ticketListSlice.actions
export const { selectTickets, selectIsAllTickets, selectIsLoading, selectError } = ticketListSlice.selectors
