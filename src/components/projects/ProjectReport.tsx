import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import mcmLogo from "@/assets/mcm_logo.png";

// Optional: Embed fonts or other advanced styling here
// Font.register({ family: "Roboto", src: "..." });

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#FFF",
    color: "#333",
    lineHeight: 1.5,
    textAlign: "center",
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#888888",
    paddingBottom: 10,
  },
  logo: {
    width: 100, // Only width is set to maintain aspect ratio
    marginBottom: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: "bold",
    color: "#444444",
  },
  subtitle: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
  },
  field: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontWeight: "bold",
    color: "#444444",
    marginBottom: 2,
  },
  // Project info columns
  projectInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  projectColumn: {
    flex: 1,
    paddingHorizontal: 5,
  },
  // Hardware specs section
  hardwareSection: {
    marginTop: 30,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
  },
  hardwareTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    backgroundColor: "#444444",
    color: "#FFF",
    padding: 6,
    borderRadius: 4,
  },
  componentGroup: {
    marginBottom: 15,
  },
  componentTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#444444",
  },
  componentDetail: {
    fontSize: 11,
    marginBottom: 4,
  },
  // Two-column layout for specs
  specsColumnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  specsColumn: {
    flex: 1,
    paddingHorizontal: 5,
  },
  // Boards section and its two-column layout
  boardsSection: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
  },
  boardsColumnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boardsColumn: {
    flex: 1,
    paddingHorizontal: 5,
  },
  boardGroup: {
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#FFF",
    borderRadius: 4,
  },
  boardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#444444",
  },
  boardDetail: {
    fontSize: 11,
    marginBottom: 4,
  },
  // Footer and signing section
  footer: {
    marginTop: 50,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#444444",
  },
  footerText: {
    fontSize: 11,
    marginBottom: 20,
    textAlign: "center",
  },
  signatureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  signatureLeft: {
    flexDirection: "column",
    alignItems: "center", // Centers signature line and label
  },
  signatureLine: {
    borderTopWidth: 1,
    borderTopColor: "#444444",
    width: 220,
  },
  signatureLabel: {
    fontSize: 11,
    marginTop: 5,
  },
  dateBlock: {
    textAlign: "right",
  },
  dateLabel: {
    fontSize: 11,
  },
});

interface ProjectReportProps {
  project: any;
}

