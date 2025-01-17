import { CarouselCard } from "../CarouselCard"

const Community = () => {
  return (
    <div className="font-sans mt-8">
      <div className="mx-3 lg:mx-16">
        <h2 className="text-2xl font-bold mb-4 ">Community Impact</h2>
        <p>Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
          using that phone, to start receiving their child's scholarships directly, every month.</p>
      </div>
      <div className=" mt-8">
        <CarouselCard />
      </div>
    </div>
  )
}

export default Community