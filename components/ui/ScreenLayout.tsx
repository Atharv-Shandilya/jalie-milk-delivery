import { KeyboardAvoidingView, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton, NextButton } from "./Button";

export default ({
  children,
  buttonType = 0,
  link = "",
  header,
  label,
}: {
  children: React.ReactNode;
  buttonType?: number;
  link?: string;
  header: string;
  label?: string;
}) => {
  return (
    <SafeAreaView
      className="p-4"
      style={{ flex: 1, backgroundColor: "white", padding: 16 }}
    >
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between items-center mt-[10px]">
            <Text className="font-bold text-4xl">{header}</Text>
            {buttonType == 1 && (
              <NextButton link={link as string} label={label as string} />
            )}
            {buttonType == 2 && (
              <BackButton link={link as string} label={label as string} />
            )}
          </View>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
