import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
    </SafeAreaView>
  );
};
