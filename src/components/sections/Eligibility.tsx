import SvgDisabledFather from "@/assets/icons/DisabledFather";
import SvgOrphan from "@/assets/icons/Orphan";
import SvgSingleMother from "@/assets/icons/SingleMother";
import applicant from "/src/assets/images/applicant.jpg";
import headTeacher from "/src/assets/images/headteacher.jpg";
import person from "/src/assets/images/person.jpg";

const Eligibility = () => {
  return (
    <div className="font-sans">
      {/* Section 1 */}
      <div>
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

      {/* Section 2 */}
      <div>
        <div className="container my-8">
          <div className="box rounded-lg cursor-pointer">
            <a href="https://play.google.com/store/apps/details?id=com.alteryouth.teacher" target="_blank">
              <div className="imgBx">
                <img src={headTeacher} />
              </div>
              <div className="content">
                <div>
                  <h2>Are you a teacher?<br />Get your students<br />listed on the<br /> platform.</h2>
                  <p className="underline flex gap-2 items-center">Download the school app <span className="mt-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span></p>
                </div>
              </div>
            </a>
          </div>
          <div className="box rounded-lg cursor-pointer">
            <a href="https://alteryouth.com/active-scholarships" target="_blank">
              <div className="imgBx">
                <img src={person} />
              </div>
              <div className="content">
                <div>
                  <h2>You can be <br /> anywhere <br /> in the world</h2>
                  <p className="underline flex gap-2 items-center">See all Scholarships <span className="mt-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span></p>
                </div>
              </div>
            </a>

          </div>
          <div className="box rounded-lg cursor-pointer">
            <a href="https://alteryouth.com/graduates/2020" target="_blank">
              <div className="imgBx">
                <img src={applicant} />
              </div>
              <div className="content">
                <div>
                  <h2>While students <br /> get closer to <br /> their dreams</h2>
                  <p className="underline flex gap-2 items-center">See all Graduates <span className="mt-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Section 3  */}
      <div>

      </div>

      {/* Section 4  */}
      <div>

      </div>
    </div>
  )
}

export default Eligibility