import React, { useState } from "react";

/**
 * WatchLaterButton - Adds a show to the user's watch later list.
 * Displays a "+" when not added, "✓" when added.
 */
function WatchLaterButton({ name }) {
  const [added, setAdded] = useState(false);

  return (
    <button
      className="watch-later-btn"
      onClick={() => setAdded(!added)}
      title={added ? "Remove from watch later" : "Add to watch later"}
      aria-label={added ? "Remove from watch later" : "Add to watch later"}
    >
      {added ? "✓ Watch Later" : "+ Watch Later"}
    </button>
  );
}

export default WatchLaterButton;
