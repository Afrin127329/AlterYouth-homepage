import { useState } from "react";
import leaderboardData from "../../assets/data/leaderboard.json";
import LeaderboardCard from "../LeaderboardCard";
import { Button } from "../ui/button";

const Leaderboard = () => {
  const [visibleCount, setVisibleCount] = useState<number>(5);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

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

      {/* <div className="flex flex-wrap gap-4 my-6 justify-center"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {leaderboardData.slice(0, visibleCount).map((data, index) => (
          <LeaderboardCard key={index} data={data} />
        ))}
      </div>

      {visibleCount < leaderboardData.length && (
        <div className="flex justify-center my-6">
          <Button variant="ghost"
            className="px-6 py-2 text-darkGreen hover:bg-transparent hover:text-darkGreen/80 transition duration-200"
            onClick={handleSeeMore}
          >
            See More
          </Button>
        </div>
      )}

    </div>
  )
}

export default Leaderboard