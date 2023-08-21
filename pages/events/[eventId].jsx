import { useRouter } from "next/router"
import {getEventById} from '../../dummy-data'
import { Fragment } from "react"
import EventSummary from  '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

function EventDeailPage()  { 
    const router = useRouter()

    const eventId = router.query.eventId
    const event = getEventById(eventId)
    console.log(event)
    
    if(!event) { 
        return <p>No Event Found!</p>
    }
return (
    <div> 
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date}  address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    </div>
)
}

export default EventDeailPage