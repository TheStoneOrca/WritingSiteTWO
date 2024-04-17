"use client";

import { User } from "@/types";
import { useEffect, useState } from "react";
import ReactSecureStorage from "react-secure-storage";

export default function useUser() {
  const [userDetails, setUserDetails] = useState<{
    user: null | User;
    isReady: boolean;
    isSignedIn: boolean;
    isError: boolean;
  }>({ user: null, isReady: false, isSignedIn: false, isError: false });

  useEffect(() => {
    try {
      if (ReactSecureStorage.getItem("sessionJWT") === null) {
        setUserDetails({
          user: null,
          isReady: true,
          isSignedIn: false,
          isError: false,
        });

        return;
      }
      fetch("/api/getuser", {
        method: "POST",
        body: JSON.stringify({
          userJWT: ReactSecureStorage.getItem("sessionJWT"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) =>
        res.json().then((result) => {
          if (result.status === 200) {
            setUserDetails({
              user: result.user as User,
              isReady: true,
              isSignedIn: true,
              isError: false,
            });

            return;
          } else {
            setUserDetails({
              user: null,
              isReady: true,
              isSignedIn: false,
              isError: false,
            });

            return;
          }
        })
      );
    } catch (error) {
      setUserDetails({
        user: null,
        isReady: true,
        isSignedIn: false,
        isError: true,
      });
    }
  }, []);

  return userDetails;
}
