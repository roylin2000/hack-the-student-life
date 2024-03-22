import map from "../assets/map.png";

function Map() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          src={map}
          alt="Floor plan of Bahen 2nd floor with path"
          className="w-2/3"
        />
      </div>
    </>
  );
}

export default Map;
