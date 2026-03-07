import React, { useState } from "react";

const STORAGE_KEY = "netflix-clone-watch-later";

/**
 * WatchLaterButton - Adds a show to the user's watch later list.
 * Persists to localStorage. Displays "+" when not added, "✓" when added.
 */
function WatchLaterButton({ name }) {
  const getStored = () => {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
    } catch {
      return new Set();
    }
  };
  const [added, setAdded] = useState(() => getStored().has(name));

  const handleToggle = () => {
    const stored = getStored();
    if (stored.has(name)) {
      stored.delete(name);
    } else {
      stored.add(name);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...stored]));
    setAdded(stored.has(name));
  };

  return (
    <button
      className="watch-later-btn"
      onClick={handleToggle}
      title={added ? "Remove from watch later" : "Add to watch later"}
      aria-label={added ? "Remove from watch later" : "Add to watch later"}
    >
      {added ? "✓ Watch Later" : "+ Watch Later"}
    </button>
  );
}

export default WatchLaterButton;

