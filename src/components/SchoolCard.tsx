import { SchoolData } from "@/lib/types";



const SchoolCard: React.FC<{ school: SchoolData }> = ({ school }) => {

  return (
    <div className="shadow-sm font-sans cursor-pointer">
      <div className="h-[230px] lg:h-[250px]">
        <img src={school.school_img_url} alt="" className="w-full h-full object-cover  rounded-[0.6rem]" />
      </div>
      <div className="my-3">
        <h2 className="font-semibold">{school.name}</h2>
        <p className="flex gap-1 items-center text-gray-500 text-[14px]"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin text-darkGreen"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg> {school.location}, Bangladesh</p>
      </div>
    </div>
  )
}

export default SchoolCard