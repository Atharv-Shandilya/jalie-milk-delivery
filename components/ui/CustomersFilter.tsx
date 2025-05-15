import { Dispatch } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import CustomerFilterOption from "./CustomerFilterOption";

export default ({
  option,
  setOption,
}: {
  option: number;
  setOption: Dispatch<number>;
}) => {
  return (
    <View className="flex-row justify-center mt-[50px] mb-6">
      <View className="flex-row gap-4 border px-6 py-3 rounded-lg">
        <CustomerFilterOption
          option={option}
          setOption={setOption}
          label="All"
          value={0}
        />
        <CustomerFilterOption
          option={option}
          setOption={setOption}
          label="Active"
          value={1}
        />
        <CustomerFilterOption
          option={option}
          setOption={setOption}
          label="Inactive"
          value={2}
        />
      </View>
    </View>
  );
};
