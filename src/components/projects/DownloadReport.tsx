import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import ProjectReport from "./ProjectReport";

export const downloadProjectReport = async (project: any) => {
  try {
    const blob = await pdf(<ProjectReport project={project} />).toBlob();
    const fileName = `${project.title.toLowerCase().replace(/ /g, "-")}-report.pdf`;
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};
