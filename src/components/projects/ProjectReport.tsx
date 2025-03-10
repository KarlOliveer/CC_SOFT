import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 30,
    borderBottom: "2pt solid #0066cc",
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 6,
    fontWeight: "bold",
    color: "#0066cc",
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 5,
  },
  field: {
    marginBottom: 10,
    flexDirection: "row",
  },
  fieldLabel: {
    fontWeight: "bold",
    width: 150,
    color: "#0066cc",
  },
  fieldValue: {
    flex: 1,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#0066cc",
    borderBottom: "1pt solid #0066cc",
    paddingBottom: 5,
  },
  observationsSection: {
    marginTop: 20,
    backgroundColor: "#f0f7ff",
    padding: 15,
    borderRadius: 5,
    borderLeft: "4pt solid #0066cc",
  },
  hardwareSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  hardwareTitle: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#0066cc",
    backgroundColor: "#e6f0ff",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  componentGroup: {
    marginBottom: 25,
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 5,
    borderLeft: "3pt solid #0066cc",
  },
  componentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#0066cc",
    borderBottom: "1pt solid #ccc",
    paddingBottom: 5,
  },
  tableHeader: {
    backgroundColor: "#e6f0ff",
    flexDirection: "row",
    borderBottomColor: "#0066cc",
    borderBottomWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 5,
  },
  tableCell: {
    flex: 1,
  },
  tableCellHeader: {
    color: "#0066cc",
    fontWeight: "bold",
  },
  boardsSection: {
    marginTop: 20,
  },
  boardGroup: {
    marginBottom: 20,
    backgroundColor: "#f0f7ff",
    padding: 15,
    borderRadius: 5,
    borderLeft: "3pt solid #0066cc",
  },
  boardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0066cc",
    borderBottom: "1pt solid #ccc",
    paddingBottom: 5,
  },
  boardField: {
    flexDirection: "row",
    marginBottom: 6,
    borderBottom: "0.5pt dotted #eee",
    paddingBottom: 4,
  },
  boardLabel: {
    fontWeight: "bold",
    width: 120,
    color: "#444",
  },
  boardValue: {
    flex: 1,
    color: "#333",
  },
  codesList: {
    marginTop: 10,
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 4,
  },
  codeItem: {
    marginLeft: 15,
    marginBottom: 4,
    color: "#333",
  },
  signatureSection: {
    marginTop: 40,
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 5,
  },
  signatureTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#0066cc",
    textAlign: "center",
    borderBottom: "1pt solid #0066cc",
    paddingBottom: 5,
  },
  signatureText: {
    marginBottom: 30,
    textAlign: "justify",
    lineHeight: 1.5,
    fontSize: 12,
  },
  signatureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  signatureBox: {
    width: 200,
  },
  signatureLine: {
    borderBottom: "1pt solid #000",
  },
  signatureLabel: {
    fontSize: 10,
    marginTop: 5,
    textAlign: "center",
    color: "#666",
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#666",
  },
});

interface ProjectReportProps {
  project: any;
  specs?: any;
  boards?: any[];
}

