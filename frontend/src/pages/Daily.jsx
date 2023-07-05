import CreateQuotes from "../components/CreateQuotes"
import Quotes from "../components/Quotes"


const Daily = () => {
  return (
    <>
      <div className="p-4">
        <CreateQuotes />

        <div className="d-flex justify-content-around flex-wrap">
          <Quotes id={`lx1021`} quote="hi there how is it going" user="aloy9874" time={`8:30`}/>
        </div>
      </div>
    </>
  )
}

export default Daily