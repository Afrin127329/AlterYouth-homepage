import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import schoolsData from "../../assets/data/schools.json"
import SchoolCard from "../SchoolCard"
const Schools = () => {
  return (
    <div className="font-sans my-8">
      <h1 className="text-2xl font-bold mx-16">Students from Government Primary Schools Nationwide</h1>

      <Carousel className="w-full max-w-full mt-6" opts={{
        align: "start",
        loop: true,
      }}>
        <CarouselContent className="-ml-3">
          {schoolsData.map((school, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div className="p-1 flex">
                <SchoolCard school={school} key={index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
  )
}

export default Schools