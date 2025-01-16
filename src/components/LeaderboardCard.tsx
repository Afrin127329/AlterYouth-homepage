import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

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

  return (
    <div className="leaderboard-box-shadow w-1/3">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <p>Hello</p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LeaderboardCard