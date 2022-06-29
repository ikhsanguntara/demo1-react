import React from "react";
import { formatDateTime } from "./util";

export const formatCurrency = (cellContent) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(cellContent);
};

export const dateTimeFormatter = (cell) => {
  return <span>{formatDateTime(cell)}</span>;
};
