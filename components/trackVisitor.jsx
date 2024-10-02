import { useEffect, useState } from "react";
import axios from "axios";

const TrackVisitor = () => {
  const [visitorInfo, setVisitorInfo] = useState(null);

  useEffect(() => {
    const getVisitorData = async () => {
      try {
        // Fetch visitor data using ipinfo API
        const response = await axios.get(`https://ipinfo.io?token=YOUR_IPINFO_API_KEY`);
        const visitorData = response.data;

        setVisitorInfo(visitorData);
        console.log("Visitor data:", visitorData);

        // Optionally, send this data to your server (for logging or notification purposes)
        await axios.post("/api/notify", { visitorData });
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    };

    getVisitorData();
  }, []);

  return (
    <div>
      {visitorInfo && (
        <div>
          <p>IP: {visitorInfo.ip}</p>
          <p>Location: {visitorInfo.city}, {visitorInfo.country}</p>
        </div>
      )}
    </div>
  );
};

export default TrackVisitor;
