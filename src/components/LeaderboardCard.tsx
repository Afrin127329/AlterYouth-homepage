import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { formatDistanceToNow, parseISO } from "date-fns";
import ReactCountryFlag from "react-country-flag";

const LeaderboardCard = () => {
  const data = {
    "name": "Meraj Enam",
    "country_code": "BD",
    "invite_code": "enam",
    "message": "",
    "count": 2,
    "started_at": "2023-05-01T12:10:41.157577Z",
    "invited_by": "Nafis Khandakar",
    "student_imgs": [
      "https://test.alteryouth.com/media/students/profile_photo/student_9b7245a1-8637-4c5f-8eb6-e3299751d600_profile_photo_studen_n3lfRnZ_128x128.jpg",
      "https://test.alteryouth.com/media/students/profile_photo/student_7d87fd73-8bd1-461b-8500-0151eb16b731_profile_photo_defaul_YR3ICTm_128x128.jpg"
    ]
  }

  const relativeTime = formatDistanceToNow(parseISO(data.started_at), { addSuffix: true });

  return (
    <div className="leaderboard-box-shadow w-[30%]">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <a href="#" className="hover:underline mr-1">@{data.invite_code}</a>
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
                  <p className="font-semibold">{data.name}</p>
                  <p className="text-gray-400">Jaburiduwar Government Primary School</p>
                </div>
              </div>
            ))}

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LeaderboardCard