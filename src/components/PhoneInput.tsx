
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

export default function PhoneInput() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue defaultValue={"+880"} placeholder="Country Code" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Countries</SelectLabel>
              <SelectItem value="us">United States (+1)</SelectItem>
              <SelectItem value="ca">Canada (+1)</SelectItem>
              <SelectItem value="gb">United Kingdom (+44)</SelectItem>
              <SelectItem value="au">Australia (+61)</SelectItem>
              <SelectItem value="in">India (+91)</SelectItem>
              <SelectItem value="cn">China (+86)</SelectItem>
              <SelectItem value="jp">Japan (+81)</SelectItem>
              <SelectItem value="de">Germany (+49)</SelectItem>
              <SelectItem value="fr">France (+33)</SelectItem>
              <SelectItem value="it">Italy (+39)</SelectItem>
              <SelectItem value="es">Spain (+34)</SelectItem>
              <SelectItem value="br">Brazil (+55)</SelectItem>
              <SelectItem value="za">South Africa (+27)</SelectItem>
              <SelectItem value="ng">Nigeria (+234)</SelectItem>
              <SelectItem value="eg">Egypt (+20)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input className="flex-1" type="tel" placeholder="Enter your phone number" />
      </div>
      <Button type="submit">Submit</Button>
    </div>
  )
}