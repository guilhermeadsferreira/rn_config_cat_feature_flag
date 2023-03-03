import { useFeatureFlag } from "configcat-react";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Home: React.FC = () => {
  const { loading, value: showEventBanner } = useFeatureFlag(
    "event_feature_banner",
    false
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading ...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feature flags</Text>
      {showEventBanner && <View style={styles.banner} />}
    </View>
  );
};

export default Home;
