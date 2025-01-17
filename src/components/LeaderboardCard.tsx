import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { LeaderboardData } from "@/lib/types";
import { formatDistanceToNow, parseISO } from "date-fns";
import ReactCountryFlag from "react-country-flag";



const LeaderboardCard = ({ data }: { data: LeaderboardData }) => {

  const relativeTime = formatDistanceToNow(parseISO(data.started_at), { addSuffix: true });

  return (
    // <div className="leaderboard-box-shadow w-[30%] h-fit-content">
    <Card className="shadow-lg border-0 h-fit" >
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <a href="#" className="hover:underline mr-1 font-semibold">@{data.invite_code}</a>
            <ReactCountryFlag className="emojiFlag" countryCode="US" svg />
          </div>
          <p className="text-xs text-gray-400">Joined {relativeTime}</p>
        </div>
        <span className="bg-lightGreen text-darkGreen rounded-full  w-fit p-1 text-[11px]">{data.count > 1 ? data.count + " " + "Scholarships" : data.count + " " + "Scholarship"}</span>
      </CardHeader>
      <CardContent>
        <div>
          {data.student_imgs?.map((img, index) => (
            <div key={index} className="flex items-center gap-3 m-3">
              <div className=" w-12 h-12 ">
                <img src={img} alt="" className="rounded-full object-cover w-full h-full" />
              </div>
              <div className="text-sm">
                <p className="font-semibold">{data.name}, Class 4</p>
                <p className="text-gray-400">Jaburiduwar Government Primary School</p>
              </div>
            </div>
          ))}

        </div>
      </CardContent>
    </Card>
    // </div>
  )
}

export default LeaderboardCard