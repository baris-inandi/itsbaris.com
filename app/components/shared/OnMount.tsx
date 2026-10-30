"use client";

import { HUGE_BARIS_FACE } from "../../lib/hugeBarisFace";
import { useEffect } from "react";

export const OnMount: React.FC = () => {
  useEffect(() => {
    console.log(HUGE_BARIS_FACE);
  }, []);

  return <></>;
};
