import {getFeaturedEvents} from '../dummy-data'
import EventList from '../components/events/event-list'
import Layout from '../components/layout/layout'

const HomePage = () => { 
    const featuredEvents = getFeaturedEvents()
    // console.log(featuredEvents)
    return (
        <div> 
            <Layout/>
            <h1>HomEPAGE</h1>
            <EventList items={featuredEvents} />
        </div>
    )
}

export default HomePage