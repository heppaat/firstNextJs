"use client";
import { useEffect, useState } from "react";
import { Whiskey } from "@/types/types";
import { fetchData } from "@/services/Api";

export default function Whiskeys() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [whiskeys, setWhiskeys] = useState<Whiskey[] | null>(null);

  const getWhiskeys = async () => {
    setIsLoading(true);
    try {
      const data = await fetchData("whiskeys");
      setWhiskeys(data);
      console.log(data);
    } catch (error) {
      setError((error as Error).message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWhiskeys();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div>
        <h1>Whiskeys</h1>
      </div>

      <select name="whiskeys" id="whiskey_id" defaultValue="">
        <option value="" disabled>
          Choose your whiskey
        </option>
        {whiskeys &&
          whiskeys.map((whiskey) => (
            <option key={whiskey.id} value={whiskey.id}>
              {whiskey.name}
            </option>
          ))}
      </select>
    </>
  );
}
