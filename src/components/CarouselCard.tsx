
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import community1 from '/src/assets/images/community_1.jpg'
import community10 from '/src/assets/images/community_10.jpg'
import community11 from '/src/assets/images/community_11.jpg'
import community12 from '/src/assets/images/community_12.jpg'
import community13 from '/src/assets/images/community_13.jpg'
import community14 from '/src/assets/images/community_14.jpg'
import community15 from '/src/assets/images/community_15.jpg'
import community16 from '/src/assets/images/community_16.jpg'
import community17 from '/src/assets/images/community_17.jpg'
import community18 from '/src/assets/images/community_18.jpg'
import community2 from '/src/assets/images/community_2.jpg'
import community3 from '/src/assets/images/community_3.jpg'
import community4 from '/src/assets/images/community_4.jpg'
import community5 from '/src/assets/images/community_5.jpg'
import community6 from '/src/assets/images/community_6.jpg'
import community7 from '/src/assets/images/community_7.jpg'
import community8 from '/src/assets/images/community_8.jpg'
import community9 from '/src/assets/images/community_9.jpg'

export function CarouselCard() {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1 flex">
              <img src={community1} alt="Community" />
              <img src={community2} alt="Community" />
              <img src={community3} alt="Community" />
              <img src={community4} alt="Community" />
              <img src={community5} alt="Community" />
              <img src={community6} alt="Community" />
              <img src={community7} alt="Community" />
              <img src={community8} alt="Community" />
              <img src={community9} alt="Community" />
              <img src={community10} alt="Community" />
              <img src={community11} alt="Community" />
              <img src={community12} alt="Community" />
              <img src={community13} alt="Community" />
              <img src={community14} alt="Community" />
              <img src={community15} alt="Community" />
              <img src={community16} alt="Community" />
              <img src={community17} alt="Community" />
              <img src={community18} alt="Community" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />
    </Carousel>
  )
}
