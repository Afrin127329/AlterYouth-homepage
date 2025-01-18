import SvgDisabledFather from "@/assets/icons/DisabledFather"
import SvgOrphan from "@/assets/icons/Orphan"
import SvgSingleMother from "@/assets/icons/SingleMother"

const Eligibility = () => {
  return (
    <div className="font-sans">
      <div className="section1">
        <div className="flex flex-col justify-center items-center my-8">
          <h2 className="text-2xl font-bold mb-4">Scholarship Eligibility</h2>
          <p className="text-center w-full md:w-[550px]">Only students who are currently enrolled in Government Primary Schools and fall
            under any of the following criteria are eligible to apply for scholarships</p>
        </div>
        <div className="flex gap-6 items-center justify-center flex-wrap my-8">
          <div className="flex gap-4 items-center leaderboard-box-shadow p-6 rounded-lg max-w-[375px] w-full">
            <SvgDisabledFather color="#1dc468" width={40} />
            <div>
              <h2 className="font-semibold mb-1">Disabled Father</h2>
              <p>Student's father is physically unable
                to work</p>
            </div>
          </div>
          <div className="flex gap-4 items-center leaderboard-box-shadow p-6 rounded-lg max-w-[375px] w-full">
            <SvgSingleMother color="#1dc468" width={40} />
            <div>
              <h2 className="font-semibold mb-1">Single Mother</h2>
              <p>Student's father is deceased or has abandoned the family</p>
            </div>
          </div>
          <div className="flex gap-4 items-center leaderboard-box-shadow p-6 rounded-lg max-w-[375px] w-full">
            <SvgOrphan color="#1dc468" width={40} />
            <div>
              <h2 className="font-semibold mb-1">Orphan</h2>
              <p>Both parents are deceased or have abandoned the child</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">

      </div>
      <div className="section3">

      </div>
      <div className="section4">

      </div>
    </div>
  )
}

export default Eligibility