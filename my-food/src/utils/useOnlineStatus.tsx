import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    const handleOffline = () => setStatus(false);
    const handleOnline = () => setStatus(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return status;
}

export default useOnlineStatus;
