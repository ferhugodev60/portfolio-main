import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./Status";

export default function Contact() {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you...
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          name="hugo-ferreira"
          image="/profile.png"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s"
          description="Contact me with Linkedin"
          url="https://www.linkedin.com/in/hugo-ferreira-5976172a3/"
        />
        <ContactCard
          name="Hugo FERREIRA"
          image="/profile.png"
          mediumImage="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png"
          description="Contact me by mail"
          url="mailto:hugoferreira.dev60@gmail.com"
        />
        <ContactCard
          name="Hugo FERREIRA"
          image="/profile.png"
          mediumImage="https://media.licdn.com/dms/image/C4D0BAQElun1EoLAubQ/company-logo_200_200/0/1641129238414/upjv_univ_logo?e=2147483647&v=beta&t=2qLOk3UEhJ4VR3W_XAWN2Mu3kpBQzj7Xc48m5no4cX0"
          description="Contact me on my student mail"
          url="mailto:hugo.rouville-ferreira@etud.u-picardie.fr"
        />
      </div>
    </Section>
  );
}
