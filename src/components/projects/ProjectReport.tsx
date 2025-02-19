import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    borderBottom: "1pt solid #000",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
  },
  signature: {
    marginTop: 50,
    borderTop: "1pt solid #000",
    paddingTop: 10,
    width: 200,
  },
});

interface ProjectReportProps {
  project: {
    title: string;
    type: string;
    serviceType: string;
    status: string;
    priority: string;
    dueDate: string;
    description: string;
    hardwareSpecs?: any;
    boards?: any[];
    repairDetails?: {
      description: string;
      replacedComponents: Array<{ name: string; quantity: string }>;
    };
  };
}

const ProjectReport = ({ project }: ProjectReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.text}>MCM Systems - Relatório Técnico</Text>
        <Text style={styles.text}>Data: {new Date().toLocaleDateString()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Gerais</Text>
        <Text style={styles.text}>Tipo: {project.type}</Text>
        <Text style={styles.text}>Serviço: {project.serviceType}</Text>
        <Text style={styles.text}>Status: {project.status}</Text>
        <Text style={styles.text}>Prioridade: {project.priority}</Text>
        <Text style={styles.text}>Data Limite: {project.dueDate}</Text>
        <Text style={styles.text}>Descrição: {project.description}</Text>
      </View>

      {project.hardwareSpecs && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Especificações de Hardware</Text>
          {/* Add hardware specs details */}
        </View>
      )}

      {project.boards && project.boards.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Placas</Text>
          {project.boards.map((board, index) => (
            <View key={index}>
              <Text style={styles.text}>Tipo: {board.type}</Text>
              <Text style={styles.text}>Quantidade: {board.quantity}</Text>
              {board.codes && (
                <Text style={styles.text}>
                  Códigos: {board.codes.join(", ")}
                </Text>
              )}
            </View>
          ))}
        </View>
      )}

      {project.repairDetails && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalhes da Reparação</Text>
          <Text style={styles.text}>
            Descrição: {project.repairDetails.description}
          </Text>
          {project.repairDetails.replacedComponents.length > 0 && (
            <View>
              <Text style={styles.text}>Componentes Trocados:</Text>
              {project.repairDetails.replacedComponents.map((comp, index) => (
                <Text key={index} style={styles.text}>
                  - {comp.name}: {comp.quantity} unidade(s)
                </Text>
              ))}
            </View>
          )}
        </View>
      )}

      <View style={styles.signature}>
        <Text style={styles.text}>Assinatura do Técnico:</Text>
        <Text style={styles.text}>_____________________</Text>
        <Text style={styles.text}>Data: {new Date().toLocaleDateString()}</Text>
      </View>
    </Page>
  </Document>
);

export default ProjectReport;
