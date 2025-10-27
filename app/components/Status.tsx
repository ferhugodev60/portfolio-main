"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SIDE_PROJECTS, { SideProjectProps } from "../../lib/sideProjects";
import { Section } from "./Section";

export default function Status() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 w-full">
      <div className="flex-[3] w-full">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                id={project.id}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-3">
          <p className="text-lg text-muted-foreground">My certifications</p>
          <ContactCard
            name="React"
            image="/profile.png"
            mediumImage="https://cdn6.aptoide.com/imgs/5/c/8/5c85cb42c35fde773c72f74282322ecc_icon.png"
            description="Trainer : Enzo Ustariz - Web School"
            url="react.jpg"
          />
        </Card>
      </div>
    </Section>
  );
}

type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
};

export function ContactCard(props: ContactCardProps) {
  return (
    <Link href={props.url} className="w-full">
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative">
          <Image
            src={props.image}
            alt={props.name}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <Image
            src={props.mediumImage}
            alt={props.name}
            width={16}
            height={16}
            className="absolute -bottom-2 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
        />
      </Card>
    </Link>
  );
}

export function SideProject(props: SideProjectProps) {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.new && <Badge variant="outline">New</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
}

const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQHoxXvt89ptAg/company-logo_200_200/company-logo_200_200/0/1697100764110/analis_finance_logo?e=2147483647&v=beta&t=NKHpzqmYuRLnf2U4H8NMIZJWlfMhoWEP_JXlrOtEUCw",
    title: "Analis Finance",
    role: "Project manager",
    date: "September 2024 - September 2026",
    url: "https://analis-finance.com/",
    internship: false,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQGZ815jNq3fbA/company-logo_200_200/company-logo_200_200/0/1635844050696/psycleresearch_logo?e=2147483647&v=beta&t=zQPCro2XAE3hJn2_kpIG9-L4x7lLEGQnObc-yVsJ3cA",
    title: "Psycle",
    role: "Frontend developer",
    date: "March 2024 - June 2024",
    url: "https://psycle.io/",
    internship: true,
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFQL9S0tp5cpw/company-logo_200_200/company-logo_200_200/0/1631373136406?e=2147483647&v=beta&t=BAsqkyUHBxPOVsO1Xz3QtBdvhZl7ialcoLLqVRwCzv4",
    title: "Compucraft",
    role: "Frontend developer",
    date: "April 2023 - June 2023",
    url: "https://www.linkedin.com/company/association-compucraft/about/",
    internship: true,
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  internship?: boolean;
};

export function Work(props: WorkProps) {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <Image
        src={props.image}
        alt={props.title}
        width={40}
        height={40}
        className="object-contain rounded"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.internship && <Badge variant="outline">Internship</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
}