const ProjectReport = ({ project, specs, boards }: ProjectReportProps) => {
  // Calculate total pages for footer
  const totalPages = 4; // Default to 4 pages

  return (
    <Document>
      {/* General Information Page */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Relatório Técnico</Text>
            <Text style={styles.subtitle}>
              MCM Systems - Soluções em Tecnologia
            </Text>
            <Text style={styles.subtitle}>
              Documento gerado em {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>

        {/* Project Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações do Projeto</Text>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Título do Projeto</Text>
            <Text style={styles.fieldValue}>{project.title}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Prazo de Entrega</Text>
            <Text style={styles.fieldValue}>{project.dueDate}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Categoria</Text>
            <Text style={styles.fieldValue}>
              {project.type === "calibrador"
                ? "Calibradores"
                : project.type === "pc"
                  ? "PC"
                  : project.type === "placa"
                    ? "Placa"
                    : "Outros"}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Tipo de Serviço</Text>
            <Text style={styles.fieldValue}>
              {project.serviceType === "montagem" ? "Montagem" : "Reparação"}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Prioridade</Text>
            <Text style={styles.fieldValue}>{project.priority}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Status</Text>
            <Text style={styles.fieldValue}>{project.status}</Text>
          </View>
        </View>

        <View style={styles.observationsSection}>
          <Text style={styles.sectionTitle}>Observações</Text>
          <Text>{project.description || "Nenhuma observação registrada."}</Text>
        </View>

        <Text style={styles.pageNumber}>
          MCM Systems - Relatório Técnico - Página 1 de {totalPages}
        </Text>
      </Page>

      {/* Hardware Specs Page */}
      {specs && (project.type === "pc" || project.type === "calibrador") && (
        <Page size="A4" style={styles.page}>
          <View style={styles.hardwareSection}>
            <Text style={styles.hardwareTitle}>
              Especificações Técnicas de Hardware
            </Text>

            {/* Basic Components */}
            <View style={styles.componentGroup}>
              <Text style={styles.componentTitle}>Componentes Básicos</Text>

              <View style={styles.tableHeader}>
                <Text style={[styles.tableCell, styles.tableCellHeader]}>
                  Componente
                </Text>
                <Text style={[styles.tableCell, styles.tableCellHeader]}>
                  Especificação
                </Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Processador</Text>
                <Text style={styles.tableCell}>
                  {specs.processor || "Não especificado"}
                </Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Placa Mãe</Text>
                <Text style={styles.tableCell}>
                  {specs.motherboard || "Não especificada"}
                </Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Memória RAM</Text>
                <Text style={styles.tableCell}>
                  {specs.ram?.model || "Não especificado"} -{" "}
                  {specs.ram?.quantity || "0"} unidade(s)
                </Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Armazenamento</Text>
                <Text style={styles.tableCell}>
                  {specs.ssd?.model || "Não especificado"} -{" "}
                  {specs.ssd?.quantity || "0"} unidade(s)
                </Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Sistema Operacional</Text>
                <Text style={styles.tableCell}>
                  {specs.operatingSystem || "Não especificado"}
                </Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Fonte de Alimentação</Text>
                <Text style={styles.tableCell}>
                  {specs.powerSupply || "Não especificada"}
                </Text>
              </View>
            </View>

            {/* Network Components */}
            <View style={styles.componentGroup}>
              <Text style={styles.componentTitle}>Componentes de Rede</Text>

              {specs.ethernetCard?.included ||
              specs.wifiAdapter?.included ||
              specs.networkSwitch?.included ? (
                <>
                  <View style={styles.tableHeader}>
                    <Text style={[styles.tableCell, styles.tableCellHeader]}>
                      Componente
                    </Text>
                    <Text style={[styles.tableCell, styles.tableCellHeader]}>
                      Especificação
                    </Text>
                  </View>

                  {specs.ethernetCard?.included && (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>Placa de Rede</Text>
                      <Text style={styles.tableCell}>
                        {specs.ethernetCard.model || "Não especificado"} -{" "}
                        {specs.ethernetCard.ports || "0"} portas -{" "}
                        {specs.ethernetCard.quantity || "0"} unidade(s)
                      </Text>
                    </View>
                  )}

                  {specs.wifiAdapter?.included && (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>Adaptador Wi-Fi</Text>
                      <Text style={styles.tableCell}>
                        {specs.wifiAdapter.model || "Não especificado"}
                      </Text>
                    </View>
                  )}

                  {specs.networkSwitch?.included && (
                    <View style={styles.tableRow}>
                      <Text style={styles.tableCell}>Switch de Rede</Text>
                      <Text style={styles.tableCell}>
                        {specs.networkSwitch.model || "Não especificado"} -{" "}
                        {specs.networkSwitch.ports || "0"} portas
                      </Text>
                    </View>
                  )}
                </>
              ) : (
                <Text>Nenhum componente de rede especificado</Text>
              )}
            </View>

            {/* Calibrator Components */}
            {project.type === "calibrador" && (
              <View style={styles.componentGroup}>
                <Text style={styles.componentTitle}>
                  Componentes do Calibrador
                </Text>

                <View style={styles.tableHeader}>
                  <Text style={[styles.tableCell, styles.tableCellHeader]}>
                    Componente
                  </Text>
                  <Text style={[styles.tableCell, styles.tableCellHeader]}>
                    Especificação
                  </Text>
                </View>

                {specs.mioCard?.included && (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Placa MIO</Text>
                    <Text style={styles.tableCell}>
                      {specs.mioCard.model || "Não especificado"} -{" "}
                      {specs.mioCard.hasConditioning
                        ? "Com cabo e condicionamento"
                        : "Sem cabo e condicionamento"}
                    </Text>
                  </View>
                )}

                {specs.shentekCard?.included && (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Placa Shentek</Text>
                    <Text style={styles.tableCell}>
                      {specs.shentekCard.model || "Não especificado"} - Tipo{" "}
                      {specs.shentekCard.type || "Não especificado"} -
                      {specs.shentekCard.hasConditioning
                        ? "Com cabo e condicionamento"
                        : "Sem cabo e condicionamento"}
                    </Text>
                  </View>
                )}

                {specs.camera?.included && (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Câmera</Text>
                    <Text style={styles.tableCell}>
                      Tipo: {specs.camera.type || "Não especificado"} - Qtd:{" "}
                      {specs.camera.quantity || "0"} - Lente:{" "}
                      {specs.camera.lensType || "Não especificada"} (
                      {specs.camera.lensQuantity || "0"}) - Cabo:{" "}
                      {specs.camera.cableType || "Não especificado"} (
                      {specs.camera.cableQuantity || "0"})
                    </Text>
                  </View>
                )}

                {specs.securityPen && (
                  <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Pen de Segurança</Text>
                    <Text style={styles.tableCell}>
                      {specs.securityPen.model || "Não especificado"} - Código:{" "}
                      {specs.securityPen.code || "Não especificado"}
                    </Text>
                  </View>
                )}

                {!specs.mioCard?.included &&
                  !specs.shentekCard?.included &&
                  !specs.camera?.included &&
                  !specs.securityPen && (
                    <Text>
                      Nenhum componente específico de calibrador especificado
                    </Text>
                  )}
              </View>
            )}
          </View>

          <Text style={styles.pageNumber}>
            MCM Systems - Relatório Técnico - Página 2 de {totalPages}
          </Text>
        </Page>
      )}

      {/* Boards Page */}
      {boards && boards.length > 0 && (
        <Page size="A4" style={styles.page}>
          <View style={styles.boardsSection}>
            <Text style={styles.hardwareTitle}>Especificações das Placas</Text>

            {boards.map((board, index) => (
              <View key={index.toString()} style={styles.boardGroup}>
                <Text style={styles.boardTitle}>{board.type}</Text>

                <View style={styles.tableHeader}>
                  <Text style={[styles.tableCell, styles.tableCellHeader]}>
                    Atributo
                  </Text>
                  <Text style={[styles.tableCell, styles.tableCellHeader]}>
                    Valor
                  </Text>
                </View>

                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Quantidade</Text>
                  <Text style={styles.tableCell}>
                    {board.quantity} unidade(s)
                  </Text>
                </View>

                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Versão</Text>
                  <Text style={styles.tableCell}>
                    {board.version || "Não especificada"}
                  </Text>
                </View>

                {board.codes && board.codes.length > 0 && (
                  <View style={styles.codesList}>
                    <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
                      Códigos:
                    </Text>
                    {board.codes.map((code: string, idx: number) => (
                      <Text key={idx.toString()} style={styles.codeItem}>
                        • {code || "Não especificado"}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>

          <Text style={styles.pageNumber}>
            MCM Systems - Relatório Técnico - Página 3 de {totalPages}
          </Text>
        </Page>
      )}

      {/* Signature Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.signatureSection}>
          <Text style={styles.signatureTitle}>
            Termo de Responsabilidade Técnica
          </Text>

          <Text style={styles.signatureText}>
            Eu, abaixo assinado, declaro que todos os componentes e serviços
            descritos neste relatório foram devidamente testados e validados,
            garantindo que estão prontos para utilização conforme as
            especificações técnicas detalhadas nas páginas anteriores.
          </Text>

          <Text style={styles.signatureText}>
            Certifico que o projeto "{project.title}" foi concluído de acordo
            com os requisitos estabelecidos e que todas as informações contidas
            neste documento são verdadeiras e precisas.
          </Text>

          <Text style={styles.signatureText}>
            Este relatório técnico serve como documento oficial de entrega e
            aceitação do projeto.
          </Text>

          <View style={styles.signatureContainer}>
            <View style={styles.signatureBox}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLabel}>Técnico Responsável</Text>
            </View>

            <View style={styles.signatureBox}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLabel}>Cliente</Text>
            </View>
          </View>

          <View style={{ marginTop: 50, alignItems: "center" }}>
            <Text>Data: ___/___/______</Text>
          </View>
        </View>

        <Text style={styles.pageNumber}>
          MCM Systems - Relatório Técnico - Página 4 de {totalPages}
        </Text>
      </Page>
    </Document>
  );
};

export default ProjectReport;
