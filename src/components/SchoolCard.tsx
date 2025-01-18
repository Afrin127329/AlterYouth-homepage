import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { SchoolData } from "@/lib/types";
import quoteIcon from "/src/assets/icons/quote-2.svg";
const SchoolCard: React.FC<{ school: SchoolData }> = ({ school }) => {

  return (
    <div className="shadow-sm font-sans cursor-pointer">
      <Sheet>
        <SheetTrigger>
          <div className="h-[230px] lg:h-[250px]">
            <img src={school.school_img_url} alt="" className="w-full h-full object-cover  rounded-[0.6rem]" />
          </div>
          <div className="my-3">
            <h2 className="font-semibold">{school.name}</h2>
            <p className="flex gap-1 items-center text-gray-500 text-[14px]"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin text-darkGreen"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg> {school.location}, Bangladesh</p>
          </div>
        </SheetTrigger>
        <SheetContent side={"bottom"} className="w-[400px] sm:w-[540px] mx-auto rounded-lg py-[0px] px-[0px] text-black font-sans">
          <SheetHeader>
            <SheetTitle>
              <div className="mt-[-1px]">
                <img src={school.school_img_url} alt="" className="w-full h-full object-cover  rounded-t-lg" />
              </div>
            </SheetTitle>
            <SheetDescription className="p-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-black font-semibold text-[1rem]">{school.name}</h2>
                <span className="bg-darkGreen text-white text-xs w-fit rounded-sm p-1">{school.total_applicants} Scholarship Applicants</span>
                <p className="flex gap-1 items-center text-gray-500 text-[14px]"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin text-darkGreen"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg> {school.location}, Bangladesh</p>
                <p className="text-black leading-5">Established in {school.year_established} in {school.location}, Bangladesh. It now hosts {school.total_students} taught by {school.total_teachers}</p>
              </div>


              <div className="bottom">
                <div className="flex items-center gap-3 my-3">
                  <div className=" w-12 h-12 ">
                    <img src={school.ht_img_url} alt="" className="rounded-full object-cover w-full h-full" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-black">{school.ht_name}</p>
                    <p className="text-gray-700">Class Teacher</p>
                  </div>
                </div>
                <p className="flex gap-2 items-start">
                  <img src={quoteIcon} alt="Quote Icon" width={"20px"} height={"20px"} />
                  <span className="text-black ">{school.ht_quote}</span>
                </p>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>

  )
}

export default SchoolCard