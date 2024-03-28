import { useState } from "react";

import { Tab } from "./packages/ui-kit/components/navigation";

import UIKit from "./screens/UIKit/Screen";
import Cellect from "./screens/Cellect/Screen";

import "./style.css";

const tabs = [
  {
    key: "ui-kit" as const,
    title: "UIKit",
  },
  {
    key: "cellect" as const,
    title: "Cellect",
  },
];

const App = () => {
  const [tabKey, setTabKey] = useState<(typeof tabs)[number]["key"]>(
    tabs[0].key
  );

  const renderScreen = () => {
    switch (tabKey) {
      case "ui-kit": {
        return <UIKit />;
      }
      case "cellect": {
        return <Cellect />;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <div>
      <Tab
        items={tabs}
        value={tabKey}
        onChange={({ key }) => setTabKey(key as typeof tabKey)}
      />
      {renderScreen()}
    </div>
  );
};

export default App;
