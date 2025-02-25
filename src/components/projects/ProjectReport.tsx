import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 11,
    color: "#666",
    marginBottom: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: "bold",
  },
  field: {
    marginBottom: 4,
  },
  fieldLabel: {
    fontWeight: "medium",
  },
  hardwareSection: {
    marginTop: 20,
    marginBottom: 15,
  },
  hardwareTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    backgroundColor: "#f5f5f5",
    padding: 4,
  },
  componentGroup: {
    marginBottom: 15,
  },
  componentTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
  },
  componentDetail: {
    marginLeft: 12,
    fontSize: 10,
    marginBottom: 2,
  },
  boardsSection: {
    marginTop: 20,
  },
  boardGroup: {
    marginBottom: 12,
  },
  boardTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
  },
  boardDetail: {
    marginLeft: 12,
    fontSize: 10,
    marginBottom: 2,
  },
  signature: {
    marginTop: 40,
    borderTop: "1pt solid #000",
    paddingTop: 20,
  },
  signatureText: {
    fontSize: 10,
    marginBottom: 30,
  },
  signatureLine: {
    borderTop: "1pt solid #000",
    width: 200,
    marginTop: 40,
  },
  signatureLabel: {
    fontSize: 10,
    marginTop: 5,
  },
  dateLabel: {
    fontSize: 10,
    marginTop: 5,
    position: "absolute",
    right: 0,
    width: 200,
    textAlign: "center",
  },
});

interface ProjectReportProps {
  project: any;
  specs?: any;
  boards?: any[];
}

const ProjectReport = ({ project, specs, boards }: ProjectReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Relatório Técnico</Text>
        <Text style={styles.subtitle}>
          MCM Systems - Soluções em Tecnologia
        </Text>
        <Text style={styles.subtitle}>
          Documento gerado em {new Date().toLocaleDateString()}
        </Text>
      </View>

      {/* Project Info */}
      <View style={styles.section}>
        <View style={styles.field}>
          <Text>Título do Projeto</Text>
          <Text>{project.title}</Text>
        </View>

        <View style={styles.field}>
          <Text>Prazo de Entrega</Text>
          <Text>{project.dueDate}</Text>
        </View>

        <View style={styles.field}>
          <Text>Categoria</Text>
          <Text>Calibradores</Text>
        </View>

        <View style={styles.field}>
          <Text>Observações</Text>
          <Text>{project.description}</Text>
        </View>
      </View>

      {/* Hardware Specs */}
      {specs && (
        <View style={styles.hardwareSection}>
          <Text style={styles.hardwareTitle}>
            Especificações Técnicas de Hardware
          </Text>

          {/* Basic Components */}
          <View style={styles.componentGroup}>
            <Text style={styles.componentTitle}>Componentes Básicos</Text>
            <View style={styles.componentDetail}>
              <Text>Processador</Text>
              <Text>Modelo: {specs.processor}</Text>
            </View>
            <View style={styles.componentDetail}>
              <Text>Placa Mãe</Text>
              <Text>Modelo: {specs.motherboard}</Text>
            </View>
            <View style={styles.componentDetail}>
              <Text>Memória RAM</Text>
              <Text>Modelo: {specs.ram?.model}</Text>
              <Text>Quantidade: {specs.ram?.quantity}</Text>
            </View>
            <View style={styles.componentDetail}>
              <Text>Armazenamento</Text>
              <Text>Modelo: {specs.ssd?.model}</Text>
              <Text>Quantidade: {specs.ssd?.quantity}</Text>
            </View>
          </View>

          {/* Network Components */}
          <View style={styles.componentGroup}>
            <Text style={styles.componentTitle}>Componentes de Rede</Text>
            {specs.ethernetCard?.included && (
              <View style={styles.componentDetail}>
                <Text>Placa de Rede</Text>
                <Text>Modelo: {specs.ethernetCard.model}</Text>
                <Text>Portas: {specs.ethernetCard.ports}</Text>
                <Text>Quantidade: {specs.ethernetCard.quantity}</Text>
              </View>
            )}
            {specs.wifiAdapter?.included && (
              <View style={styles.componentDetail}>
                <Text>Adaptador Wi-Fi</Text>
                <Text>Modelo: {specs.wifiAdapter.model}</Text>
              </View>
            )}
            {specs.networkSwitch?.included && (
              <View style={styles.componentDetail}>
                <Text>Switch de Rede</Text>
                <Text>Modelo: {specs.networkSwitch.model}</Text>
                <Text>Portas: {specs.networkSwitch.ports}</Text>
              </View>
            )}
          </View>

          {/* Calibrator Components */}
          <View style={styles.componentGroup}>
            <Text style={styles.componentTitle}>Componentes do Calibrador</Text>
            {specs.mioCard?.included && (
              <View style={styles.componentDetail}>
                <Text>Placa MIO</Text>
                <Text>Modelo: {specs.mioCard.model}</Text>
                {specs.mioCard.hasConditioning && (
                  <Text>Com cabo e condicionamento</Text>
                )}
              </View>
            )}
            {specs.shentekCard?.included && (
              <View style={styles.componentDetail}>
                <Text>Placa Shentek</Text>
                <Text>Modelo: {specs.shentekCard.model}</Text>
                <Text>{specs.shentekCard.type} portas</Text>
                {specs.shentekCard.hasConditioning && (
                  <Text>Com cabo e condicionamento</Text>
                )}
              </View>
            )}
            {specs.camera?.included && (
              <View style={styles.componentDetail}>
                <Text>Câmera</Text>
                <Text>Tipo: {specs.camera.type}</Text>
                <Text>Quantidade: {specs.camera.quantity}</Text>
                <Text>Tipo da Lente: {specs.camera.lensType}</Text>
                <Text>Quantidade de Lentes: {specs.camera.lensQuantity}</Text>
                <Text>Tipo do Cabo: {specs.camera.cableType}</Text>
                <Text>Quantidade de Cabos: {specs.camera.cableQuantity}</Text>
              </View>
            )}
            {specs.securityPen && (
              <View style={styles.componentDetail}>
                <Text>Pen de Segurança</Text>
                <Text>Código: {specs.securityPen.code}</Text>
                <Text>Modelo: {specs.securityPen.model}</Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* Boards */}
      {boards && boards.length > 0 && (
        <View style={styles.boardsSection}>
          <Text style={styles.hardwareTitle}>Especificações das Placas</Text>
          <Text style={styles.subtitle}>
            Detalhamento das placas utilizadas no projeto
          </Text>

          {boards.map((board, index) => (
            <View key={index} style={styles.boardGroup}>
              <Text style={styles.boardTitle}>{board.type}</Text>
              <View style={styles.boardDetail}>
                <Text>Quantidade: {board.quantity} unidade(s)</Text>
                <Text>Versão: {board.version}</Text>
                {board.codes && board.codes.length > 0 && (
                  <View>
                    <Text>Códigos:</Text>
                    {board.codes.map((code: string, idx: number) => (
                      <Text key={idx}>• {code}</Text>
                    ))}
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Technical Responsibility Term */}
      <View style={styles.signature}>
        <Text style={styles.signatureText}>
          Declaro que todos os componentes foram devidamente testados e
          validados, garantindo que estão prontos para utilização.
        </Text>
        <View style={styles.signatureLine} />
        <Text style={styles.signatureLabel}>Técnico Responsável</Text>
        <Text style={styles.dateLabel}>Data: ___/___/____</Text>
      </View>
    </Page>
  </Document>
);

export default ProjectReport;
