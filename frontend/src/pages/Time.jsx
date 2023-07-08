
import TimeForm from '../components/TimeForm'
import TimeTableCard from '../components/TimeTableCard'
import useAuth from '../hooks/useAuth'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

const Time = () => {
  const auth = useAuth()
  const postQuery = useQuery(
    {
      queryKey: ["timepost"],
      queryFn: async () => await axios.post('http://localhost:3000/time/all', { userId: auth.auth.id }),
    }
  )

  if (postQuery.isLoading) return (<>
    <div className="p-4 center">
      <TimeForm />
      <div className='d-flex' style={{justifyContent:"center"}}>
        <h2>Loading...</h2>
      </div>
    </div>
  </>)

  if (postQuery.isError) return (<>
    <div className="p-4 center">
      <TimeForm />
      <div className='d-flex' style={{justifyContent:"center"}}>
        <pre>{JSON.stringify(postQuery.error)}</pre>
      </div>
    </div>
  </>)


  return (
    <>
      <div className="p-4 center">
        <TimeForm />
        <div className='mt-5 flex-wrap gap-3 d-flex justify-content-around'>

          {postQuery.data.data.map(post=> (
            <TimeTableCard title={post.title} date={post.date}timeId={post.time_id} description={post.discription} starttime={post.start_time} endtime={post.end_time} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Time