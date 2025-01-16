import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountryList from 'country-list-with-dial-code-and-flag';
import ReactCountryFlag from "react-country-flag";
import IncrementDecrementComponent from "./incrementAndDecrement";

const HeroForm = () => {
  const countryList = CountryList.getAll();
  console.log(countryList.splice(0, 100))
  return (
    <Card className="w-[370px] font-sans">
      <CardHeader>
        <CardTitle className='text-[23px] font-semibold'>Join the <span className='text-darkGreen'>#alteryouthrevolution</span></CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className='hidden'>Name</Label>
              <Input id="name" placeholder="Your Name" className='h-12 rounded-md' />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className='hidden'>Name</Label>
              <Input id="name" placeholder="Your Email" className='h-12 rounded-md' />
            </div>
            <div className="flex gap-1 justify-center items-center space-y-1.5">
              <Select>
                <SelectTrigger id="phoneInput" className='w-[8rem] h-12 mt-1.5 rounded-md'>
                  <SelectValue defaultValue={"+880"} />
                  <span className="flex items-center gap-1">
                    <ReactCountryFlag className="emojiFlag" countryCode="BD" svg />
                    +880
                  </span>
                </SelectTrigger>
                <SelectContent position="popper" className='w-[250px]'>
                  {countryList.splice(0, 100).map((country) => (
                    <SelectItem key={country.dial_code} value={country.dial_code}>
                      <span className="flex items-center gap-3">
                        <ReactCountryFlag
                          className="emojiFlag"
                          countryCode={country.code}
                          svg
                        />
                        {country.name}{country.dial_code}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input placeholder='Your Number' className='h-12 rounded-md' />
            </div>

            <IncrementDecrementComponent />

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-darkGreen text-white w-full text-xl py-6 hover:bg-darkGreen/90">Start Now</Button>
      </CardFooter>
    </Card>
  )
}

export default HeroForm