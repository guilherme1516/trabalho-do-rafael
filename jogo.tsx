import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

export default function Jogo() {
  const router = useRouter();

  const jogos = [
    { id: 1, casa: "🇧🇷 Brasil", golsCasa: 3, fora: "🇯🇵 Japão", golsFora: 1, fase: "Grupo A" },
    { id: 2, casa: "🇪🇸 Espanha", golsCasa: 2, fora: "🇵🇹 Portugal", golsFora: 2, fase: "Grupo B" },
    { id: 3, casa: "🇦🇷 Argentina", golsCasa: 4, fora: "🇺🇸 Estados Unidos", golsFora: 0, fase: "Grupo C" },
    { id: 4, casa: "🇫🇷 França", golsCasa: 1, fora: "🇮🇹 Itália", golsFora: 2, fase: "Grupo D" },
    { id: 5, casa: "🇧🇷 Brasil", golsCasa: 5, fora: "🇮🇹 Itália", golsFora: 2, fase: "Oitavas" },
    { id: 6, casa: "🇦🇷 Argentina", golsCasa: 3, fora: "🇪🇸 Espanha", golsFora: 1, fase: "Oitavas" },
    { id: 7, casa: "🇧🇷 Brasil", golsCasa: 4, fora: "🇵🇹 Portugal", golsFora: 2, fase: "Quartas" },
    { id: 8, casa: "🇦🇷 Argentina", golsCasa: 2, fora: "🇫🇷 França", golsFora: 1, fase: "Quartas" },
    { id: 9, casa: "🇧🇷 Brasil", golsCasa: 3, fora: "🇦🇷 Argentina", golsFora: 2, fase: "Semifinal" },
    { id: 10, casa: "🇧🇷 Brasil", golsCasa: 4, fora: "🇪🇸 Espanha", golsFora: 3, fase: "Final 🏆" }
  ];
  type JogoType = {
    id: number;
    casa: string;
    fora: string;
    golsCasa: number;
    golsFora: number;
    fase: string;
  };
  const renderItem = ({ item }: { item: JogoType }) => (
  <View style={styles.card}>
    <Text style={styles.fase}>{item.fase}</Text>

    <View style={styles.linha}>
      <Text style={styles.time}>{item.casa}</Text>
      <Text style={styles.gol}>{item.golsCasa}</Text>
    </View>

    <View style={styles.divisor} />

    <View style={styles.linha}>
      <Text style={styles.time}>{item.fora}</Text>
      <Text style={styles.gol}>{item.golsFora}</Text>
    </View>
  </View>
);

  return (
    <View style={styles.container}>

      {/* BOTÃO VOLTAR */}
      <TouchableOpacity style={styles.botao} onPress={() => router.replace('/')}>
        <Text style={styles.textoBotao}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>⚽ Jogos de Futsal</Text>

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 80, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    paddingHorizontal: 20
  },

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
    fontSize: 24,
    marginTop: 100,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15
  },

  fase: {
    color: "#facc15",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold"
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  divisor: {
    height: 1,
    backgroundColor: "#334155",
    marginVertical: 10
  },

  time: {
    color: "#fff",
    fontSize: 16
  },

  gol: {
    color: "#22c55e",
    fontSize: 28,
    fontWeight: "bold"
  }
});