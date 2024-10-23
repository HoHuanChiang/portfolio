export interface CompanyInfo {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
  title: string;
  location: string;
  description: string;
}

export const COMPANIES: CompanyInfo[] = [
  {
    id: "tabapay",
    startDate: "Sep. 2023",
    endDate: "Current",
    name: "TabaPay, Inc.",
    title: "Software Engineer",
    location: "Mountain View, CA",
    description: "",
  },
  {
    id: "catchpoint",
    startDate: "Jun. 2021",
    endDate: "April. 2023",
    name: "Catchpoint Systems, Inc.",
    title: "Software Engineer II",
    location: "New York, US",
    description:
      "Worked on identity provider server, implementing OAuth 2.0, and developing APIs can ensure the security of the application and user data, while management pages for account management can enhance the user experience.",
  },
  {
    id: "cgu",
    startDate: "Aug. 2019",
    endDate: "Jul. 2020",
    name: "Chang Gung University",
    title: "Full Stack Software Engineer",
    location: "Taoyuan, Taiwan",
    description:
      "Worked on four projects, including designing mobile apps and websites for obstetric patients, developing a website for medical record management, creating a volunteer web platform, and utilizing image recognition for medical analysis.",
  },
  {
    id: "kerson",
    startDate: "Aug. 2019",
    endDate: "Jul. 2020",
    name: "Kunshan Kerson Technology Company",
    title: "Software Engineer Intern",
    location: "Jiangsu, China",
    description:
      "Developed an Office Automation Management System for employees to accomplish their office basic tasks and goals digitally.",
  },
];
