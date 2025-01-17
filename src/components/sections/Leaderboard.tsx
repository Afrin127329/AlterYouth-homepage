import LeaderboardCard from "../LeaderboardCard"

const Leaderboard = () => {
  return (
    <div className="px-4 font-sans text-gray-800">
      <div className="text-center w-full flex flex-col gap-4 items-center justify-center py-8">
        <h1 className="text-darkGreen text-2xl">#alteryouthrevolution</h1>
        <h2 className="text-2xl font-bold">The Scholarship Community</h2>
        <p className="">Despite public primary schools being free of cost in Bangladesh,
          <br />
          many students still <strong>drop out of school</strong> to work and earn in order to support their families.
          <br />
          Your scholarship helps a child attend school and support their families at the same time.</p>
      </div>

      <div className="flex flex-wrap gap-4 my-6">
        <LeaderboardCard />
        <LeaderboardCard />
        <LeaderboardCard />
      </div>

    </div>
  )
}

export default Leaderboard