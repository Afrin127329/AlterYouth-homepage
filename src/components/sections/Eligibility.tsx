import SvgDisabledFather from "@/assets/icons/DisabledFather";
import SvgOrphan from "@/assets/icons/Orphan";
import SvgSingleMother from "@/assets/icons/SingleMother";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import playBtn from "/src/assets/icons/play-btn.svg";
import applicant from "/src/assets/images/applicant.jpg";
import videoPoster from "/src/assets/images/ay_video_poster.jpg";
import headTeacher from "/src/assets/images/headteacher.jpg";
import person from "/src/assets/images/person.jpg";
import video from "/src/assets/videos/ay_explainer.mp4";
const Eligibility = () => {
  return (
    <div className="font-sans">
      {/* Section 1 */}
      <div className="my-8">
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
      <div className="my-8">
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
      <div className="flex flex-col md:flex-row gap-16 justify-center items-center my-8 mt-16 p-6">
        <Sheet>
          <SheetTrigger>
            <div className="relative h-[400px] w-full md:w-[500px] cursor-pointer">
              <img src={videoPoster} alt="" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 bg-gray-700 w-[100px] h-[100px] flex items-center justify-center">
                <img src={playBtn} alt="" width={50} className="ml-[8px]" />
              </div>
            </div>
          </SheetTrigger>

          <div>
            <h1 className="text-3xl font-bold mb-6 hidden md:block">The scholarship app</h1>
            <h1 className="text-2xl font-bold mb-6 block md:hidden">Embark on a scholarship journey</h1>
            <p className="w-full max-w-[500px] leading-7 hidden md:block">In Bangladesh, while 98% of children enroll in school, 2 million children drop out to work before achieving literacy in order to support their families financially. On the flipside, Bangladesh has a diaspora population of 10 million in advanced economies who wish to make an impact on their homeland. AlterYouth, imagine Uber for scholarships, is a C2C scholarship app enabling users from around the world to start scholarships directly for financially struggling students in Government Primary Schools of Bangladesh, through digital banking.</p>
            <p className="w-full max-w-[500px] leading-7 block md:hidden">Here's a 100 second video that takes you to a village of Bangladesh and shows how your scholarship impacts a day in the life of a student who needs it</p>
          </div>

          <SheetContent side={"bottom"} className="w-[400px] sm:w-[540px] mx-auto rounded-lg p-0 mb-4">
            <SheetHeader className="mt-[-1px] rounded-lg">
              <video src={video} controls autoPlay className=" rounded-lg" />
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>

      {/* Section 4  */}
      <div>

      </div>
    </div>
  )
}

export default Eligibility