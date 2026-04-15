import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import jogadores from '../jogadores';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⚽ Seleção de Futsal</Text>

      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/detalhes?id=${item.id}`)}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>
              #{item.numero} • {item.posicao}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* BOTÕES */}
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/jogo')}>
        <Text style={styles.botaoTexto}>⚽ Ver Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/dev')}>
        <Text style={styles.botaoTexto}>👨‍💻 Desenvolvedor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/info')}>
        <Text style={styles.botaoTexto}>📚 Sobre o Futsal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20
  },
  titulo: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10
  },
  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  info: {
    color: "#94a3b8"
  },
  botao: {
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center"
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold"
  }
});