import Layout from "../../components/layout/layout"
import {getAllEvents} from '../../dummy-data'
import  EventList from  '../../components/events/event-list'
import EventsSearch from "../../components/events/event-seach"
import { useRouter } from "next/router"





function AllEventsPage() { 

    const events = getAllEvents()
    const router = useRouter()

    function  findEventsHandler(year, month) { 
        const fullPath = `/events/${year}/${month}/`
        router.push(fullPath)
    }

    return (
        <div> 
            <Layout/>
            <EventsSearch onSearch={findEventsHandler}/>
            <h1>All Events</h1>
            <EventList items={events}/>
        </div>
    )
}

export default AllEventsPage