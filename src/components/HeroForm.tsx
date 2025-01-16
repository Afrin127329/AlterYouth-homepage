import CountryList from 'country-list-with-dial-code-and-flag';
const HeroForm = () => {
  const countryList = CountryList.getAll();
  console.log(countryList.splice(0, 100))
  return (
    <div className="w-[350px]">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates mollitia velit voluptatum quasi. Laudantium alias, rem eius doloribus quam nobis sint ea aspernatur, sapiente amet veritatis ut repellendus harum, debitis excepturi incidunt quos hic labore quod dolore nam. Sit corporis accusamus itaque, obcaecati quidem neque dicta voluptatum dolore cumque. Asperiores non inventore eum maiores, expedita, dolorem ipsa sint ipsum voluptatum ut, in totam? Perferendis repudiandae suscipit rem ipsum voluptas iure quod nisi exercitationem nemo excepturi,
      {/* <PhoneInput /> */}
    </div>
  )
}

export default HeroForm