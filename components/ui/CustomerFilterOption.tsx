import { Dispatch } from "react";
import { TouchableOpacity, Text } from "react-native";

export default ({
  option,
  setOption,
  label,
  value,
}: {
  label: string;
  option: number;
  setOption: Dispatch<number>;
  value: number;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setOption(value);
      }}
    >
      <Text className={`${option == value ? "font-bold" : ""}`}>{label}</Text>
    </TouchableOpacity>
  );
};
