import { useRouter } from "next/router"
import Layout from '../../components/layout/layout'
import SearchEvent from '../../components/events/event-seach'
import {getFilteredEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'

import ResultTitle from '../../components/event-detail/results-title'

function FilteredEventPage() { 

    const router = useRouter()
    const filterData = router.query.slug
    
    if(!filterData) { 
        return (
            <p>Loading...   </p>
            )
        }
    const filteredYear = filterData[0]
    const filterdMonth = filterData[1]

    const numYear  = +filteredYear
    const numMonth = +filterdMonth
    
    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear <2021 || numMonth < 1 || numMonth > 12) { 
        return <p>invalid filter pleaseadjust yor value</p>
    }

    const filtredEvents = getFilteredEvents({
        year: numYear, 
        month: numMonth, 
    })
    if(!filtredEvents || filtredEvents.length === 0 ) { 
        return <p className='center'> No event found!!</p>
    }
    const date = new Date(numYear, numMonth) -1
    return (
        
        <div> 
            <Layout/>
            <ResultTitle date={date}/>
            <h1>Filtered Events</h1>
            <EventList items={filtredEvents} />
        </div>
    )
}

export default FilteredEventPage