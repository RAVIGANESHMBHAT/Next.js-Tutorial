import Card from "@/components/card";
import Link from "next/link";
import React from "react";

function ArchivedNotifications() {
  return (
    <Card>
      <div className="mr-4">Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}

export default ArchivedNotifications;
