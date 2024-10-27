"use client";
import React, { useEffect, useState } from "react";
import { Whiskey } from "@/types/types";
import { fetchData } from "@/services/Api";

const removeDuplicateNames = (arr: Whiskey[]) =>
  arr.reduce<Whiskey[]>(
    (acc, curr) =>
      acc.some((whiskey) => whiskey.name === curr.name) ? acc : [...acc, curr],
    []
  );

export default function Whiskeys() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [whiskeys, setWhiskeys] = useState<Whiskey[] | null>(null);

  const [selectedWhiskey, setSelectedWhiskey] = useState<string | number>("");

  const getWhiskeys = async () => {
    setIsLoading(true);
    try {
      const data = await fetchData("whiskeys");
      setWhiskeys(data);
    } catch (error) {
      setError((error as Error).message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWhiskeys();
  }, []);

  const uniqueWhiskeys = whiskeys ? removeDuplicateNames(whiskeys) : [];

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const whiskeyId = parseInt(event.target.value, 10);
    setSelectedWhiskey(whiskeyId);
  };

  const whiskeyDescriptionToRender = uniqueWhiskeys.find(
    (whiskey) => whiskey.id === selectedWhiskey
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div>
        <h1>Whiskeys</h1>
      </div>

      <select
        name="whiskeys"
        id="whiskey_id"
        value={selectedWhiskey}
        onChange={handleSelect}
      >
        <option value="" disabled>
          Choose your whiskey
        </option>
        {uniqueWhiskeys.map((whiskey) => (
          <option key={whiskey.id} value={whiskey.id}>
            {whiskey.name}
          </option>
        ))}
      </select>

      {whiskeyDescriptionToRender && (
        <div>
          <h1>{whiskeyDescriptionToRender.name}</h1>
          <p>{whiskeyDescriptionToRender.description}</p>
        </div>
      )}
    </>
  );
}
