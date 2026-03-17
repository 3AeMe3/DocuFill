import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { contractSections } from '../data/contractTemplate'
import renderText from '../utils/renderText'
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 32,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 16,
    fontSize: 16,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'justify',
  },
})

type PdfTextProps = {
  data: Record<string, unknown>
}

export default function PdfText({ data }: PdfTextProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {contractSections.map((section, idx) => {
          const text = renderText(section, data)
          const isTitle = section === 'CONTRATO DE ARRENDAMIENTO DE VIVIENDA'
          const isSubtitle = section === 'REUNIDOS' || section === 'EXPONEN'

          return (
            <View key={idx} style={styles.section}>
              <Text
                style={
                  isTitle
                    ? styles.title
                    : isSubtitle
                      ? styles.subtitle
                      : styles.text
                }
              >
                {text}
              </Text>
            </View>
          )
        })}
      </Page>
    </Document>
  )
}
