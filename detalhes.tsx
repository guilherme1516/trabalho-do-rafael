import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import jogadores from './jogadores';

export default function Detalhes() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const jogador = jogadores.find(j => j.id === Number(id));

  if (!jogador) return <Text>Erro</Text>;

  return (
    <View style={styles.container}>

      {/* 🔙 BOTÃO DE VOLTA */}
      <TouchableOpacity style={styles.botao} onPress={() => router.replace('/')}>
        <Text style={styles.textoBotao}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={{ uri: jogador.imagem }} style={styles.img} />

      <Text style={styles.nome}>{jogador.nome}</Text>

      <View style={styles.card}>
        <Text style={styles.info}>Número: {jogador.numero}</Text>
        <Text style={styles.info}>Posição: {jogador.posicao}</Text>
        <Text style={styles.info}>Equipe: {jogador.equipe}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    padding: 20
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

  img: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 20,
    marginTop: 60
  },
  nome: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 15,
    width: "100%"
  },
  info: {
    color: "#cbd5f5",
    fontSize: 18,
    marginBottom: 8
  }
});