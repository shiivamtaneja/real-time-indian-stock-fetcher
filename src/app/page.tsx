'use client';

import { useDispatch, useSelector } from "react-redux";

import ChangeSymbol from "@/components/ChangeSymbol";
import DataTable from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { RefetchValue } from "@/lib/constants";
import { setData } from "@/store/dataSlice";
import { RootState } from "@/store/store";
import { setSymbol } from "@/store/symbolSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();

  const symbol = useSelector((state: RootState) => state.symbol.data);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/stock/' + symbol.symbol);

      const newData = await response.json();

      dispatch(setData(newData.data));

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, RefetchValue);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-12">
      <h1 className="text-3xl">Real Time Indian Stock Data</h1>

      <ChangeSymbol />

      <div className="border rounded-md">
        <DataTable />
      </div>
    </div>
  );
}
