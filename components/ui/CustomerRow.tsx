import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MenuSvg from "@/assets/images/menu.svg";

export default ({
  name,
  phone,
  quantity,
  amount,
  index,
}: {
  name: string;
  phone: string;
  quantity: number;
  amount: number;
  index: number;
}) => {
  return (
    <View
      className={`flex-row border px-4 items-center py-2 rounded-md bg-white mb-4 ${
        index % 2 ? "bg-gray-200" : ""
      }`}
    >
      <Text className="w-[100px] mr-3">{name}</Text>
      <Text className="mr-5">{phone}</Text>
      <Text className="w-10 text-center mr-10">{quantity}L</Text>
      <Text>₹{amount}</Text>
      <TouchableOpacity className="ml-auto">
        <MenuSvg width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
};
