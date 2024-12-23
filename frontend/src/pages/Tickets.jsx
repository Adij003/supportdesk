import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTickets, reset} from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import Backbutton from '../components/BackButton'
import TicketItem from '../components/TicketItem'

function Tickets() {
    const {tickets, isLoading, isSuccess} = useSelector((state) => state.tickets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])
    useEffect(() => {
        return () => {
            if(isSuccess){
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    if(isLoading){
        return <Spinner/>
    }

  return (
    <>
    <Backbutton url='/'/>
        <h1>Tickets</h1>
        <div className="tickets">
            <div className="ticket-headings">
                <div>Data</div>
                <div>Product</div>
                <div>Status</div>
                <div></div>
            </div>
            {
                tickets.map((ticket) => (
                    <TicketItem key={ticket._id} ticket={ticket} />
                ))
            }
        </div>
    </>
  )
}

export default Tickets 