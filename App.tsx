import { ConfigCatProvider, PollingMode } from "configcat-react";
import React from "react";
import { View } from "react-native";
import Home from "./src/screens/Home";

const App: React.FC = () => {
  return (
    <ConfigCatProvider
      sdkKey="ehvbCOFD7kyGbv0S65ijXg/_cFvdQdeqUW8uHbCfkMlSQ"
      pollingMode={PollingMode.AutoPoll}
      options={{
        pollIntervalSeconds: 10,
      }}
    >
      <Home />
    </ConfigCatProvider>
  );
};

export default App;
