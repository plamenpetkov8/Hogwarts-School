import useSound from "use-sound";
import { createContext, useContext, useEffect } from "react";

import soundTheme from "../assets/soundTheme.mp3";

const SoundContext = createContext();

function SoundProvider({ children }) {
  const [play, { stop, pause, sound }] = useSound(soundTheme, {
    interrupt: true,
  });

  useEffect(() => {
    if (sound) sound.loop = true;

    play();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sound]);

  return (
    <SoundContext.Provider value={(play, pause, stop)}>
      {children}
    </SoundContext.Provider>
  );
}

function useAudio() {
  const context = useContext(SoundContext);
  if (context === undefined)
    throw new Error("SoundContext was used outside the SoundProvider");
  return context;
}

export { SoundProvider, useAudio };
