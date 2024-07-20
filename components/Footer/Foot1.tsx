export default function Foot1() {
  return (
    <div className="ml-64 flex space-x-40 py-14">
      <div className="">
        <h1 className="mb-7 max-w-80 text-2xl text-white">
          Start learning with 67.1k Students around the world.
        </h1>
        <div className="mt-2 w-auto space-x-2 flex">
          <button className="bg-orange-600 px-5 transition-shadow duration-500 py-2 hover:shadow-md hover:shadow-orange-500">
            Join the family
          </button>
          <button className="bg-gray-400 px-5 transition-shadow duration-500 py-2 hover:shadow-md hover:shadow-gray-600">
            Browse all courses
          </button>
        </div>
      </div>

      <div className="flex justify-between space-x-20 py-9">
        <div>
          <h1 className="text-2xl text-white">6.3k</h1>
          <span className="text-sm text-white">online courses</span>
        </div>
        <div>
          <h1 className="text-2xl text-white">26k</h1>
          <span className="text-sm text-white">certified Instructor</span>
        </div>
        <div>
          <h1 className="text-2xl text-white">99.9%</h1>
          <span className="text-sm text-white">Success Rate</span>
        </div>
      </div>
    </div>
  );
}
