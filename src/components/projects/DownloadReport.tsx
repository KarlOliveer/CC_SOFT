<<<<<<< HEAD
// src/components/DownloadReport.tsx
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import type { Project, HardwareSpecs, Board } from "@/types/types";
// Remove direct import for now to test with base64
// import mcmLogo from "@/assets/mcm_logo.png";

export const downloadProjectReport = (project: Project) => {
  try {
    if (!project || !project.id || !project.title) {
      console.error("Invalid project data:", project);
      alert("Cannot generate report: Invalid project data.");
      return;
    }

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    pdf.setFont("Helvetica");

    const margin = 15;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = margin;

    // Placeholder base64 string (small transparent PNG for testing)
    // Replace this with your actual mcm_logo.png base64 string
    const mcmLogoBase64 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";
    const logoWidth = 40; // Width in mm
    const logoHeight = 10; // Height in mm

    const addTextWithWrap = (
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      fontSize: number = 12,
      lineHeight: number = 5
    ) => {
      pdf.setFontSize(fontSize);
      const lines = pdf.splitTextToSize(text, maxWidth);
      pdf.text(lines, x, y);
      return lines.length * lineHeight;
    };

    const addHeader = () => {
      try {
        console.log("Adding logo to PDF...");
        pdf.addImage(
          mcmLogoBase64,
          "PNG",
          (pageWidth - logoWidth) / 2,
          margin,
          logoWidth,
          logoHeight
        );
        yPosition = margin + logoHeight + 10;
      } catch (imgError) {
        console.error("Error adding image to PDF:", imgError);
        yPosition = margin + 10; // Fallback
      }
    };

    // 1. General Info Page
    addHeader();
    pdf.setFontSize(16);
    pdf.text("Relatório Técnico", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 10;
    pdf.setFontSize(12);
    pdf.text("MCM Systems - Soluções em Tecnologia", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 10;
    pdf.setFontSize(10);
    pdf.text(
      `Documento gerado em ${new Date().toLocaleDateString("pt-BR", { timeZone: "UTC" })}`,
      pageWidth / 2,
      yPosition,
      { align: "center" }
    );
    yPosition += 20;

    pdf.setFontSize(12);
    yPosition += addTextWithWrap(`Código do Projeto: ${project.id}`, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 5;
    yPosition += addTextWithWrap(
      `Data de Criação: ${new Date(project.createdAt || new Date()).toLocaleDateString("pt-BR", { timeZone: "UTC" })}`,
      margin,
      yPosition,
      pageWidth - 2 * margin
    );
    yPosition += 5;
    yPosition += addTextWithWrap(
      `Data de Conclusão: ${new Date(project.dueDate).toLocaleDateString("pt-BR", { timeZone: "UTC" })}`,
      margin,
      yPosition,
      pageWidth - 2 * margin
    );
    yPosition += 5;
    yPosition += addTextWithWrap(`Título do Projeto: ${project.title}`, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 5;
    yPosition += addTextWithWrap(`Categoria: ${project.type}`, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 5;

    if (project.description) {
      yPosition += 10;
      pdf.text("Observações:", margin, yPosition);
      yPosition += 5;
      yPosition += addTextWithWrap(project.description, margin, yPosition, pageWidth - 2 * margin);
    }

    yPosition += 5;
    yPosition += addTextWithWrap(`Status: ${project.status}`, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 5;
    yPosition += addTextWithWrap(
      `Prazo de Entrega: ${new Date(project.dueDate).toLocaleDateString("pt-BR", { timeZone: "UTC" })}`,
      margin,
      yPosition,
      pageWidth - 2 * margin
    );

    if (yPosition > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }

    // 2. Hardware Specs Page
    if (project.hardwareSpecs) {
      pdf.addPage();
      addHeader();
      pdf.setFontSize(16);
      pdf.text("Especificações Técnicas de Hardware", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 10;
      pdf.setFontSize(10);
      pdf.text("Relatório de Montagem", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 20;

      const hardwareSpecs = project.hardwareSpecs as HardwareSpecs;
      pdf.setFontSize(12);

      pdf.text("Componentes Básicos", margin, yPosition);
      yPosition += 10;
      if (hardwareSpecs.processor)
        yPosition += addTextWithWrap(`Processador: Modelo: ${hardwareSpecs.processor}`, margin, yPosition, pageWidth - 2 * margin);
      if (hardwareSpecs.ram)
        yPosition += addTextWithWrap(
          `Memória RAM: Modelo: ${hardwareSpecs.ram.model}, Quantidade: ${hardwareSpecs.ram.quantity || "1 unidade(s)"}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      if (hardwareSpecs.motherboard)
        yPosition += addTextWithWrap(`Placa Mãe: Modelo: ${hardwareSpecs.motherboard}`, margin, yPosition, pageWidth - 2 * margin);
      if (hardwareSpecs.storage)
        yPosition += addTextWithWrap(
          `Armazenamento: Modelo: ${hardwareSpecs.storage.model}, Quantidade: ${hardwareSpecs.storage.quantity || "1 unidade(s)"}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      yPosition += 10;

      pdf.text("Componentes de Rede", margin, yPosition);
      yPosition += 10;
      if (hardwareSpecs.network?.networkCard)
        yPosition += addTextWithWrap(
          `Placa de Rede: Portas: ${hardwareSpecs.network.networkCard.ports}, Quantidade: ${hardwareSpecs.network.networkCard.quantity || "1"}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      if (hardwareSpecs.wifiAdapter) yPosition += addTextWithWrap("Adaptador Wi-Fi: Instalado", margin, yPosition, pageWidth - 2 * margin);
      if (hardwareSpecs.network?.switch) yPosition += addTextWithWrap("Switch de Rede: Instalado", margin, yPosition, pageWidth - 2 * margin);
      yPosition += 10;

      pdf.text("Componentes do Calibrador", margin, yPosition);
      yPosition += 10;
      if (hardwareSpecs.calibrator.mioBoard.included)
        yPosition += addTextWithWrap(
          `Placa MIO: ${hardwareSpecs.calibrator.mioBoard.hasConditioning ? "Com cabo e condicionamento" : "Sem condicionamento"}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      if (hardwareSpecs.calibrator.camera.included)
        yPosition += addTextWithWrap(
          `Câmera: Tipo: ${hardwareSpecs.calibrator.camera.type}, Quantidade: ${hardwareSpecs.calibrator.camera.quantity || "4"}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      if (hardwareSpecs.calibrator.camera.lens)
        yPosition += addTextWithWrap(
          `Tipo de Lente: ${hardwareSpecs.calibrator.camera.lens.type}, Quantidade de Lentes: ${hardwareSpecs.calibrator.camera.lens.quantity || "4"}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      if (hardwareSpecs.calibrator.camera.cable)
        yPosition += addTextWithWrap(
          `Tipo de Cabo: ${hardwareSpecs.calibrator.camera.cable.type}, Quantidade de Cabos: ${hardwareSpecs.calibrator.camera.cable.quantity || "4"}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      if (hardwareSpecs.shentekBoard.included)
        yPosition += addTextWithWrap(
          `Placa Shentek: ${hardwareSpecs.shentekBoard.ports} portas${hardwareSpecs.shentekBoard.hasConditioning ? ", Com cabo e condicionamento" : ""}`,
          margin,
          yPosition,
          pageWidth - 2 * margin
        );
      if (hardwareSpecs.securityPen.included)
        yPosition += addTextWithWrap(`Pen de Segurança: Código: ${hardwareSpecs.securityPen.code}`, margin, yPosition, pageWidth - 2 * margin);
    }

    // 3. Boards Page
    if (project.boards?.length) {
      pdf.addPage();
      addHeader();
      pdf.setFontSize(16);
      pdf.text("Especificações das Placas", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 10;
      pdf.setFontSize(10);
      pdf.text("Detalhamento das placas utilizadas no projeto", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 20;

      pdf.setFontSize(12);
      project.boards.forEach((board: Board) => {
        if (yPosition > pageHeight - margin - 20) {
          pdf.addPage();
          addHeader();
        }
        pdf.text(board.type.toUpperCase(), margin, yPosition);
        yPosition += 10;
        yPosition += addTextWithWrap(`Quantidade: ${board.quantity || "1 unidade(s)"}`, margin, yPosition, pageWidth - 2 * margin, 12, 5);
        if (board.codes?.length) {
          yPosition += 5;
          pdf.text("Códigos:", margin, yPosition);
          yPosition += 5;
          board.codes.forEach((code) => {
            yPosition += addTextWithWrap(`- ${code || "Não especificado"}`, margin + 5, yPosition, pageWidth - 2 * margin - 5, 12, 5);
          });
        }
        yPosition += 10;
      });
    }

    // 4. Responsibility Statement Page
    pdf.addPage();
    addHeader();
    pdf.setFontSize(14);
    pdf.text("Termo de Responsabilidade Técnica", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 20;
    pdf.setFontSize(12);
    const responsibilityText =
      "Declaro que os serviços descritos neste relatório foram executados de acordo com as normas técnicas aplicáveis e que o equipamento encontra-se em condições adequadas de funcionamento.";
    yPosition += addTextWithWrap(responsibilityText, margin, yPosition, pageWidth - 2 * margin, 12, 5);
    yPosition += 30;

    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;
    pdf.setFontSize(10);
    pdf.text("Técnico Responsável", margin, yPosition);
    pdf.text("Data: ____/____/________", pageWidth - 70, yPosition);

    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(128);
      pdf.text(
        `MCM Systems - Relatório Técnico - Página ${i} de ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: "center" }
      );
    }

    const blob = pdf.output("blob");
    saveAs(blob, `relatorio-${project.id}.pdf`);
  } catch (error) {
    console.error("Error generating or downloading PDF:", error);
    alert(`Failed to generate or download the report. Check the console for details. Error: ${error.message}`);
  }
};

export default downloadProjectReport;
=======
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
>>>>>>> 49493c5 (Primeiro commit)
