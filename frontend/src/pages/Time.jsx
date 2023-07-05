
import TimeForm from '../components/TimeForm'
import TimeTableCard from '../components/TimeTableCard'


const Time = () => {
  return (
    <>
      <div className="p-4 center">
        <TimeForm/>
        <div className='mt-5 flex-wrap d-flex justify-content-around'>
          <TimeTableCard title="hello" description="hi there how are you doing" starttime="hey" endtime="hello"/>
        </div>
      </div>
    </>
  )
}

export default Time