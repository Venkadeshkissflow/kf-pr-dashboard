import Image from "next/image";

import { Card } from "@tremor/react";

export default function CardComponent() {
  return (
    <Card>
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </Card>
  );
}
