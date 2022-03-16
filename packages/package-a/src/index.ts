import cowsay from "cowsay";

export const packageA = () => {
  return cowsay.say({ text: "this is package a" });
};
