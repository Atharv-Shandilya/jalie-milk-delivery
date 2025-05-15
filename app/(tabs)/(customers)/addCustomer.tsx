import ScreenLayout from "@/components/ui/ScreenLayout";
import { View } from "react-native";

export default () => {
  return (
    <ScreenLayout
      header="Add Customers"
      buttonType={2}
      link="(tabs)/(customers)"
      label="Cancel"
    >
      <View></View>
    </ScreenLayout>
  );
};
