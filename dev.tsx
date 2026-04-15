import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Dev() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* 🔙 BOTÃO DE VOLTA */}
      <TouchableOpacity style={styles.botao} onPress={() => router.replace('/')}>
        <Text style={styles.textoBotao}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>🚀 Desenvolvedor</Text>

      <View style={styles.card}>
        <Text style={styles.nome}>Guilherme Sertorio</Text>

        <View style={styles.divisor} />

        <Text style={styles.info}>💻 Desenvolvimento de Sistemas</Text>
        <Text style={styles.info}>📱 Aplicativo de Futsal</Text>
        <Text style={styles.info}>⚛️ React Native + Expo</Text>
      </View>

      <Text style={styles.footer}>🔥 Projeto Profissional</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center"
  },

  // 🔙 botão
  botao: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#22c55e",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    zIndex: 10
  },
  textoBotao: {
    color: "#000",
    fontWeight: "bold"
  },

  titulo: {
    color: "#22c55e",
    fontSize: 26,
    marginBottom: 20,
    fontWeight: "bold"
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    width: "80%",
    elevation: 5
  },

  divisor: {
    height: 1,
    backgroundColor: "#334155",
    width: "100%",
    marginVertical: 15
  },

  nome: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },

  info: {
    color: "#cbd5f5",
    marginTop: 10,
    fontSize: 15
  },

  footer: {
    color: "#facc15",
    marginTop: 20,
    fontSize: 16
  }
});