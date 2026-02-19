import { useEffect } from "react";

export function useGeoLocation(
  onSuccess: (lat: number, lon: number) => void
) {
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        onSuccess(pos.coords.latitude, pos.coords.longitude);
      },
      (err) => {
        console.log("Geolocation error:", err.message);
      }
    );
  }, []);
}
