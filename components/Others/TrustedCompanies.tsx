import { companies } from "@/Data/data";

function TrustedCompanies() {
  return (
    <div className="flex flex-row gap-5 w-3/4 items-center m-auto mt-12 pb-10">
      <div className="flex flex-col gap-4 w-2/5 justify-center m-auto">
        <h1 className="text-2xl font-semibold m-auto">
          We Just keep growing with 6.3k Companies
        </h1>
        <div className="text-xs text-gray-500 m-auto">
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </div>
      </div>
      <div className="grid grid-cols-4 w-full gap-5">
        {companies.map((company, index) => (
          <Company key={index} company={company} />
        ))}
      </div>
    </div>
  );
}

function Company({ company }: { company: string }) {
  return (
    <button className="m-auto w-[180px] bg-white">
      <img src={company} alt="C1" className="h-[80px] w-[80px] m-auto" />
    </button>
  );
}

export default TrustedCompanies;