const ProjectReport = ({ project }: ProjectReportProps) => {
  const specs = project?.hardwareSpecs ?? {};
  const boards = project?.boards ?? [];

  const {
    processor,
    motherboard,
    ram,
    ssd,
    operatingSystem,
    powerSupply,
    ethernetCard,
    serialCard,
    wifiAdapter,
    networkSwitch,
    securityPen,
    mioCard,
    shentekCard,
    camera,
    additionalComponents,
  } = specs;

  // Divide boards array into two columns
  const midIndex = Math.ceil(boards.length / 2);
  const leftBoards = boards.slice(0, midIndex);
  const rightBoards = boards.slice(midIndex);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Logo */}
        <View style={styles.header} wrap={false}>
          <Image src={mcmLogo} style={styles.logo} />
          <Text style={styles.title}>Relatório Técnico</Text>
          <Text style={styles.subtitle}>
            MCM Systems - Soluções em Tecnologia
          </Text>
          <Text style={styles.subtitle}>
            Documento gerado em{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Text>
        </View>

        {/* Project Info Section in Two Columns */}
        <View style={styles.section} wrap={false}>
          <View style={styles.projectInfoRow}>
            <View style={styles.projectColumn}>
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>Título do Projeto:</Text>
                <Text>{project?.title || "N/A"}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>Tipo de Projeto:</Text>
                <Text>{project?.type || "N/A"}</Text>
              </View>
            </View>
            <View style={styles.projectColumn}>
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>Prazo de Entrega:</Text>
                <Text>{project?.dueDate || "N/A"}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>Status:</Text>
                <Text>{project?.status || "N/A"}</Text>
              </View>
            </View>
          </View>
          {/* Full-width Observações */}
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Observações:</Text>
            <Text>{project?.description || "N/A"}</Text>
          </View>
        </View>

        {/* Hardware Specs Section in Two Columns */}
        {Object.keys(specs).length > 0 && (
          <View style={styles.hardwareSection} wrap={false}>
            <Text style={styles.hardwareTitle}>Especificações de Hardware</Text>
            <View style={styles.specsColumnsContainer} wrap={false}>
              {/* Left Column: Basic and Network Components */}
              <View style={styles.specsColumn} wrap={false}>
                <View style={styles.componentGroup} wrap={false}>
                  <Text style={styles.componentTitle}>
                    Componentes Básicos
                  </Text>
                  <View style={styles.componentDetail}>
                    <Text>Processador: {processor || "N/A"}</Text>
                  </View>
                  <View style={styles.componentDetail}>
                    <Text>Placa Mãe: {motherboard || "N/A"}</Text>
                  </View>
                  <View style={styles.componentDetail}>
                    <Text>Memória RAM:</Text>
                    <Text>- Modelo: {ram?.model || "N/A"}</Text>
                    <Text>- Quantidade: {ram?.quantity || "N/A"}</Text>
                  </View>
                  <View style={styles.componentDetail}>
                    <Text>Armazenamento (SSD):</Text>
                    <Text>- Modelo: {ssd?.model || "N/A"}</Text>
                    <Text>- Quantidade: {ssd?.quantity || "N/A"}</Text>
                  </View>
                  <View style={styles.componentDetail}>
                    <Text>
                      Sistema Operacional: {operatingSystem || "N/A"}
                    </Text>
                  </View>
                  <View style={styles.componentDetail}>
                    <Text>
                      Fonte de Alimentação: {powerSupply || "N/A"}
                    </Text>
                  </View>
                </View>
                <View style={styles.componentGroup} wrap={false}>
                  <Text style={styles.componentTitle}>
                    Componentes de Rede
                  </Text>
                  {ethernetCard?.included && (
                    <View style={styles.componentDetail}>
                      <Text>Placa Ethernet:</Text>
                      <Text>- Modelo: {ethernetCard.model || "N/A"}</Text>
                      <Text>- Portas: {ethernetCard.ports || "N/A"}</Text>
                      <Text>
                        - Quantidade: {ethernetCard.quantity || "N/A"}
                      </Text>
                    </View>
                  )}
                  {serialCard?.included && (
                    <View style={styles.componentDetail}>
                      <Text>Placa Serial:</Text>
                      <Text>- Modelo: {serialCard.model || "N/A"}</Text>
                      <Text>- Portas: {serialCard.ports || "N/A"}</Text>
                      <Text>
                        - Quantidade: {serialCard.quantity || "N/A"}
                      </Text>
                    </View>
                  )}
                  {wifiAdapter?.included && (
                    <View style={styles.componentDetail}>
                      <Text>Adaptador Wi-Fi:</Text>
                      <Text>- Modelo: {wifiAdapter.model || "N/A"}</Text>
                    </View>
                  )}
                  {networkSwitch?.included && (
                    <View style={styles.componentDetail}>
                      <Text>Switch de Rede:</Text>
                      <Text>- Modelo: {networkSwitch.model || "N/A"}</Text>
                      <Text>- Portas: {networkSwitch.ports || "N/A"}</Text>
                    </View>
                  )}
                </View>
              </View>
              {/* Right Column: Calibrator and Additional Components */}
              <View style={styles.specsColumn} wrap={false}>
                {(project?.type === "calibrador" ||
                  securityPen ||
                  mioCard ||
                  shentekCard ||
                  camera) && (
                  <View style={styles.componentGroup} wrap={false}>
                    <Text style={styles.componentTitle}>
                      Componentes do Calibrador
                    </Text>
                    {securityPen && (
                      <View style={styles.componentDetail}>
                        <Text>Pen de Segurança:</Text>
                        <Text>
                          - Modelo: {securityPen.model || "N/A"}
                        </Text>
                        <Text>
                          - Código: {securityPen.code || "N/A"}
                        </Text>
                      </View>
                    )}
                    {mioCard?.included && (
                      <View style={styles.componentDetail}>
                        <Text>Placa MIO:</Text>
                        <Text>- Modelo: {mioCard.model || "N/A"}</Text>
                        {mioCard.hasConditioning && (
                          <Text>- Com cabo e condicionamento</Text>
                        )}
                      </View>
                    )}
                    {shentekCard?.included && (
                      <View style={styles.componentDetail}>
                        <Text>Placa Shentek:</Text>
                        <Text>- Modelo: {shentekCard.model || "N/A"}</Text>
                        <Text>- Tipo: {shentekCard.type || "N/A"}</Text>
                        {shentekCard.hasConditioning && (
                          <Text>- Com cabo e condicionamento</Text>
                        )}
                      </View>
                    )}
                    {camera?.included && (
                      <View style={styles.componentDetail}>
                        <Text>Câmera:</Text>
                        <Text>- Tipo: {camera.type || "N/A"}</Text>
                        <Text>
                          - Quantidade: {camera.quantity || "N/A"}
                        </Text>
                        <Text>- Lente: {camera.lensType || "N/A"}</Text>
                        <Text>
                          - Quantidade Lentes: {camera.lensQuantity || "N/A"}
                        </Text>
                        <Text>- Cabo: {camera.cableType || "N/A"}</Text>
                        <Text>
                          - Quantidade Cabos: {camera.cableQuantity || "N/A"}
                        </Text>
                      </View>
                    )}
                  </View>
                )}
                {Array.isArray(additionalComponents) &&
                  additionalComponents.length > 0 && (
                    <View style={styles.componentGroup} wrap={false}>
                      <Text style={styles.componentTitle}>
                        Componentes Adicionais
                      </Text>
                      {additionalComponents.map((comp: any, idx: number) => (
                        <View key={idx} style={styles.componentDetail}>
                          <Text>
                            - {comp.name || "N/A"} (Qtd:{" "}
                            {comp.quantity || "N/A"})
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
              </View>
            </View>
          </View>
        )}

        {/* Boards Section in Two Columns */}
        {boards.length > 0 && (
          <View style={styles.boardsSection} wrap={false}>
            <Text style={styles.hardwareTitle}>
              Especificações das Placas
            </Text>
            <Text style={styles.subtitle}>
              Detalhamento das placas utilizadas no projeto
            </Text>
            <View style={styles.boardsColumnsContainer} wrap={false}>
              <View style={styles.boardsColumn} wrap={false}>
                {leftBoards.map((board: any, index: number) => (
                  <View key={index} style={styles.boardGroup} wrap={false}>
                    <Text style={styles.boardTitle}>
                      {board.type || "Placa"}
                    </Text>
                    <View style={styles.boardDetail} wrap={false}>
                      <Text>
                        Quantidade: {board.quantity || "N/A"} unidade(s)
                      </Text>
                      <Text>Versão: {board.version || "N/A"}</Text>
                      {Array.isArray(board.codes) && board.codes.length > 0 && (
                        <View wrap={false}>
                          <Text>Códigos:</Text>
                          {board.codes.map((code: string, idx2: number) => (
                            <Text key={idx2}>• {code || "N/A"}</Text>
                          ))}
                        </View>
                      )}
                    </View>
                  </View>
                ))}
              </View>
              <View style={styles.boardsColumn} wrap={false}>
                {rightBoards.map((board: any, index: number) => (
                  <View key={index} style={styles.boardGroup} wrap={false}>
                    <Text style={styles.boardTitle}>
                      {board.type || "Placa"}
                    </Text>
                    <View style={styles.boardDetail} wrap={false}>
                      <Text>
                        Quantidade: {board.quantity || "N/A"} unidade(s)
                      </Text>
                      <Text>Versão: {board.version || "N/A"}</Text>
                      {Array.isArray(board.codes) && board.codes.length > 0 && (
                        <View wrap={false}>
                          <Text>Códigos:</Text>
                          {board.codes.map((code: string, idx2: number) => (
                            <Text key={idx2}>• {code || "N/A"}</Text>
                          ))}
                        </View>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* End-of-Document Signature Block (unchanged) */}
        <View style={styles.footer} wrap={false}>
          <Text style={styles.footerText}>
            Declaro que todos os componentes foram devidamente testados e
            validados, garantindo que estão prontos para utilização.
          </Text>
          <View style={styles.signatureContainer}>
            <View style={styles.signatureLeft}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLabel}>
                Técnico Responsável
              </Text>
            </View>
            <View style={styles.dateBlock}>
              <Text style={styles.dateLabel}>Data: ___/___/____</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ProjectReport;
