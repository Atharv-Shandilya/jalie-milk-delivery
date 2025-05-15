import { useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export const NextButton = ({
  link,
  label,
}: {
  link: string;
  label: string;
}) => {
  const route = useRouter();
  return (
    <TouchableOpacity
      className=" border px-3 py-2 rounded-lg"
      onPress={() => {
        route.push(link as any);
      }}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export const BackButton = ({
  link,
  label,
}: {
  link: string;
  label: string;
}) => {
  const route = useRouter();
  return (
    <TouchableOpacity
      className=" border px-3 py-2 rounded-lg"
      onPress={() => {
        if (route.canGoBack()) {
          route.back();
        }
      }}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
