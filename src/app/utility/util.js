import moment from "moment";

export const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "20",
    value: 20,
  },
  {
    text: "30",
    value: 30,
  },
  {
    text: "40",
    value: 40,
  },
  {
    text: "50",
    value: 50,
  },
];

export const formatDate = (stringDate) => {
  return moment(stringDate).format("DD/MM/YYYY");
};

export const formatDateTime = (stringDate) => {
  return moment(stringDate).format("DD/MM/YYYY - hh:mm");
};
