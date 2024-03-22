import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col place-items-start w-full">
        <h1 className="text-5xl font-bold my-4">UofT MicroMapper</h1>
        <form className="flex flex-col place-items-start w-full gap-y-6">
          <div className="flex flex-col place-items-start w-full gap-y-2">
            <label>Welcome! What building are you currently inside?</label>
            <input
              type="text"
              name="building"
              value="Bahen Centre for Information Technology"
            />
          </div>
          <div className="flex flex-col place-items-start w-full gap-y-2">
            <label>
              Take a look around. Please enter the room number of the room you
              are the closest to.
            </label>
            <input type="text" name="start" value="2195" />
          </div>
          <div className="flex flex-col place-items-start w-full gap-y-2">
            <label>
              Please enter the room number that you are looking for.
            </label>
            <input type="text" name="destination" value="2285" />
          </div>
          <Link to="/loading">
            <input type="submit" value="Submit" className="submit" />
          </Link>
        </form>
      </div>
    </>
  );
}

export default Home;
