import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import Home from "@/pages/home";
import SplashScreen from "@/components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
