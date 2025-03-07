"use client";  

import { useState, useEffect } from "react";

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true); 
  const [hydrated, setHydrated] = useState(false); 

  useEffect(() => {
    setHydrated(true); 
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return { isOnline, hydrated };
};

export default function OfflinePage() {
  const { isOnline, hydrated } = useNetworkStatus();

  if (!hydrated || isOnline) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white z-50">
      <div className="p-6 rounded-lg shadow-lg text-center bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-300">
        <h2 className="text-xl font-semibold dark:text-white">You Are Currently Offline</h2>
        <p className="mt-2 text-gray-300 dark:text-gray-400">
          Please check your internet connection. Some features may be unavailable.
        </p>
        <div className="mt-4 animate-pulse text-yellow-500 dark:text-yellow-300">Reconnecting...</div>
      </div>
    </div>
  );
}


