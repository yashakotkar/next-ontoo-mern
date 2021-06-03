import useSWR from "swr";

const LocationBar = (props) => {
  const { data, error } = useSWR("/api/client/location", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data.body);
  return <div>hello !</div>;
};

export default LocationBar;
