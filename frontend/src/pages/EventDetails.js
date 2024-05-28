import { useParams } from 'react-router-dom'
export default function EventDetailsPage() {
  const params = useParams();
  return <>
    <h1>EventDetailsPage</h1>
    <p>event id: {params.eventId}</p>
    {/* eventId here , not event.id as in dummy events
    because in router we use eventId in dynamic path */}
  </>
}