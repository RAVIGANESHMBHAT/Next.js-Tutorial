import Card from "@/components/card";
import Link from "next/link";
import React from "react";

function Notifications() {
  return (
    <Card>
      <div className="mr-4">Notifications</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}

export default Notifications;
